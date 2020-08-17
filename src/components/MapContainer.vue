<template>
  <div :id='index' style="margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;"></div>
</template>

<script>

export default {
  name: "MapContainer",
  props:['mapconfigdata','index'],
  data(){
    return{
     
    }
  },
  created(){
    
    // this.mapconfigdata.container = this.index
    console.log(this.mapconfigdata)
  },
  mounted() {

    console.log("mounted map")
    Object.assign(this.mapconfigdata,{container:document.getElementById(this.index)})
    let json1 ={
      container: document.getElementById(this.index), //地图初始化的容器
     mapDataSrc: "static/esmap/data", //地图数据位置
    mapThemeSrc: "static/esmap/data/theme", //主题数据位置
    themeID: '2001',
    token: 'xdqd2801',
    id:'xdqd_2901'
    // }      
    }
    console.log(json1)
   console.log(this.mapconfigdata)
    let map = new esmap.ESMap(this.mapconfigdata);
    map.openMapById(this.mapconfigdata.id);
    // let map = new esmap.ESMap(json1);
    // map.openMapById(json1.id);
    console.log("hello")
    // var ctlOpt = new esmap.ESControlOptions({
    //   position: esmap.ESControlPositon.RIGHT_TOP,
    //   //注意：imgURL参数是static目录下图片的路径
    //   imgURL: "static/esmap/resource/style/wedgets/img/" 
    // });

    // map.on("loadComplete", function() {
    //   //创建楼层控件
    //   var floorControl = new esmap.ESScrollFloorsControl(map, ctlOpt);

    // });
  }
};
</script>
<style>
html,
body,
#map-container {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>

