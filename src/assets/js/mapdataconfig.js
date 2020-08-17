const jsonData = []
const json1={    
    mapDataSrc:  "static/esmap/data", //地图数据位置
    mapThemeSrc:  "static/esmap/data/theme", //主题数据位置
    themeID: '2001',
    defaultScaleLevel: 17,//初始显示缩放等级,
    mapFloorSpan: 0,//初始楼层间距
    focusAlphaMode: true, // 对不可见图层启用透明设置 默认为true
    focusAnimateMode: true, // 开启聚焦层切换的动画显示
    focusAlpha: 0.8, // 对不聚焦图层启用透明设置，当focusAlphaMode = true时有效
    visibleFloors: "all",//显示楼层
    loadLabel: false, //是否显示文字POI
    loadPoi: false, //是否显示图片POI
    focusFloor: 2,//聚焦楼层
    token: 'xdqd2801',
    id:'xdqd_2801'
}

const json2={
    mapDataSrc: "static/esmap/data", //地图数据位置
    mapThemeSrc: "static/esmap/data/theme", //主题数据位置
    themeID: '2001',
    defaultScaleLevel: 17,//初始显示缩放等级,
    mapFloorSpan: 0,//初始楼层间距
    focusAlphaMode: true, // 对不可见图层启用透明设置 默认为true
    focusAnimateMode: true, // 开启聚焦层切换的动画显示
    focusAlpha: 0.8, // 对不聚焦图层启用透明设置，当focusAlphaMode = true时有效
    loadLabel: false, //是否显示文字POI
    loadPoi: false, //是否显示图片POI
    visibleFloors: "all",//显示楼层
    focusFloor: 2,//聚焦楼层
    token: 'xdqd2801',
    id:'xdqd_2901'
}

const json3={
    mapDataSrc: "static/esmap/data", //地图数据位置
    mapThemeSrc: "static/esmap/data/theme", //主题数据位置
    themeID: '1005',
    defaultScaleLevel: 5,//初始显示缩放等级,
    mapFloorSpan: 0,//初始楼层间距
    focusAlphaMode: true, // 对不可见图层启用透明设置 默认为true
    focusAnimateMode: true, // 开启聚焦层切换的动画显示
    focusAlpha: 0.8, // 对不聚焦图层启用透明设置，当focusAlphaMode = true时有效
    loadLabel: true, //是否显示文字POI
    loadPoi: true, //是否显示图片POI
    visibleFloors: "all",//显示楼层
    focusFloor: 1,//聚焦楼层
    token: 'xdqd2801',
    id:'20190929'
}

const json4={

    mapDataSrc: "static/esmap/data", //地图数据位置
    mapThemeSrc: "static/esmap/data/theme", //主题数据位置
    themeID: '1005',
    defaultScaleLevel: 4,//初始显示缩放等级,
    mapFloorSpan: 0,//初始楼层间距
    focusAlphaMode: true, // 对不可见图层启用透明设置 默认为true
    focusAnimateMode: true, // 开启聚焦层切换的动画显示
    focusAlpha: 0.8, // 对不聚焦图层启用透明设置，当focusAlphaMode = true时有效
    loadLabel: true, //是否显示文字POI
    loadPoi: true, //是否显示图片POI
    visibleFloors: [3],//显示楼层
    focusFloor: 3,//聚焦楼层
    defaultAngle:270,//地图旋转角度
    defaultCenter:{x:12125504.536197513,y:4060983.494267962},//地图初始中心
    token: 'xdqd2801',
    id:'2019_10_13'
}
const mapdata =[json1,json2,json3,json4]
export default mapdata