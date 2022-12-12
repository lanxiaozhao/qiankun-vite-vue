<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './component/header.vue'
import startQiankun from '@/utils/microAppsConfig/index'
import { apps } from '@/utils/microAppsConfig/microApps'

onMounted(() => {
  startQiankun(apps)
})
</script>

<template>
  <div class="layout">
    <Header />
    <div class="content-wrapper">
      <div id="subapp-viewport"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  .content-wrapper {
    height: calc(100vh - 64px);
    background-color: #f5f5f5;
    overflow: auto;
  }
}
</style>
