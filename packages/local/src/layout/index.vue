<script setup lang="ts">
import Menu from './component/menu.vue'
</script>

<template>
  <div class="lo-layout">
    <Menu />
    <div class="lo-container-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lo-layout {
  display: flex;
  height: calc(100vh - 56px);
  width: 100vw;
  .lo-container-wrapper {
    height: calc(100vh - 56px);
    flex: 1;
    background-color: rgb(245 245 245);
    overflow: auto;
  }
}
</style>
