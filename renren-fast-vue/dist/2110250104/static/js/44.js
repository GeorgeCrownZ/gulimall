webpackJsonp([44,89],{"4tq4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("JblQ").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/coupon/seckillpromotion/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/coupon/seckillpromotion/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:t.dataForm.key,callback:function(e){t.$set(t.dataForm,"key",e)},expression:"dataForm.key"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("coupon:seckillpromotion:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("coupon:seckillpromotion:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title","header-align":"center",align:"center",label:"活动标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"startTime","header-align":"center",align:"center",label:"开始日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"endTime","header-align":"center",align:"center",label:"结束日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"上下线状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId","header-align":"center",align:"center",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},r=a("VU/8")(i,n,!1,null,null,null);e.default=r.exports},JblQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{visible:!1,dataForm:{id:0,title:"",startTime:"",endTime:"",status:"",createTime:"",userId:"",timeRange:[]},dataRule:{title:[{required:!0,message:"活动标题不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/coupon/seckillpromotion/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.title=a.seckillPromotion.title,e.dataForm.startTime=a.seckillPromotion.startTime,e.dataForm.endTime=a.seckillPromotion.endTime,e.dataForm.status=a.seckillPromotion.status,e.dataForm.createTime=a.seckillPromotion.createTime,e.dataForm.userId=a.seckillPromotion.userId,e.dataForm.timeRange.push(e.dataForm.startTime),e.dataForm.timeRange.push(e.dataForm.endTime))})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/coupon/seckillpromotion/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,title:t.dataForm.title,startTime:t.dataForm.timeRange[0],endTime:t.dataForm.timeRange[1],status:t.dataForm.status})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"活动标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"活动标题"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"生效日期",prop:"enableStartTime"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dataForm.timeRange,callback:function(e){t.$set(t.dataForm,"timeRange",e)},expression:"dataForm.timeRange"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上下线状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"上下线状态"},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-option",{attrs:{value:1,label:"上线"}}),t._v(" "),a("el-option",{attrs:{value:0,label:"下线"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"创建人",prop:"userId"}},[a("el-input",{attrs:{placeholder:"创建人"},model:{value:t.dataForm.userId,callback:function(e){t.$set(t.dataForm,"userId",e)},expression:"dataForm.userId"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},r=a("VU/8")(i,n,!1,null,null,null);e.default=r.exports}});