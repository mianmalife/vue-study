<template>
  <div>
    {{name}} {{mess}}{{total}}
    <ul>
      <li :key="item.id" v-for="item in goodData">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["name"],
  data() {
    return {
      mess: "",
      goodData: ""
    };
  },
  async created() {
    // this.$bus.$on("send message", data => {
    //   this.mess = data;
    // });
    // axios.get("/api/goods").then(res => {
    //   this.goodData = res.data.list;
    // });
    const res = await axios.get("/api/goods");
    this.goodData = res.data.list;
  },
  computed: {
    total() {
      let num1 = 1,
        num2 = 2;
      let num = num1 + num2;
      return num;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>