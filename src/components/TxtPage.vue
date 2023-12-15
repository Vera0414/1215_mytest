<template>
  <div :class="['box', { active: bool }]" @click="bool = !bool">
    <div :class="['inner-box', { active: bool }]"></div>
  </div>
  <p>{{ bool }}</p>
  <p>{{ txt }}</p>
</template>

<script>
export default {
  props: ["txt"],
  data() {
    return {
      bool: false,
    };
  },
};
</script>

<style>
.box {
  width: 80px;
  padding: 3px;
  box-sizing: border-box;
  height: 30px;
  border-radius: 15px;
  background-color: pink;
  position: relative;
}
.inner-box {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(236, 98, 98);
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 3px;
  animation: change2 0.5s;
}
@keyframes change2 {
  0% {
    left: 52px;
  }
  100% {
    left: 3px;
  }
}
.box.active {
  background-color: rgb(174, 190, 241);
}
.inner-box.active {
  left: 52px;
  background-color: rgb(34, 69, 184);
  animation: change 0.5s;
}
@keyframes change {
  0% {
    left: 3px;
  }
  100% {
    left: 52px;
  }
}
</style>