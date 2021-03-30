<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>{{$store.state.msg}}</h1>
    <p>{{$store.state.count}}</p> -->
    <h1>{{msg}}</h1>
    <h2>{{reverseMsg}}</h2>
    <p>{{count}}</p>
    <button type="button" @click="addCount(3)">Mutation</button>
    <button type="button" @click="increase(5)">Action</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex' 
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  computed: {
    // 返回计算属性的方法：count: state => state.count
    ...mapState(['msg', 'count']),
    // msg: getters => getters.reverseMsg 
    ...mapGetters(['reverseMsg']),
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapActions(['increase'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
