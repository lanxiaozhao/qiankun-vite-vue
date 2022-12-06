<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { getLang } from '@/locales/i18n'
import { useI18n } from 'vue-i18n'
const { messages, locale } = useI18n()
const currentLocal = ref(messages[getLang.value])
// 修改element 和 i18n 默认语言
const changeLanguage = () => {
  locale.value = getLang.value
  currentLocal.value = messages.value[locale.value]
}

// 监听修改语言
watchEffect(changeLanguage)
</script>

<template>
  <el-config-provider :locale="currentLocal">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
