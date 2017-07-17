<template>
  <div class="banner">
    <!-- Ad banner -->
    <template v-if="adImg">
      <div class="banner-bg ad" v-if="adImg">
        <img :src="adImg" alt="ad">
        <span>广告</span>
      </div>
    </template>
    <!-- Universal banner -->
    <template v-else>
      <div class="banner-bg">
        <img src="../assets/promotion_bg.jpg" alt="cover">
      </div>
      <div class="content">
        <span class="title">{{title}}</span>
        <div class="button-wrapper">
        	
        	        <router-link style="color: #2AB8CC" :to="{ name: 'MusicView'}">
                    <span class="download">极速下载</span>
        </router-link>

          <span class="open" @click='say'>打开</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    // Banner title
    title: {
      type: String,
      required: false,
      default: '打开App, 浏览更多'
    },
    // Ad banner
    adImg: {
      type: String,
      required: false
    }
  },
  data () {
    return {}
  },
  methods:{
  	say:function(){
  		alert('this is open')
//		window.location.href='http://www.cnblogs.com/rlann/p/7096282.html'
  	}
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 8rem;

  img {
    max-width: 100%;
  }
}

.banner-bg {
  position: absolute;
}

.ad {
  span {
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding: 0.4rem;
    font-size: 1.2rem;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.content {
  position: absolute;
  right: 1rem;
  left: 1.8rem;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: center;

  .title {
    padding-left: 1.8rem;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 2.2rem;
    color: #2CA532;
  }

  .download, .open {
    display: inline-block;
    width: auto;
    padding: 0 1.4rem;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 2;
    border: 0.1rem solid #42bd56;
    border-radius: 0.3rem;
  }

  .download {
    color: #fff;
    background: #42bd56;
  }

  .open {
    color: #42bd56;
  }
}
</style>
