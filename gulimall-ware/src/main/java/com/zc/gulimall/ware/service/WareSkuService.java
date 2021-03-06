package com.zc.gulimall.ware.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zc.common.to.SkuHasStockVO;
import com.zc.common.utils.PageUtils;
import com.zc.gulimall.ware.entity.WareSkuEntity;

import java.util.List;
import java.util.Map;

/**
 * εεεΊε­
 *
 * @author zhaocan
 * @email zc1872751113@gmail.com
 * @date 2020-07-16 11:49:12
 */
public interface WareSkuService extends IService<WareSkuEntity> {

    PageUtils queryPage(Map<String, Object> params);

    PageUtils queryByCondition(Map<String, Object> params);

    void addStock(Long skuId, Long wareId, Integer skuNum);

    List<SkuHasStockVO> getSkuHasStock(List<Long> skuIds);
}

