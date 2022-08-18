<template>
  <div>
    <!-- <Test></Test> -->
    count的值为 {{ count }}

    <div ref="div">App 组件</div>
    <button @click="getRef">获取元素</button>
    <div class="box">
      <!-- <Left></Left>
      <Right></Right> -->
      <Son ref="son1" :message="message"></Son>
      <Son2 @getCount="getCount"></Son2>

      <input v-if="inputVisiable" ref="input" @blur="showButton" type="text">
      <button v-else @click="showInput"></button>
    </div>
  </div>
</template>

<script>
import Son from './components/Son.vue';
import Son2 from './components/Son2.vue';
  // import Left from "@/components/Left.vue";
  // import Right from "@/components/Right";
  // import Test from "./components/Test.vue";
  export default {
    components: {
    Son,
    Son2
},
    data() {
      return{
        message: 'hello 宝贝',
        userinfo:{ name: 'wsc', age: 18 },
        count: 0,
        inputVisiable: false
      }
    },
    methods: {
      getCount(val){
        this.count = val
      },
      getRef(){
        console.log(this)
        this.$refs.div.style.color = 'red'
      },
      showButton(){
        this.inputVisiable = false
        this.$nextTick(()=>{
          this.$refs.input.focus()
        })
        
      },
      showInput(){
        this.inputVisiable = true
      }
    }
  }
</script>

<style scoped>
  .box {
    background-color: #7abaff;
    display: flex;

  }
</style>