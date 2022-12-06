<script setup lang="ts">
import Header from './component/header.vue'
import Menu from './component/menu.vue'
</script>

<template>
  <div class="layout">
    <Menu />
    <div class="container-wrapper">
      <Header />
      <div class="content">
        <div class="content-wrapper"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  .container-wrapper {
    height: 100vh;
    overflow-y: hidden;
    .content {
      background-color: rgb(245 245 245);
      height: calc(100vh - 56px);
      width: calc(100vw - 256px);
      overflow: auto;
      &-wrapper {
        min-width: 1180px;
      }
    }
  }
}
</style>
