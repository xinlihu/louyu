<template>
  <div class="page1">
    <!--左侧字体-->
    <div class="tyg-div">
      <ul>
        <li>让</li>
        <li>
          <div style="margin-left:20px;">数</div>
        </li>
        <li>
          <div style="margin-left:40px;">据</div>
        </li>
        <li>
          <div style="margin-left:60px;">改</div>
        </li>
        <li>
          <div style="margin-left:80px;">变</div>
        </li>
        <li>
          <div style="margin-left:100px;">生</div>
        </li>
        <li>
          <div style="margin-left:120px;">活</div>
        </li>
      </ul>
    </div>
    <!--标题及图片-->
    <div class="contPar">
      <div class="textBox">
        <h2 class="title0">楼宇可视化物联系统</h2>
        <h4 class="title1">监控、互联、智能、安全、大数据</h4>
      </div>
      <div class="imgGroug">
        <!--旋转容器-->
        <div class="container">
          <div class="items">
            <div class="item"><img src="../../api/images/page1_0.png"></div>
            <div class="item"><img src="../../api/images/page1_1.png"></div>
            <div class="item"><img src="../../api/images/page1_2.png"></div>
          </div>
        </div>
      </div>
    </div>
    <!--右侧登录-->
    <div class="tyg-div-denglv">
      <div class="tyg-div-form">
        <form id="user">
          <h2>登录</h2>
          <p class="tyg-p">欢迎访问</p>
          <div style="margin:5px 0px;">
            <input id="username" type="text" name="username" placeholder="请输入账号..." />
          </div>
          <div style="margin:5px 0px;">
            <input id="password" type="password" name="password" placeholder="请输入密码..." />
          </div>
          <!--验证码-->
          <div style="margin:5px 0px;">
            <input id="checkcode" type="text" style="width:150px;" name="checkcode" placeholder="请输入验证码..." />
            <valid-code :value.sync="validCode"></valid-code>
          </div>
          <button id="submit" class="btn btn-secondary">登录</button>
        </form>
      </div>
      <el-button type="primary" @click="changePage">登录测试</el-button>
    </div>
  </div>
</template>

<script>
  import validCode from '../../components/validCode'
  export default {
    name: 'login',
    components: {
      validCode
    },
    data() {
      return {
        validCode: Number
      }
    },
    methods: {
      changePage() {
        this.$router.push('/showMap')
      }
    }
  }

  //jQuery引入实现旋转效果
  $(function () {
    var itemNum = $(".container .items .item").length;
    var itemDeg = 360 / itemNum;
    $(".items>.item").each(function (index, element) {
      $(element).css({
        transform: "rotateY(" + itemDeg * index + "deg) translateZ(150px)"
      });
    });
  });
</script>


<style type="text/css">
  @import '../../api/tool/coverStyle.css';
</style>