<template>
  <div class="friend">
  eee
<!--
    <div class="title-1">
      <span class="text">新朋友</span>
      <mu-icon-button icon="chevron_right" />
    </div>-->
  <!-- <div class="title-1">
      <span class="button" @click="open">新朋友</span>
      <mu-icon-button icon="chevron_right" />
    </div>

    <div class="tab">
      &lt;!&ndash;观赏性&ndash;&gt;
      <mu-tabs>
        <mu-tab value="tab1"
                icon="person_add"
                title="好友"
                iconClass="i-1"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab2"
                icon="people"
                title="群"
                iconClass="i-2"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab3"
                icon="person"
                title="通讯录"
                iconClass="i-3"
                titleClass="t-1"
                disabled/>
      </mu-tabs>

    </div>
    <div class="title-2">
      <span style="color: rgba(0, 0, 0, .8)">我的好友</span>
    </div>

    <mu-list>
      &lt;!&ndash;动态渲染&ndash;&gt;
      <div v-for="item of friends" class="item">
        <mu-list-item :title="item.name" @click="showPersonindex(item._id)" :disableRipple="true">
          <mu-avatar :src="item.avatar" slot="leftAvatar"></mu-avatar>
        </mu-list-item>
        <mu-divider inset></mu-divider>
      </div>

    </mu-list>
  <div>
  <mu-dialog :open="dialog" title="Dialog" @close="close">
    这是一个简单的弹出框
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
  </mu-dialog>
</div>-->
  </div>

</template>
<script>
export default {
  name: 'friend',
  computed: {

    // 获取全部好友
    friends() {
      return this.$store.state.data.friends
    }
  },
   data () {
    return {
      dialog: false
    }
  },
   created() {

   },
  methods: {
    // 点击展示个人主页
    showPersonindex(e) {
      this.$store.commit('getActiveId', { activeId: e })
      this.$store.commit('showPersonindex')
    },
    //atan
     open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}

</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.friend
  .item
    background color-w
  .title-1
    position:relative
    height: 8vh
    line-height: 8vh
    .mu-icon-button
      position: absolute;
      top:50%;
      left: 94%;
      transform:translate(-50%, -50%);
      color: color-b
    .text
      display: inline-block
      width: 94%
      padding: 0 1em
      font-size: 1.2em
  .tab
    background: color-w
    .mu-tabs
      background:color-w
      color:color-b
  .title-2
    padding-left:4vw
    height: 4vh
    line-height: 5vh
</style>
