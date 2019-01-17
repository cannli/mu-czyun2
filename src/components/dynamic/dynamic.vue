<template>
  <div class="dynamic">

    <!-- <div class="gap"></div>-->
    <div class="container-top">
      <!--弹出层控制按钮-左边框弹出-->
      <div class="drawer" @click="showSidebar(true)"></div>
      <top-nav></top-nav>
    </div>
    <div class="content">
      <div class="person-bg"
           :style="{backgroundImage: `url(/static/images/avatar2.jpg)`}">
      </div>
      <div class="person-info">
        <mu-avatar :size="96">
          <img src="/static/images/avatar2.jpg">
        </mu-avatar>
        <span class="name" v-text="'lican'"></span>
      </div>
    </div>
    <div class="tab">
      <!--观赏性-->
      <mu-tabs full-width color="#409eff">
        <!-- <mu-tab iconClass="ii-1" titleClass="t-1" disabled>-->
        <mu-tab>
          <mu-icon value="star"></mu-icon>
          学校动态
        </mu-tab>
        <mu-tab>
          <mu-icon value="terrain"></mu-icon>
          兴趣部落
        </mu-tab>
        <!-- </mu-tab>-->
        <!-- <mu-tab value="tab3" icon="terrain" title="兴趣部落" iconClass="ii-3" titleClass="t-1" disabled></mu-tab>-->
      </mu-tabs>
    </div>
    <mu-list>
      <div class="item">

        <mu-list-item avatar button :ripple="false" @click="routeFn">
          <mu-list-item-action>
            <mu-icon value="account_circle" color="#2962ff"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的孩子</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="contact_phone" color="#d84315"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>联系我们</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="contact_phone" color="#d84315"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>平台官网</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right" slot="right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </div>
    </mu-list>

  </div>
</template>
<script>
  import topNav from '@/components/topnav/top-nav'

  export default ({
    components: {topNav},
    name: 'dynamic',
    methods: {
      routeFn() {
        this.$router.push({path: '/babeInfo'})
      }
    }
  })
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import '../../common/stylus/mixin.styl'
  .dynamic
    .content
      width: 100%
      margin-bottom: 20px
      background-size: cover
      .person-bg
        width: 100%;
        height: 200px
      .person-info
        margin-top: -48px
        text-align: center
        .name
          display: block;
          margin-top: 4px;
          font-size: 1.6em
          color: #333
    .item
      background: color-w
    .mu-item.show-left
      padding-left: 56px
    .gap
      position: relative
      height: 2vh
    .gap-1
      height: 2vh

  /*.tab*/
  /*height: 12vh*/
  /*background: colot-w*/
  /*.mu-tabs*/
  /*background: color-w*/
  /*color: color-b*/


</style>
