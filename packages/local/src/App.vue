<script setup lang="ts">
import { watchEffect, ref, watch } from 'vue'
import { localLang } from '@/locales/i18n'
import { useI18n } from 'vue-i18n'
const { messages, locale } = useI18n()
const currentLocal = ref(messages[localLang.value])
// 修改element 和 i18n 默认语言
const changeLanguage = () => {
  locale.value = localLang.value
  currentLocal.value = messages.value[locale.value]
}
watch(
  () => localLang,
  (val) => {
    console.log(val)
  }
)
// 监听修改语言
watchEffect(changeLanguage)
</script>

<template>
  <el-config-provider :locale="currentLocal">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
