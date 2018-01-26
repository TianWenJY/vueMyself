<template>
  <div>
    <nav aria-label="breadcrumb" class="header">
      <span>商店</span>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
      <button class="btn btn-primary add">
       <i class="glyphicon glyphicon-plus"></i>
        添加
      </button>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="less">
  .header {
     span {
       font-size: 16px;
     }
    ol.breadcrumb {
      display: inline-block;
      background: none;
    }
    button.add {
      float: right;
      margin-left: 5px;
    }

  }

</style>
