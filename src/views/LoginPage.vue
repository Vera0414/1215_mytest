<template>
  <div>
    <button @click="num++">add</button>
    <p id="num">{{ num }}</p>
    <p>{{ name }}有{{ num }}個讚</p>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      name: "花花",
      num: 0,
    };
  },
  methods: {
    show() {
      return this.name;
    },
  },
  beforeCreate() {
    console.log("==========beforeCreate==========");
    console.log("數據未加載:" + this.name, this.num);
    console.log("數據未加載:" + this.show);
    console.log("模板未加載:" + $("#num").text());
  },
  created() {
    console.log("==========created==========");
    console.log("數據已加載:" + this.name, this.num);
    console.log("數據已加載:" + this.show);
    console.log("模板未加載:" + $("#num").text());
  },
  beforeMount() {
    console.log("==========beforeMount==========");
    console.log("模板未加載:" + $("#num").text());
  },
  mounted() {
    console.log("==========mounted==========");
    console.log("模板已加載:" + $("#num").text());
  },
  beforeUpdate() {
    console.log("==========beforeUpdate==========");
    console.log("數據已更新" + this.num);
    console.log("模板資料未更新:" + $("#num").text());
    alert("是否更新資料?");
  },
  updated() {
    console.log("==========updated==========");
    console.log("數據已更新" + this.num);
    console.log("模板資料已更新:" + $("#num").text());
  },
};
</script>
