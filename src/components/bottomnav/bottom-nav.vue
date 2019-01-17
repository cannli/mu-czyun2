<template>
  <mu-bottom-nav :value="bottomNav"
                 @change="handleChange"
                 class="bottom-nav">

    <mu-bottom-nav-item value="message"
                        to="/message"
                        title="成长档案"
                        icon="chat_bubble_outline"
                        :iconClass="[ isActive[0]&&'color-b']"
                        :titleClass="[ isActive[0]&&'color-b']">
    </mu-bottom-nav-item>

    <mu-bottom-nav-item value="friends"
                        to="/friends"
                        title="成长课堂"
                        icon="people"
                        :iconClass="[ isActive[1]&&'color-b']"
                        :titleClass="[ isActive[1]&&'color-b']">
    </mu-bottom-nav-item>

    <mu-bottom-nav-item value="dynamic"
                        to="/dynamic"
                        title="我的"
                        icon="star"
                        :iconClass="[ isActive[2]&&'color-b']"
                        :titleClass="[ isActive[2]&&'color-b']">
    </mu-bottom-nav-item>

  </mu-bottom-nav>
</template>

<script>
  export default {
    name: 'bottomNav',
    data() {
      return {
        bottomNav: 'message'
      }
    },
    computed: {
      // 关于样式设置完全可以用覆盖的形式，这里只是没事找事罢了
      isActive() {
        let arr = ['message', 'friends', 'dynamic']
        let x = []
        x[arr.indexOf(this.bottomNav)] = true
        return x
      }
    },
    methods: {
      // 点击按钮
      handleChange(val) {
        this.bottomNav = val
        // 路由跳转至当前点击的页面
        this.$router.push({path:`/${val}`})
        // 改变title
        switch (val) {
          case 'message':
            val = '成长档案'
            break
          case 'friends':
            val = '成长课堂'
            break
          case 'dynamic':
            val = '我的'
            break
        }
        this.$store.commit('changTitle', {title: val})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .bottom-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  //   background: #2196f3;
  }

  .color-b {
    color: #e6e6e6;
  }

  /* .mu-bottom-nav{
     background: #2196f3;
     .mu-buttom-item{
       color: #cccccc;
     }
   }*/
</style>
