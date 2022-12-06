<script setup lang="ts">
import { ref } from 'vue'
import Terminal from './components/terminal.vue'
import BlackList from './components/blackList.vue'

const activeName = ref('terminal')
</script>

<template>
  <div class="layout-title">{{ $t('terminal.title') }}</div>
  <div class="layout-container not-overview">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="$t('terminal.manage.title')" name="terminal">
        <Terminal v-if="activeName === 'terminal'"></Terminal>
      </el-tab-pane>
      <el-tab-pane :label="$t('terminal.blackList.title')" name="blackList">
        <black-list v-if="activeName === 'blackList'"></black-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped></style>
