<template>
    <div class="showIndex">
      <div class="head">
        <h3>楼宇可视化物联系统</h3>
      </div>
      <div class="body">
      
      </div>
      <el-button type="primary" @click="changePage">详情demo</el-button>
    </div>
  </template>
  <script>
     export default {
      name: 'showmap',
      components: {
      },
      methods:{
        changePage(){
          this.$router.push('/detail')
        }
      }
    }
  </script>
  <style>
    @import '../../api/tool/showMap.css';
  </style>