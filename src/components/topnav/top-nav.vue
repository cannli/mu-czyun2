<template>
  <div class="top-wrap">
    <mu-appbar class="top-nav"
               :zDepth="0">

      <!--等待添加弹出层按钮-->
      <!--  <mu-avatar slot="left" :src="avatar" :size="50" @click="showSidebar_x(true)"></mu-avatar>-->
      <img src="../../assets/img/logo.png" class="logoImg"/>

      <div slot="default" class="title" v-text="headerTitle"></div>

      <!--<mu-icon-button icon="search" slot="right" />-->
      <!--<mu-icon slot="right"
               value="search"
               color="#2e2c6b"
               @click="showSearch" />-->
    </mu-appbar>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'topNav',
    data() {
      return {
      }
    },
    computed: mapState({
      //  avatar: state => state.data.self.avatar,
      // 传字符串参数 'headerTitle' 等同于 `state => state.headerTitle`
      headerTitle: 'headerTitle'
    }),
    methods: {
      ...mapMutations(['showSidebar', 'showSearch']),
      showSidebar_x(flag) {
        this.showSidebar({flag})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import '../../common/stylus/mixin.styl'
  .mu-appbar
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: color-w
    .mu-avatar
      margin-left: 12px
    .title
      padding-right: 12px
      margin: 0 auto
      width: 48%
      height: 34px
      line-height: 34px
      text-align: center
      border-radius: 4px
      font-weight: 500
      color: color-b

  .logoImg
    width: 100px
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 20px;
    transform: translate(0%, -50%)

</style>

