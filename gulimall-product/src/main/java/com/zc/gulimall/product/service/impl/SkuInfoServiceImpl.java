package com.zc.gulimall.product.service.impl;

import com.zc.common.utils.PageUtils;
import com.zc.common.utils.Query;
import com.zc.gulimall.product.dao.SkuInfoDao;
import com.zc.gulimall.product.entity.SkuImagesEntity;
import com.zc.gulimall.product.entity.SkuInfoEntity;
import com.zc.gulimall.product.entity.SpuInfoDescEntity;
import com.zc.gulimall.product.entity.vo.SkuItemSaleAttrsVo;
import com.zc.gulimall.product.entity.vo.SkuItemVo;
import com.zc.gulimall.product.entity.vo.SpuItemBaseAttrGroupVo;
import com.zc.gulimall.product.service.*;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ThreadPoolExecutor;


@Service("skuInfoService")
public class SkuInfoServiceImpl extends ServiceImpl<SkuInfoDao, SkuInfoEntity> implements SkuInfoService {

    @Autowired
    private SkuImagesService skuImagesService;
    @Autowired
    private SpuInfoDescService spuInfoDescService;
    @Autowired
    private AttrGroupService attrGroupService;
    @Autowired
    private SkuSaleAttrValueService skuSaleAttrValueService;
    @Autowired
    private ThreadPoolExecutor executor;

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<SkuInfoEntity> page = this.page(
                new Query<SkuInfoEntity>().getPage(params),
                new QueryWrapper<SkuInfoEntity>()
        );

        return new PageUtils(page);
    }

    @Override
    public PageUtils getSkuByCondition(Map<String, Object> params) {
        //page=1&limit=10&key=&catelogId=0&brandId=0&min=0&max=0
        QueryWrapper<SkuInfoEntity> wrapper = new QueryWrapper<>();
        String key = (String) params.get("key");
        if (!StringUtils.isEmpty(key)) {
            wrapper.and(w -> {
                w.like("sku_name", key).or().like("sku_title", key).or().like("sku_subtitle", key);
            });
        }
        String catelogId = (String) params.get("catelogId");
        if (!StringUtils.isEmpty(catelogId) && !"0".equalsIgnoreCase(catelogId)) {
            wrapper.eq("catelog_id", catelogId);
        }
        String brandId = (String) params.get("brandId");
        if (!StringUtils.isEmpty(brandId) && !"0".equalsIgnoreCase(brandId)) {
            wrapper.eq("brand_id", brandId);
        }
        String min = (String) params.get("min");
        String max = (String) params.get("max");
        if (!StringUtils.isEmpty(max) && !StringUtils.isEmpty(min)) {
            try {
                BigDecimal bigDecimalMin = new BigDecimal(min);
                BigDecimal bigDecimalMax = new BigDecimal(max);
                if (bigDecimalMax.compareTo(bigDecimalMin) == 1) {
                    wrapper.ge("price", min);
                    if (bigDecimalMax.compareTo(new BigDecimal("0")) == 1) {
                        wrapper.lt("price", max);
                    }
                } else {
                    wrapper.ge("price", max);
                    if (bigDecimalMin.compareTo(new BigDecimal("0")) == 1) {
                        wrapper.lt("price", min);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        IPage<SkuInfoEntity> page = this.page(
                new Query<SkuInfoEntity>().getPage(params),
                wrapper
        );

        return new PageUtils(page);
    }

    @Override
    public List<SkuInfoEntity> getSkuBySpuId(Long spuId) {

        List<SkuInfoEntity> list = this.list(new QueryWrapper<SkuInfoEntity>().eq("spu_id", spuId));
        return list;
    }

    /**
     * ?????????????????????
     * @param skuId
     * @return
     */
    @Override
    public SkuItemVo item(Long skuId) throws ExecutionException, InterruptedException {
        SkuItemVo skuItemVo = new SkuItemVo();

        //  ???????????????
        CompletableFuture<SkuInfoEntity> infoFuture = CompletableFuture.supplyAsync(() -> {
            //1???sku??????????????????   pms_sku_info
            SkuInfoEntity info = getById(skuId);
            skuItemVo.setInfo(info);
            return info;
        }, executor);

        /**
         * ???????????????????????????????????????????????????????????????????????????????????????????????????
         */

        //  ???????????????
        CompletableFuture<Void> saleAttrFuture = infoFuture.thenAcceptAsync(res -> {
            //3?????????spu?????????????????????
            List<SkuItemSaleAttrsVo> saleAttrsVos = skuSaleAttrValueService.getSaleAttrsBySpuId(res.getSpuId());
            skuItemVo.setSaleAttr(saleAttrsVos);
        }, executor);

        //  ???????????????
        CompletableFuture<Void> descFuture = infoFuture.thenAcceptAsync(res -> {
            //4?????????spu?????????
            SpuInfoDescEntity spuInfoDescEntity = spuInfoDescService.getById(res.getSpuId());
            skuItemVo.setDesp(spuInfoDescEntity);
        }, executor);

        //  ???????????????
        CompletableFuture<Void> baseAttrFuture = infoFuture.thenAcceptAsync(res -> {
            //5?????????spu?????????????????????
            List<SpuItemBaseAttrGroupVo> attrGroupVos = attrGroupService.getAttrGroupWithAttrsBySpuId(res.getSpuId(), res.getCatelogId());
            skuItemVo.setGroupAttrs(attrGroupVos);
        }, executor);

        /**
         * ??????????????????????????????????????????????????????????????????????????????
         */
        CompletableFuture<Void> imageFuture = CompletableFuture.runAsync(() -> {
            //2???sku???????????????    pms_sku_images
            List<SkuImagesEntity> images = skuImagesService.getImagesBySkuId(skuId);
            skuItemVo.setImages(images);
        }, executor);

        //???????????????????????????
        //????????????infoFuture??????????????????????????????????????????infoFuture??????
        CompletableFuture.allOf(saleAttrFuture, descFuture, baseAttrFuture, imageFuture).get();
        return skuItemVo;
    }

}