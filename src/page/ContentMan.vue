<template>
  <div class="contentMain">
      <p>
        <i class="glyphicon glyphicon-th-list"></i>
        商品列表
      </p>
      <div class="condition clrear">
        <form action="">
           <div class="row">
             <div class="form-group col-md-4">
               <label>关键字</label>
               <input type="text" class="form-control" placeholder="关键字">
             </div>
             <div class="from-group col-md-4">
               <label>类型</label>
               <select name="" class="form-control">
                 <option value="-1">全部</option>
               </select>
             </div>
             <div class="from-group col-md-4">
               <label>是否可用</label>
               <select name="" class="form-control">
                 <option value="-1">全部</option>
                 <option value="0">不可用</option>
                 <option value="1">可用</option>
               </select>
             </div>
           </div>
           <div class="row">
               <div class="form-group col-md-4">
                 <label for="">省</label>
                 <select id="" class="form-control">
                   <option selected>Choose...</option>
                   <option>...</option>
                 </select>
               </div>
               <div class="form-group col-md-4">
                 <label for="inputState">市</label>
                 <select id="inputState" class="form-control">
                   <option selected>Choose...</option>
                   <option>...</option>
                 </select>
               </div>
               <div class="form-group col-md-4">
                 <label>区</label>
                 <select id="i" class="form-control">
                   <option selected>Choose...</option>
                   <option>...</option>
                 </select>
               </div>
             </div>
            <div class="row">
               <div class="col-md-12 textRight">
                  <button class="btn btn-default"> <i class="glyphicon glyphicon-retweet"></i> 重置</button>
                  <button class="btn btn-primary"> <i class="glyphicon glyphicon-filter"></i> 筛选</button>
               </div>
            </div>

        </form>
        <div>
            <div class="row">
                <div class="col-md-12 col-sm-12">

                </div>
            </div>
        </div>
      </div>
      <table class="table table-bordered table-striped table-hover">
      <thead>
      <tr>
        <th class="col-md-1">
          商店图片
        </th>
        <th class="col-md-1">
          名称<i class="glyphicon glyphicon-menu-down"></i>
        </th>
        <th class="col-md-1">
          负责人
        </th>
        <th class="col-md-1">
          手机号码/电话号码
        </th>
        <th class="col-md-2">
          地址
        </th>
        <th class="col-md-1">
          状态
        </th>
        <th class="col-md-1">
          申请时间
        </th>
        <th class="col-md-1">
          审核状态
        </th>
        <th class="col-md-3">
          操作
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <!--<td v-for="list in lists.Rows">{{ list.Img }}</td>-->
          <!--<td>{{ list.Name}}</td>-->
          <!--<td>{{ list.ChargeMan }}</td>-->
          <!--<td>{{ list.Phone }}</td>-->
          <!--<td>33333</td>-->
          <!--<td>3333</td>-->
          <!--<td>3333</td>-->
          <!--<td>3333333</td>-->
          <td class="text-right">
            <button class="btn btn-info">
              <i class="glyphicon glyphicon-qrcode"></i>&nbsp;推荐码
            </button>
            <button class="btn btn-primary edit">
              <i class="glyphicon glyphicon-pencil"></i>编辑
            </button>
            <button class="btn btn-danger">
              <i class="glyphicon glyphicon-trash"></i>删除
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="10" class="center text-center">
          <!-- 此处用于分页 -->
          <ul class="pagination pagination-large">
            <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
            <li>
              第
              <input type="text" class="form-control goto" value="">
              页
              <button class="btn btn-default">跳转</button>
            </li>
            <li>
              每页
              <input type="text" class="form-control goto" value="">
              条
            </li>
            <li>( 共19页 / 187条 )</li>
          </ul>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
          res: '',
          // lists: ''
      }
    },
    methods:{
      getList:function() {
        this.$axios.post(
          'Store/QueryStoreList',
          {
            WToken:this.getToken(),
            Rows:10,
            N:1,
            Type:-1,
            Enable:-1,
            Approved:-1
          }
        ).then(res => {
          res = res.data;
          if(res.Status == 0 && res.Data) {
              alert(this.lists = res.Data);
              console.log(this.lists)
          }
        }).catch(error =>{
          console.log(error);
        })
      }
    },
   mounted() {
      this.getList()
   }



  }
</script>

<style lang="less" rel="stylesheet/less">
   div.contentMain {
    border-top: 2px solid #EA5514;
    background-color: #FFF;
    padding: 0 15px 15px;
     >p{
       background-color: #FCFCFC;
       padding: 8px 14px;
       margin: 0 -15px 15px;
       border-bottom: 1px solid #EBEBEB;
       font-size: 16px;
       > i {
         color: #EA5514;
       }
     }
      div.condition {
       background-color: #F8F8F8;
       border-radius: 6px;
       padding: 15px 0;
       margin-bottom: 15px;
     }
  }
  .textRight {
    text-align: right;
  }
   .pagination > li input{
     display: inline-block;
     width: 40px;
     padding: 6px;
     margin: 0 5px;
     text-align: center;
   }
</style>
