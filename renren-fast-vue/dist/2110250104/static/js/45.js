webpackJsonp([45,90],{"9jTS":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("Vwpu").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/coupon/memberprice/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/coupon/memberprice/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("coupon:memberprice:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("coupon:memberprice:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuId","header-align":"center",align:"center",label:"sku_id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memberLevelId","header-align":"center",align:"center",label:"会员等级id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memberLevelName","header-align":"center",align:"center",label:"会员等级名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memberPrice","header-align":"center",align:"center",label:"会员对应价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"addOther","header-align":"center",align:"center",label:"可否叠加其他优惠"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.addOther?a("el-tag",{attrs:{type:"primary"}},[e._v("不可叠加优惠")]):a("el-tag",{attrs:{type:"success"}},[e._v("可叠加优惠")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},n=a("VU/8")(r,i,!1,null,null,null);t.default=n.exports},Vwpu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,skuId:"",memberLevelId:"",memberLevelName:"",memberPrice:"",addOther:""},dataRule:{skuId:[{required:!0,message:"sku_id不能为空",trigger:"blur"}],memberLevelId:[{required:!0,message:"会员等级id不能为空",trigger:"blur"}],memberLevelName:[{required:!0,message:"会员等级名不能为空",trigger:"blur"}],memberPrice:[{required:!0,message:"会员对应价格不能为空",trigger:"blur"}],addOther:[{required:!0,message:"可否叠加其他优惠[0-不可叠加优惠，1-可叠加]不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/coupon/memberprice/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.skuId=a.memberPrice.skuId,t.dataForm.memberLevelId=a.memberPrice.memberLevelId,t.dataForm.memberLevelName=a.memberPrice.memberLevelName,t.dataForm.memberPrice=a.memberPrice.memberPrice,t.dataForm.addOther=a.memberPrice.addOther)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/coupon/memberprice/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,skuId:e.dataForm.skuId,memberLevelId:e.dataForm.memberLevelId,memberLevelName:e.dataForm.memberLevelName,memberPrice:e.dataForm.memberPrice,addOther:e.dataForm.addOther})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"sku_id",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"sku_id"},model:{value:e.dataForm.skuId,callback:function(t){e.$set(e.dataForm,"skuId",t)},expression:"dataForm.skuId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员等级id",prop:"memberLevelId"}},[a("el-input",{attrs:{placeholder:"会员等级id"},model:{value:e.dataForm.memberLevelId,callback:function(t){e.$set(e.dataForm,"memberLevelId",t)},expression:"dataForm.memberLevelId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员等级名",prop:"memberLevelName"}},[a("el-input",{attrs:{placeholder:"会员等级名"},model:{value:e.dataForm.memberLevelName,callback:function(t){e.$set(e.dataForm,"memberLevelName",t)},expression:"dataForm.memberLevelName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员对应价格",prop:"memberPrice"}},[a("el-input",{attrs:{placeholder:"会员对应价格"},model:{value:e.dataForm.memberPrice,callback:function(t){e.$set(e.dataForm,"memberPrice",t)},expression:"dataForm.memberPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"可否叠加其他优惠",prop:"addOther"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":"0","active-text":"可叠加","inactive-text":"不可叠加"},model:{value:e.dataForm.addOther,callback:function(t){e.$set(e.dataForm,"addOther",t)},expression:"dataForm.addOther"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("VU/8")(r,i,!1,null,null,null);t.default=n.exports}});