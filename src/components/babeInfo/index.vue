<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">

    <mu-appbar style="width: 100%; position: fixed; top: 0;" color="primary">
      <mu-button icon slot="left" @click="routerFn">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      你的宝贝

      <mu-button flat slot="right">
        <img src="../../assets/img/logo.png" class="logoImg"/>
      </mu-button>
    </mu-appbar>

    <mu-carousel hide-controls style="height: 200px; margin-top: 60px;">
      <mu-carousel-item>
        <img :src="carouselImg1" style="height: 100%;">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg2" style="height: 100%;">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg3" style="height: 100%;">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg4" style="height: 100%;">
      </mu-carousel-item>
    </mu-carousel>

    <mu-list style="padding: 10px; border-radius: 5px;" class="muItem" textline="three-line" :value="nameVal">
      <!-- <mu-sub-header>你的宝贝</mu-sub-header>-->

      <mu-slide-left-transition>
        <mu-paper class="demo-paper" :z-depth="5">
          <mu-list-item avatar button :ripple="false" style="background: #409EFF; margin-bottom: 10px;" v-show="show2"  to="/examinationList">
            <mu-list-item-action>
              <mu-avatar>
                <img src="../../assets/img/avatar2.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>李灿</mu-list-item-title>
              <mu-list-item-sub-title>2018-11-18</mu-list-item-sub-title>
              <mu-list-item-sub-title>男</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-ripple color="yellow" :opacity="0.7">
              <mu-list-item-action>
                <mu-button icon>
                  <mu-icon value="keyboard_arrow_right" color="#ffffff"></mu-icon>
                </mu-button>
              </mu-list-item-action>
            </mu-ripple>
          </mu-list-item>
        </mu-paper>
      </mu-slide-left-transition>

      <mu-slide-right-transition>
        <mu-paper class="demo-paper" :z-depth="5">
          <mu-list-item avatar button :ripple="false" style="background: #409EFF; margin-bottom: 10px;" v-show="show2">
            <mu-list-item-action>
              <mu-avatar>
                <img src="../../assets/img/avatar2.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>李灿</mu-list-item-title>
              <mu-list-item-sub-title>2018-11-18</mu-list-item-sub-title>
              <mu-list-item-sub-title>男</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-ripple color="yellow" :opacity="0.7">
              <mu-list-item-action>
                <mu-button icon>
                  <mu-icon value="keyboard_arrow_right" color="#ffffff"></mu-icon>
                </mu-button>
              </mu-list-item-action>
            </mu-ripple>
          </mu-list-item>
        </mu-paper>
      </mu-slide-right-transition>

      <mu-slide-left-transition>
        <mu-paper class="demo-paper" :z-depth="5">
          <mu-list-item avatar button :ripple="false" style="background: #409EFF;" v-show="show2">
            <mu-list-item-action>
              <mu-avatar>
                <img src="../../assets/img/avatar2.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>李灿</mu-list-item-title>
              <mu-list-item-sub-title>2018-11-18</mu-list-item-sub-title>
              <mu-list-item-sub-title>男</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-ripple color="yellow" :opacity="0.7">
              <mu-list-item-action>
                <mu-button icon>
                  <mu-icon value="keyboard_arrow_right" color="#ffffff"></mu-icon>
                </mu-button>
              </mu-list-item-action>
            </mu-ripple>
          </mu-list-item>
        </mu-paper>
      </mu-slide-left-transition>

    </mu-list>


   <!-- <mu-divider></mu-divider>-->
  </mu-paper>
</template>

<script>
  import carouselImg1 from '@/assets/img/avatar.jpg';
  import carouselImg2 from '@/assets/img/avatar1.jpg';
  import carouselImg3 from '@/assets/img/avatar3.jpg';
  import carouselImg4 from '@/assets/img/avatar2.jpg';

  export default {
    components: {},
    data() {
      return {
        show2: false,
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
        this.show2 = true
      })
    },
    computed: {},
    watch: {},
    methods: {
      routerFn() {
        this.$router.go(-1)
      }
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    }
  }
</script>
<style>
</style>
<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .logoImg
    width: 100px

  /* position: absolute;
   background-color: #fff;
   top: 50%;
   left: 20px;
   transform: translate(0%, -50%)*/
</style>
