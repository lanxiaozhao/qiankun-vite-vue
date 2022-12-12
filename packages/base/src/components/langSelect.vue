<script setup lang="ts">
import { ref } from 'vue'
import { getLang, setLang } from '@/locales/i18n'
import startQiankun from '../utils/microAppsConfig/index'
const lang = ref(getLang.value)
const selectChange = (val: string) => {
  setLang(val)
}
</script>

<template>
  <el-select @change="selectChange" v-model="lang" size="large">
    <el-option label="简体中文" value="zh-cn" />
    <el-option label="English" value="en" />
  </el-select>
</template>

<style lang="scss" scoped></style>
