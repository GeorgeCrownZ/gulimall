webpackJsonp([56],{aQmA:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,skuId:"",skuName:"",skuNum:"",taskId:""},dataRule:{skuId:[{required:!0,message:"sku_id不能为空",trigger:"blur"}],skuName:[{required:!0,message:"sku_name不能为空",trigger:"blur"}],skuNum:[{required:!0,message:"购买个数不能为空",trigger:"blur"}],taskId:[{required:!0,message:"工作单id不能为空",trigger:"blur"}]}}},methods:{init:function(a){var t=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/ware/wareordertaskdetail/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(a){var e=a.data;e&&0===e.code&&(t.dataForm.skuId=e.wareOrderTaskDetail.skuId,t.dataForm.skuName=e.wareOrderTaskDetail.skuName,t.dataForm.skuNum=e.wareOrderTaskDetail.skuNum,t.dataForm.taskId=e.wareOrderTaskDetail.taskId)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(t){t&&a.$http({url:a.$http.adornUrl("/ware/wareordertaskdetail/"+(a.dataForm.id?"update":"save")),method:"post",data:a.$http.adornData({id:a.dataForm.id||void 0,skuId:a.dataForm.skuId,skuName:a.dataForm.skuName,skuNum:a.dataForm.skuNum,taskId:a.dataForm.taskId})}).then(function(t){var e=t.data;e&&0===e.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(e.msg)})})}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(t){a.visible=t}}},[e("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;a.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"sku_id",prop:"skuId"}},[e("el-input",{attrs:{placeholder:"sku_id"},model:{value:a.dataForm.skuId,callback:function(t){a.$set(a.dataForm,"skuId",t)},expression:"dataForm.skuId"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"sku_name",prop:"skuName"}},[e("el-input",{attrs:{placeholder:"sku_name"},model:{value:a.dataForm.skuName,callback:function(t){a.$set(a.dataForm,"skuName",t)},expression:"dataForm.skuName"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"购买个数",prop:"skuNum"}},[e("el-input",{attrs:{placeholder:"购买个数"},model:{value:a.dataForm.skuNum,callback:function(t){a.$set(a.dataForm,"skuNum",t)},expression:"dataForm.skuNum"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"工作单id",prop:"taskId"}},[e("el-input",{attrs:{placeholder:"工作单id"},model:{value:a.dataForm.taskId,callback:function(t){a.$set(a.dataForm,"taskId",t)},expression:"dataForm.taskId"}})],1)],1),a._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){a.visible=!1}}},[a._v("取消")]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},d=e("VU/8")(r,s,!1,null,null,null);t.default=d.exports}});