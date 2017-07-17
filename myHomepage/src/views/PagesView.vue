<template>
  <div class="pages-view">
    <header-bar @showsidepanel="open"></header-bar>
    <router-view></router-view>
    <sidepanel-view v-show="sidepanel" @closesidepanel="close"></sidepanel-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import sidepanelView from '../views/sidepanelView'

export default {
  name: 'pages-view',
  components: { HeaderBar, sidepanelView },
  data () {
    return {
      sidepanel: ''
    }
  },
  methods: {
    open: function () {
      this.sidepanel = 'open'
    },
    close: function () {
      this.sidepanel = ''
    }
  }
}
</script>

<style scoped>

</style>
