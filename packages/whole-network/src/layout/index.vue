<script setup lang="ts">
import Menu from './component/menu.vue'
</script>

<template>
  <div class="wh-layout">
    <Menu />
    <div class="wh-container-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wh-layout {
  display: flex;
  height: calc(100vh - 56px);
  width: 100vw;
  .wh-container-wrapper {
    height: calc(100vh - 56px);
    flex: 1;
    background-color: rgb(245 245 245);
    overflow: auto;
  }
}
</style>
