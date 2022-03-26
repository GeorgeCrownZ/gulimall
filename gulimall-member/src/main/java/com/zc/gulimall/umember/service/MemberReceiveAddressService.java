package com.zc.gulimall.umember.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zc.common.utils.PageUtils;
import com.zc.gulimall.umember.entity.MemberReceiveAddressEntity;

import java.util.Map;

/**
 * 会员收货地址
 *
 * @author huanglin
 * @email 2465652971@qq.com
 * @date 2020-07-16 12:24:12
 */
public interface MemberReceiveAddressService extends IService<MemberReceiveAddressEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

