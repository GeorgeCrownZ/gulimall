webpackJsonp([3,5],{"/EfR":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("RRo+"),o=a.n(r),n={components:{SingleUpload:a("z009").a},data:function(){return{visible:!1,dataForm:{brandId:0,name:"",logo:"",descript:"",showStatus:1,firstLetter:"",sort:0},dataRule:{name:[{required:!0,message:"品牌名不能为空",trigger:"blur"}],logo:[{required:!0,message:"品牌logo地址不能为空",trigger:"blur"}],descript:[{required:!0,message:"介绍不能为空",trigger:"blur"}],showStatus:[{required:!0,message:"显示状态[0-不显示；1-显示]不能为空",trigger:"blur"}],firstLetter:[{validator:function(t,e,a){""==e?a(new Error("首字母必须填写")):/^[a-zA-Z]$/.test(e)?a():a(new Error("首字母必须a-z或者A-Z之间"))},trigger:"blur"}],sort:[{validator:function(t,e,a){""==e?a(new Error("排序字段必须填写")):!o()(e)||e<0?a(new Error("排序必须是一个大于等于0的整数")):a()},trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.brandId=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.brandId&&e.$http({url:e.$http.adornUrl("/product/brand/info/"+e.dataForm.brandId),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.name=a.brand.name,e.dataForm.logo=a.brand.logo,e.dataForm.descript=a.brand.descript,e.dataForm.showStatus=a.brand.showStatus,e.dataForm.firstLetter=a.brand.firstLetter,e.dataForm.sort=a.brand.sort)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/product/brand/"+(t.dataForm.brandId?"update":"save")),method:"post",data:t.$http.adornData({brandId:t.dataForm.brandId||void 0,name:t.dataForm.name,logo:t.dataForm.logo,descript:t.dataForm.descript,showStatus:t.dataForm.showStatus,firstLetter:t.dataForm.firstLetter,sort:t.dataForm.sort})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"140px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"品牌名",prop:"name"}},[a("el-input",{attrs:{placeholder:"品牌名"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"品牌logo地址",prop:"logo"}},[a("single-upload",{model:{value:t.dataForm.logo,callback:function(e){t.$set(t.dataForm,"logo",e)},expression:"dataForm.logo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"介绍",prop:"descript"}},[a("el-input",{attrs:{placeholder:"介绍"},model:{value:t.dataForm.descript,callback:function(e){t.$set(t.dataForm,"descript",e)},expression:"dataForm.descript"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"显示状态",prop:"showStatus"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},model:{value:t.dataForm.showStatus,callback:function(e){t.$set(t.dataForm,"showStatus",e)},expression:"dataForm.showStatus"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"检索首字母",prop:"firstLetter"}},[a("el-input",{attrs:{placeholder:"检索首字母"},model:{value:t.dataForm.firstLetter,callback:function(e){t.$set(t.dataForm,"firstLetter",e)},expression:"dataForm.firstLetter"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(e){t.$set(t.dataForm,"sort",t._n(e))},expression:"dataForm.sort"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")(n,l,!1,null,null,null);e.default=i.exports},"1alW":function(t,e,a){var r=a("kM2E");r(r.S,"Number",{isInteger:a("AKgy")})},"6+ki":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("/EfR"),o=a("2uKH"),n={data:function(){return{dataForm:{key:""},brandId:0,catelogPath:[],dataList:[],cateRelationTableData:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,cateRelationDialogVisible:!1,popCatelogSelectVisible:!1}},components:{AddOrUpdate:r.default,CategoryCascader:o.default},activated:function(){this.getDataList()},methods:{addCatelogSelect:function(){var t=this;this.popCatelogSelectVisible=!1,this.$http({url:this.$http.adornUrl("/product/categorybrandrelation/save"),method:"post",data:this.$http.adornData({brandId:this.brandId,catelogId:this.catelogPath[this.catelogPath.length-1]},!1)}).then(function(e){e.data;t.getCateRelation()})},deleteCateRelationHandle:function(t,e){var a=this;this.$http({url:this.$http.adornUrl("/product/categorybrandrelation/delete"),method:"post",data:this.$http.adornData([t],!1)}).then(function(t){t.data;a.getCateRelation()})},updateCatelogHandle:function(t){this.cateRelationDialogVisible=!0,this.brandId=t,this.getCateRelation()},getCateRelation:function(){var t=this;this.$http({url:this.$http.adornUrl("/product/categorybrandrelation/catelog/list"),method:"get",params:this.$http.adornParams({brandId:this.brandId})}).then(function(e){var a=e.data;t.cateRelationTableData=a.data})},getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/product/brand/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},updateBrandStatus:function(t){var e=this;console.log("最新信息",t);var a=t.brandId,r=t.showStatus;this.$http({url:this.$http.adornUrl("/product/brand/update/status"),method:"post",data:this.$http.adornData({brandId:a,showStatus:r},!1)}).then(function(t){t.data;e.$message({type:"success",message:"状态更新成功"})})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.brandId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/product/brand/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:t.dataForm.key,callback:function(e){t.$set(t.dataForm,"key",e)},expression:"dataForm.key"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("product:brand:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("product:brand:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brandId","header-align":"center",align:"center",label:"品牌id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"品牌名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"logo","header-align":"center",align:"center",label:"品牌logo地址"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"100px",height:"80px"},attrs:{src:t.row.logo}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"descript","header-align":"center",align:"center",label:"介绍"}}),t._v(" "),a("el-table-column",{attrs:{prop:"showStatus","header-align":"center",align:"center",label:"显示状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},on:{change:function(a){t.updateBrandStatus(e.row)}},model:{value:e.row.showStatus,callback:function(a){t.$set(e.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"firstLetter","header-align":"center",align:"center",label:"检索首字母"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort","header-align":"center",align:"center",label:"排序"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"250",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.updateCatelogHandle(e.row.brandId)}}},[t._v("关联分类")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.brandId)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.brandId)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"关联分类",visible:t.cateRelationDialogVisible,width:"30%"},on:{"update:visible":function(e){t.cateRelationDialogVisible=e}}},[a("el-popover",{attrs:{placement:"right-end"},model:{value:t.popCatelogSelectVisible,callback:function(e){t.popCatelogSelectVisible=e},expression:"popCatelogSelectVisible"}},[a("category-cascader",{attrs:{catelogPath:t.catelogPath},on:{"update:catelogPath":function(e){t.catelogPath=e}}}),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.popCatelogSelectVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addCatelogSelect}},[t._v("确定")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("新增关联")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cateRelationTableData}},[a("el-table-column",{attrs:{prop:"id",label:"#"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brandName",label:"品牌名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"catelogName",label:"分类名"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteCateRelationHandle(e.row.id,e.row.brandId)}}},[t._v("移除")])]}}])})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cateRelationDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.cateRelationDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},i=a("VU/8")(n,l,!1,null,null,null);e.default=i.exports},AKgy:function(t,e,a){var r=a("EqjI"),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},"RRo+":function(t,e,a){t.exports={default:a("c45H"),__esModule:!0}},c45H:function(t,e,a){a("1alW"),t.exports=a("FeBl").Number.isInteger}});