<template>
  <div id="app">
    	
    	<v-header></v-header>
    	<router-view style="margin-top: 0.4rem;"></router-view>
      <v-footer></v-footer>
  </div>
</template>

<script>
	import header from "./components/header.vue"
	import footer from "./components/footer.vue"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	"v-header":header,
  	"v-footer":footer
  }
}
</script>

<style>
	
</style>
