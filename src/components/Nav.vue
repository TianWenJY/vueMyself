<template>
  <div class="myNav">
      <nav class="navbar-default">
    <div class="container-fluid topNav">
      <div class="navbar-header">
       <!--小logo-屏幕小于768显示 -->
      <i></i>
       <!--logo-屏幕大于768隐藏 -->
      <div class="logo clear hidden-xs">
        <i></i>
        <span></span>
      </div>
       <!--顶部导航栏-屏幕大于991隐藏 -->
      </div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav" id="navBmenu">
        <li  class="dropdown" v-for="lists in list">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ lists.name }}</a>
          <ul class="dropdown-menu menu-top">
            <li v-for="mList in lists.children" :class="{ dropdownSubmenu:mList.children }" class="dropdown">
              <a href="">{{ mList.name }}</a>
              <ul class="dropdown-menu">
                <li v-for="tList in mList.children"><a href="">{{ tList.name }}</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    <!-- 顶部右侧按钮-屏幕大于768隐藏 -->
      <ul class="info nav navbar-nav hidden-xs float-right">
      <li class="order  float-left">
        <a class="glyphicon glyphicon-bell" href="./order/order/order.html" target="contentIframe">订单<span class="badge"></span></a>
      </li>
      <li class="float-left">
        <a class="glyphicon glyphicon-home" href="./store/manage/store.html" target="contentIframe">商店</a>
      </li>
      <li class="float-left">
        <a class="glyphicon glyphicon-question-sign" href="javascript:void(0)" target="contentIframe">帮助</a>
      </li>
      <li class="float-left">
        <a class="glyphicon glyphicon-log-out logout" href="javascript:void(0)">退出</a>
      </li>
    </ul>
  </div>
    </div>
  </nav>
<div class="main-box">
  <!--左侧导航-->
  <!--左侧菜单-屏幕大于768隐藏-->
  <aside class="hidden-xs" id="asideMenu">
    <div class="info">
      <img src="../images/icon.png">
      <span id="userText"></span>
      <small>后台管理</small>
    </div>
    <ul class="nav navbar-nav" id="" >
      <li  class="nav nav-pills flex-column" v-for="(lists,index) in list"  :key="index" v-on:click="showToggle(index)">
        <div>
          <i :class="lists.fonts"></i>
          <a href="#collapseOne" class="nav-link" data-toggle="dropdown">{{ lists.name }}</a>
        </div>
        <ul class="nav nav-pills flex-column" id="collapseOne" v-show="activeIndex === index">
          <li v-for="(mList,$index) in lists.children" :class="{ dropdownSubmenu:mList.children }" class="dropdown"   v-if="isShow">
            <div class="three" v-on:click.stop="toToggle($index)">
              <a  href="#collapseOne" class="nav-link" data-toggle="dropdown">{{ mList.name }}</a>
            </div>

            <ul class="nav nav-pills flex-column bsb" v-show="myIndex === $index"  >
              <li v-for="tList in mList.children"    v-if="isMySlef" class="dropdown">
                <a href="#">{{ tList.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <div class="ss">
    <Bread></Bread>
    <ContentMan></ContentMan>
  </div>
</div>
    <footer>
      <span>版权所有</span> © 2017 车势力 cheshili.cn 鲁ICP备11022834号-6
    </footer>

  </div>
</template>

<script>
  import list from '../../static/list'
  import Bread from '../page/ breadCrumb'
  import ContentMan from '../page/ContentMan'
  console.log(list)
  export default {
        data() {
          return {
            isShow: false,
            activeIndex: -1,
            myIndex:-1,
            isMySlef:false,
            list: [
//  监控
              {
                "name": "监控",
                "fonts":"galyphicon glyphicon-dashboard",
                "children": [
                  {"name": "监控"}
                ]
              },
              {
                "name": "目录",
                "fonts":"glyphicon glyphicon-tags",
                "children": [
                  {"name": "分类"},
                  {"name": "商品"},
                  {
                    "name": "汽车",
                    "children": [
                      {"name": "品牌"},
                      {"name": "车系"},
                      {"name": "级别"},
                      {"name": "车型"}
                    ]
                  },
                  {
                    "name": "过滤器",
                    "children": [
                      {"name": "过滤器"},
                      {"name": "过滤器类型"}
                    ]
                  },
                  {
                    "name": "匹配器",
                    "children": [
                      {"name": "匹配器"},
                      {"name": "匹配器组"}
                    ]
                  },
                  {
                    "name": "属性",
                    "children": [
                      {"name": "属性"},
                      {"name": "属性组"}
                    ]
                  },
                  {"name": "制造商"},
                  {"name": "评论"},
                  {
                    "name": "文章",
                    "children": [
                      {"name": "文章类型"},
                      {"name": "文章内容"}
                    ]
                  },
                  {
                    "name": "自定义域",
                    "children": [
                      {"name": "自定义域分组"},
                      {"name": "自定义域"}
                    ]
                  },
                  {
                    "name": "服务",
                    "children": [
                      {"name": "服务"},
                      {"name": "服务预约"},
                      {"name": "用户服务列表"}
                    ]
                  },
                  {
                    "name": "手机二维码",
                    "children": [
                      {"name": "手机二维码"},
                      {"name": "批量增加二维码"},
                      {"name": "通话账单"}
                    ]
                  }
                ]
              },
//  监控结束
              {
                "name": "设计",
                "fonts":"glyphicon glyphicon-list-alt",
                "children": [
                  {
                    "name": "Banner图",
                    "children": [
                      {"name": "Banner图类型"},
                      {"name": "Banner图链接"}
                    ]
                  }
                ]
              }
              ,
              {
                "name": "销售",
                "fonts":"glyphicon glyphicon-lock",
                "children": [
                  {
                    "name": "订单",
                    "children": [
                      {
                        "name": "订单"
                      },
                      {
                        "name": "订单交易记录"
                      }
                    ]
                  },
                  {
                    "name": "佣金",
                    "children": [
                      {"name": "用户"},
                      {"name": "店面"},
                      {"name": "商品"}
                    ]
                  },
                  {"name": "砍价实况"},
                  {"name": "拼单活动"},
                  {"name": "活动实况"},
                  {"name": "砍价实况"},
                  {"name": "店铺活动映射"},
                  {"name": "商品活动映射"},
                  {"name": "竞拍"},
                  {
                    "name": "赠券",
                    "children": [
                      {"name": "赠券"},
                      {"name": "赠券主题"}
                    ]
                  },
                  {"name": "价值优惠券"},
                  {"name": "注册推广"},
                  {"name": "心愿收藏"},
                  {
                    "name": "活动",
                    "children": [
                      {"name": "活动"},
                      {"name": "用户签到积分列表"}
                    ]
                  },
                  {"name": "意见反馈"},
                  {
                    "name": "短信",
                    "children": [
                      {"name": "群发短信"}
                    ]
                  }
                ]
              },
//   销售结束
              {
                "name": "用户管理",
                "fonts":"glyphicon glyphicon-user",
                "children": [
                  {"name": "用户"},
                  {"name": "用户组"},
                  {"name": "用户地址列表"},
                  {"name": "用户汽车列表"},
                  {"name": "用户价值券列表"}
                ]
              },
              {
                "name": "加盟商",
                "fonts":"glyphicon glyphicon-tower",
                "children": [
                  {
                    "name": "服务店面",
                    "children": [
                      {"name": "增加店面"},
                      {"name": "店面审核"}
                    ]
                  }
                ]
              },
              {
                "name": "设置",
                "fonts":"glyphicon glyphicon-cog",
                "children": [
                  {"name": "全局设置"},
                  {"name": "短信消息"},
                  {
                    "name": "本地化设置",
                    "children": [
                      {"name": "单位"},
                      {"name": "库存状态"},
                      {"name": "订单状态"}
                    ]
                  },
                  {
                    "name": "工具",
                    "children": [
                      {"name": "清空缓存"},
                      {"name": "错误日志"}
                    ]
                  },
                  {
                    "name": "管理员设置",
                    "children": [
                      {"name": "管理员"},
                      {"name": "角色"}
                    ]
                  },
                  {
                    "name": "APP设置",
                    "children": [
                      {"name": "APP类型"},
                      {"name": "APP应用"}
                    ]
                  },
                  {
                    "name": "微信",
                    "children": [
                      {"name": "查询信息"},
                      {"name": "推送新闻"},
                      {"name": "查询事件"},
                      {"name": "菜单"},
                      {"name": "用户管理"},
                      {"name": "标签管理"},
                    ]
                  },
                  {
                    "name": "财务",
                    "children": [
                      {"name": "用户钱包"},
                      {"name": "交易记录"},
                      {
                        "name": "红包",
                        "children": [
                          {"name": "红包"},
                          {"name": "接收红包"},
                        ]
                      },
                      {
                        "name": "用户积分",
                        "children": [
                          {"name": "用户积分"},
                          {"name": "用户积分交易记录"},
                        ]
                      },
                    ]
                  }
                ]
              }
            ]

          }
        },
         methods:{
           showToggle: function(index) {
             this.activeIndex = index;
            this.isShow = !this.isShow;
        },
           toToggle: function(e) {
             this.myIndex = e;
             this.isMySlef = !this.isMySlef;
           },

     },
        components: {
          Bread,
          ContentMan
        }


  }
</script>

<style lang="less">
  .ss {
    padding: 15px 15px 0;
    background-color: #EDF1F5;
    height: 100%;
    width: 100%;
  }
  div.main-box {
    display: flex;
    height: 100%;
  }
  @height : 100%;
  .bsb {
    height: @height;
  }
  .content {
    width: 100%;
  }
  .myNav {
    width: 100%;
    height:@height;

  }
  .content {
    height: 100%;
  }
  .rightContent {
    width: 100%;
    height: 100%;
  }

   .dropdown:hover .menu-top {
    display: block;
  }

   .dropdownSubmenu{
      position:relative;
      a:after{
       display:block;
       content:" ";
       float:right;
       width:0;
       height:0;
       border-color:transparent;
       border-style:solid;
       border-width:5px 0 5px 5px;
       border-left-color:#cccccc;
       margin-top:5px;
       margin-right:-10px;
     }
     .dropdown-menu{
       top:0;
       left:100%;
       margin-top:-6px;
       margin-left:-1px;
       -webkit-border-radius:0 6px 6px 6px;
       -moz-border-radius:0 6px 6px 6px;
       border-radius:0 6px 6px 6px;
     }
     .pull-left{
        float:none;
       .dropdown-menu{
         left:-100%;
         margin-left:10px;
         -webkit-border-radius:6px 0 6px 6px;
         -moz-border-radius:6px 0 6px 6px;
         border-radius:6px 0 6px 6px;
       }
     }
  }

  .dropdownSubmenu:hover > .dropdown-menu{
    display:block;
  }
   .dropdownSubmenu:hover > a:after{
    border-left-color:#ffffff;
  }
  .logo {
    width: 240px;
    float: left;
  }
   div.logo > i {
    float: left;
    display: block;
    background: url(../images/common/menu_on.png);
    background-repeat: no-repeat;
    background-position: center;
    height: 46px;
    width: 50px;
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    transition: transform .4s;
    transition: transform .4s, -webkit-transform .4s;
  }
  div.logo > i.active {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  div.logo > span {
    float: left;
    display: block;
    height: 46px;
    width: 190px;
    background-image: url(../images/common/logo.png);
    background-repeat: no-repeat;
    background-position: 10px center;
    border: 0;
    border-left: 1px solid;
    -o-border-image: linear-gradient(#e1e1e1, #e5e5e5) 1 1;
    border-image: -webkit-gradient(linear, left top, left bottom, from(#e1e1e1), to(#e5e5e5)) 1 1;
    border-image: linear-gradient(#e1e1e1, #e5e5e5) 1 1;
  }
  .float-right {
    float: right;
  }
  .float-left {
    float: left;
  }

  /*左侧导航*/
  aside {
    width: 240px;
    height: @height;
    background: #484d59;
    color: #ffffff;
    -webkit-transition: width .4s;
    transition: width .4s;
    overflow-x: hidden;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  aside > ul.nav > li ,aside > ul.nav > li>ul>li{
    border-bottom: 1px solid #505863;
    width: 100%;
    top: 0;
  }
  aside > ul.nav > li > div, .three{
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
  }
  aside >ul.nav >li >div::after {
    font-family: 'Glyphicons Halflings';
    content: '\e258';
    display: block;
    font-size: 12px;
    position: absolute;
    top: 2px;
    right: 14px;
  }
  aside > ul.nav > li > ul > li>div,aside > ul.nav > li > ul > li >ul > li {
    height: 41px;
    width: 100%;
    border-bottom: 1px solid #464e59;
  }
  .text {
     min-height: 100px;
  }
   aside > ul.nav > li > ul {
    background: #393e49;
  }
  aside > ul.nav > li > ul > li > ul > li {
    background: #2f343f;
    border-bottom: 1px solid #464e59;
  }
  aside > ul.nav > li > ul > li:hover, aside > ul.nav > li > ul > li a:hover{
    background: #393e49;
    color: #337ab7;
  }
  aside > ul.nav > li > ul > li>div::before, aside > ul.nav > li > ul > li>div:hover::before{
    content: '';
    display: block;
    float: left;
    height: @height;
    width: 16px;
    background-image: url(../images/common/dbArrow.png);
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 5px 0 15px;
  }
  aside > ul.nav > li > ul > li>ul>li::before {
    content: '';
    display: block;
    float: left;
    height: @height;
    width: 16px;
    background-image: url(../images/common/dbArrow.png);
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 5px 0 40px;
  }
  aside > ul.nav > li > ul > li > ul > li a:hover {
    background: #2f343f;
  }
  a:hover {
    text-decoration: none;
  }
</style>
