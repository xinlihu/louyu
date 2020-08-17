<template>
  
  <div>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in mapdata" :key="index">
        <map-container :mapconfigdata='item' :index='index'></map-container>
        </el-carousel-item>
    </el-carousel>
    <!-- <map-container :mapconfigdata='mapdata[0]' :index='0' /> -->
  </div>
</template>

<script>
import MapContainer from '@/components/MapContainer'
import mapdata from '@/assets/js/mapdataconfig'
export default {

    components:{MapContainer},
    data(){
        return {mapdata:[]}
    },
    created(){
        this.mapdata = mapdata
        console.log("mapdata:",this.mapdata)
    }
}
</script>
<style>
.el-carousel__container {
    position: relative;
    height: 600px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>