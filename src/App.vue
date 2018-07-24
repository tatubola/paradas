<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="row">
        <div class="col-sm-2">
          <Sidebar />
        </div>
        <div class="col-sm-10">
          <router-view/>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss">
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
</style>
