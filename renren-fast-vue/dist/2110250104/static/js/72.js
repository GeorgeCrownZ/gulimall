webpackJsonp([72],{OBWb:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,orderSn:"",orderId:"",alipayTradeNo:"",totalAmount:"",subject:"",paymentStatus:"",createTime:"",confirmTime:"",callbackContent:"",callbackTime:""},dataRule:{orderSn:[{required:!0,message:"订单号（对外业务号）不能为空",trigger:"blur"}],orderId:[{required:!0,message:"订单id不能为空",trigger:"blur"}],alipayTradeNo:[{required:!0,message:"支付宝交易流水号不能为空",trigger:"blur"}],totalAmount:[{required:!0,message:"支付总金额不能为空",trigger:"blur"}],subject:[{required:!0,message:"交易内容不能为空",trigger:"blur"}],paymentStatus:[{required:!0,message:"支付状态不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],confirmTime:[{required:!0,message:"确认时间不能为空",trigger:"blur"}],callbackContent:[{required:!0,message:"回调内容不能为空",trigger:"blur"}],callbackTime:[{required:!0,message:"回调时间不能为空",trigger:"blur"}]}}},methods:{init:function(a){var e=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/order/paymentinfo/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(a){var t=a.data;t&&0===t.code&&(e.dataForm.orderSn=t.paymentInfo.orderSn,e.dataForm.orderId=t.paymentInfo.orderId,e.dataForm.alipayTradeNo=t.paymentInfo.alipayTradeNo,e.dataForm.totalAmount=t.paymentInfo.totalAmount,e.dataForm.subject=t.paymentInfo.subject,e.dataForm.paymentStatus=t.paymentInfo.paymentStatus,e.dataForm.createTime=t.paymentInfo.createTime,e.dataForm.confirmTime=t.paymentInfo.confirmTime,e.dataForm.callbackContent=t.paymentInfo.callbackContent,e.dataForm.callbackTime=t.paymentInfo.callbackTime)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(e){e&&a.$http({url:a.$http.adornUrl("/order/paymentinfo/"+(a.dataForm.id?"update":"save")),method:"post",data:a.$http.adornData({id:a.dataForm.id||void 0,orderSn:a.dataForm.orderSn,orderId:a.dataForm.orderId,alipayTradeNo:a.dataForm.alipayTradeNo,totalAmount:a.dataForm.totalAmount,subject:a.dataForm.subject,paymentStatus:a.dataForm.paymentStatus,createTime:a.dataForm.createTime,confirmTime:a.dataForm.confirmTime,callbackContent:a.dataForm.callbackContent,callbackTime:a.dataForm.callbackTime})}).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(t.msg)})})}}},o={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(e){a.visible=e}}},[t("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key,"Enter"))return null;a.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"订单号（对外业务号）",prop:"orderSn"}},[t("el-input",{attrs:{placeholder:"订单号（对外业务号）"},model:{value:a.dataForm.orderSn,callback:function(e){a.$set(a.dataForm,"orderSn",e)},expression:"dataForm.orderSn"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"订单id",prop:"orderId"}},[t("el-input",{attrs:{placeholder:"订单id"},model:{value:a.dataForm.orderId,callback:function(e){a.$set(a.dataForm,"orderId",e)},expression:"dataForm.orderId"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"支付宝交易流水号",prop:"alipayTradeNo"}},[t("el-input",{attrs:{placeholder:"支付宝交易流水号"},model:{value:a.dataForm.alipayTradeNo,callback:function(e){a.$set(a.dataForm,"alipayTradeNo",e)},expression:"dataForm.alipayTradeNo"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"支付总金额",prop:"totalAmount"}},[t("el-input",{attrs:{placeholder:"支付总金额"},model:{value:a.dataForm.totalAmount,callback:function(e){a.$set(a.dataForm,"totalAmount",e)},expression:"dataForm.totalAmount"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"交易内容",prop:"subject"}},[t("el-input",{attrs:{placeholder:"交易内容"},model:{value:a.dataForm.subject,callback:function(e){a.$set(a.dataForm,"subject",e)},expression:"dataForm.subject"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"支付状态",prop:"paymentStatus"}},[t("el-input",{attrs:{placeholder:"支付状态"},model:{value:a.dataForm.paymentStatus,callback:function(e){a.$set(a.dataForm,"paymentStatus",e)},expression:"dataForm.paymentStatus"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[t("el-input",{attrs:{placeholder:"创建时间"},model:{value:a.dataForm.createTime,callback:function(e){a.$set(a.dataForm,"createTime",e)},expression:"dataForm.createTime"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"确认时间",prop:"confirmTime"}},[t("el-input",{attrs:{placeholder:"确认时间"},model:{value:a.dataForm.confirmTime,callback:function(e){a.$set(a.dataForm,"confirmTime",e)},expression:"dataForm.confirmTime"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"回调内容",prop:"callbackContent"}},[t("el-input",{attrs:{placeholder:"回调内容"},model:{value:a.dataForm.callbackContent,callback:function(e){a.$set(a.dataForm,"callbackContent",e)},expression:"dataForm.callbackContent"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"回调时间",prop:"callbackTime"}},[t("el-input",{attrs:{placeholder:"回调时间"},model:{value:a.dataForm.callbackTime,callback:function(e){a.$set(a.dataForm,"callbackTime",e)},expression:"dataForm.callbackTime"}})],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.visible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},l=t("VU/8")(r,o,!1,null,null,null);e.default=l.exports}});