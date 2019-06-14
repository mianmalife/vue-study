<template>
  <div id="app">
    <img class="bg" :class="{active: isActive}" src="./assets/blog-imaichou4.jpg" alt="街景">
    <HelloVue :name="name"/>
    <input type="text" v-model="name">
    <button @click="send">发消息</button>
    <ele-form></ele-form>
    <zkx-comp></zkx-comp>
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue.vue";
import EleForm from "./components/EleForm.vue";
export default {
  name: "app",
  components: {
    HelloVue,
    EleForm,
  },
  data() {
    return {
      name: "Vue 首页",
      text: "",
      message: "这是父亲发的消息内容",
      isActive: false
    };
  },
  methods: {
    send() {
      // this.$bus.$emit("send message", this.message);
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bg {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  /* filter: blur(5px); 滤镜-模糊 */
  filter: brightness(1.4);
  /* filter: contrast(2); 滤镜-对比度 */
  /* filter: drop-shadow(4px 4px 8px blue); 滤镜-投影 */
  /* filter: grayscale(50%) 滤镜-灰度; */
  /* filter: hue-rotate(90deg); 滤镜-色调变化 */
  /* filter: invert(75%); 滤镜-反相 */
  /* filter: opacity(25%); 滤镜-透明度 */
  /* filter: saturate(230%); 滤镜-饱和度 */
  /* filter: sepia(60%); 滤镜-褐色 */
}
.active {
  filter: saturate(230%);
}
</style>
