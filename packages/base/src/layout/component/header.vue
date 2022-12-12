<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import LangSelect from '@/layout/component/langSelect.vue'
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
const showSystem = ref('whole')
const handleChange = (val) => {
  if (val === 'local') {
    router.push('/local')
  } else {
    router.push('/whole')
  }
}
// const goLocal = () => {
//   console.log('local')
//   router.push('/local')
// }
// const goWholeNetwork = () => {
//   console.log('whole')
//   router.push('/whole')
// }
</script>

<template>
  <div class="header">
    <div>
      <span>{{ $t('productModel') }}</span>
      <el-select @change="handleChange" v-model="showSystem" class="system-select">
        <el-option label="整网管理" value="whole"></el-option>
        <el-option label="本机管理" value="local"></el-option>
      </el-select>
    </div>
    <div class="header-r">
      <lang-select class="select"></lang-select>
      <span class="item" title="远程运维">远程运维</span>
      <span class="item" title="全网配置">全网配置</span>
      <span class="item" title="网络自检">网络自检</span>
      <span class="item" title="告警">告警</span>
      <i class="iconfont icon-exit" @click="logout" title="退出"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%), 0 2px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%);
  z-index: 999;
  width: 100%;
  background-color: #2b6afd;
  color: #fff;
  font-size: 14px;
  &-r {
    display: flex;
    align-items: center;
    .item {
      cursor: pointer;
      margin-left: 14px;
    }
  }
  .icon-exit {
    font-size: 24px;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }
}
.system-select {
  margin-left: 15px;
  width: 120px;
  :deep(.el-input__wrapper) {
    background-color: #658ef5;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
  :deep(.el-input__inner) {
    color: #fff;
  }
  :deep(.el-input .el-select__caret) {
    color: #fff;
  }
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: none !important;
}
:deep(.el-select .el-input__wrapper.is-focus) {
  box-shadow: none !important;
}
.select {
  width: 90px;
  line-height: 28px;
  :deep(.el-input__wrapper) {
    background-color: transparent;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
  :deep(.el-input__inner) {
    color: #fff;
  }
  :deep(.el-input .el-select__caret) {
    color: #fff;
  }
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
