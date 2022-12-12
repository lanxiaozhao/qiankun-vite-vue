<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import LangSelect from '@/components/langSelect.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const logout = () => {
  ElMessageBox.confirm(t('logout.message'), t('logout.title'), {
    confirmButtonText: t('logout.confirmBtn'),
    cancelButtonText: t('logout.cancelBtn'),
    autofocus: false
  })
    .then(() => {
      // todo 调用退出登录的接口,清除cookie、localStorage等
      console.log('退出登录')
      router.push('/login')
    })
    .catch(() => {})
}
const goLocal = () => {
  console.log('local')
  router.push('/local')
}
const goWholeNetwork = () => {
  console.log('whole')
  router.push('/whole')
}
</script>

<template>
  <div class="header">
    <span>{{ $t('productModel') }}</span>
    <el-button @click="goWholeNetwork">整网配置</el-button>
    <el-button @click="goLocal">本机配置</el-button>
    <div class="header-r">
      <lang-select class="select"></lang-select>
      <i class="iconfont icon-exit" @click="logout"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
  z-index: 999;
  width: 100%;
  &-r {
    display: flex;
    align-items: center;
  }
  .icon-exit {
    color: #409eff;
    font-size: 24px;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }
}
.select {
  width: 90px;
  line-height: 28px;
}
:deep(.el-input--large) {
  font-size: 14px;
  .el-input__wrapper {
    padding: 0 6px;
  }
  .el-input__inner {
    height: 28px;
  }
  .el-input__suffix-inner > :first-child {
    margin-left: 2px;
  }
}
</style>
