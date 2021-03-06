package com.zc.gulimall.search;

import com.alibaba.fastjson.JSON;
import com.sun.javafx.collections.MappingChange;
import com.zc.gulimall.search.config.GulimallElasticSearchConfig;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.aggregations.Aggregation;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.Aggregations;
import org.elasticsearch.search.aggregations.bucket.terms.Terms;
import org.elasticsearch.search.aggregations.bucket.terms.TermsAggregationBuilder;
import org.elasticsearch.search.aggregations.metrics.Avg;
import org.elasticsearch.search.aggregations.metrics.AvgAggregationBuilder;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.util.Map;

@SpringBootTest
class GulimallSearchApplicationTests {

    @Autowired
    RestHighLevelClient client;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    static class Account {
        private int account_number;
        private int balance;
        private String firstname;
        private String lastname;
        private int age;
        private String gender;
        private String address;
        private String employer;
        private String email;
        private String city;
        private String state;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class User {
        private String userNmae;
        private String gender;
        private Integer age;
    }

    /**
     * ?????????????????????es
     * ???????????????
     */
    @Test
    void indexData() throws IOException {
        IndexRequest indexRequest = new IndexRequest("users");
        indexRequest.id("1");

        //?????????????????????k-v
        /*indexRequest.source(
                "userName", "??????",
                "age", 18,
                "gender","???"
        );*/

        //??????????????????json
        User user = new User("??????", "???", 18);
        String jsonString = JSON.toJSONString(user);
        indexRequest.source(jsonString, XContentType.JSON);

        //????????????
        IndexResponse index = client.index(indexRequest, GulimallElasticSearchConfig.COMMON_OPTIONS);
        System.out.println(index);
    }

    @Test
    void searchData() throws IOException {
        //1???????????????????????????
        SearchRequest searchRequest = new SearchRequest();
        //????????????
        searchRequest.indices("bank");
        //??????DSL??????????????????
        SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
        //1.1????????????????????????
        sourceBuilder.query(QueryBuilders.matchQuery("address","mill"));
        //sourceBuilder.from();
        //sourceBuilder.size();

        //1.2??????????????????????????????????????????
        TermsAggregationBuilder ageAgg = AggregationBuilders.terms("ageAgg").field("age").size(10);
        sourceBuilder.aggregation(ageAgg);

        //1.3????????????????????????
        AvgAggregationBuilder balanceAvg = AggregationBuilders.avg("balanceAvg").field("balance");
        sourceBuilder.aggregation(balanceAvg);

        System.out.println("???????????????" + sourceBuilder.toString());
        searchRequest.source(sourceBuilder);

        //2???????????????
        SearchResponse search = client.search(searchRequest, GulimallElasticSearchConfig.COMMON_OPTIONS);
        //3??????????????? search
        System.out.println(search.toString());

        //3.1?????????????????????????????????
        SearchHits hits = search.getHits();
        SearchHit[] searchHits = hits.getHits();

        for (SearchHit hit : searchHits) {
            //hit.getIndex();
            //hit.getType();
            //hit.getId();
            String string = hit.getSourceAsString();
            Account account = JSON.parseObject(string, Account.class);
            System.out.println("account???" + account);
        }

        //3.2??????????????????????????????????????????
        Aggregations aggregations = search.getAggregations();
        /*for (Aggregation aggregation : aggregations.asList()) {
            System.out.println("???????????????" + aggregation.getName());
            aggregation.getMetaData()
        }*/
        Terms agg = aggregations.get("ageAgg");
        for (Terms.Bucket bucket : agg.getBuckets()) {
            String keyAsString = bucket.getKeyAsString();
            System.out.println("?????????" + keyAsString + "==>" + bucket.getDocCount());
        }

        Avg balanceAgg = aggregations.get("balanceAgg");
        System.out.println("???????????????" + balanceAgg.getValue());
    }

    @Test
    void contextLoads() {
        System.out.println(client);
    }

}
