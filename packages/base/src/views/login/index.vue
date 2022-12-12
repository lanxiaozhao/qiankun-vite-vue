<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { getLogin } from '@/http/login'
import type { FormInstance, FormRules } from 'element-plus'
import LangSelect from '@/layout/component/langSelect.vue'
// import { cookie } from '@/utils/http'

const form = reactive({
  name: '',
  password: ''
})
const formRef = ref<FormInstance>()
const router = useRouter()
const rules: FormRules = {
  name: [{ required: true, message: '不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
const login = async () => {
  // TODO  表格验证提交登录信息确定语言包
  if (!formRef.value) return
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      // getLogin({ luci_username: form.name, luci_password: form.password })
      //   .then((res) => {
      //     if (res) {
      //       // todo 获取cookie或者token/userInfo,获取quickSet,并将获取道德信息存储到localStorage
      //       console.log(document.cookie)
      //       router.push('/')
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="product">{{ $t('login.title') }}</div>
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item prop="name">
        <el-input v-model="form.name" size="large" :placeholder="$t('login.username')" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          size="large"
          :placeholder="$t('login.password')"
        />
      </el-form-item>
      <el-form-item>
        <lang-select></lang-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">{{ $t('buttons.login') }}</el-button>
    <div class="copyright">{{ $t('login.copyright') }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .logo {
    margin-top: -30px;
  }
  .product {
    font-size: 36px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #191919;
  }
  .copyright {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: #333333;
  }
}
.el-button {
  width: 86px;
  margin-top: 20px;
}
:deep(.el-input--large) {
  width: 286px;
}
:deep(.el-input__wrapper) {
  box-shadow: none !important;
  border-bottom: 1px solid #cecece;
  border-radius: 0;
  &.is-focus {
    border-color: #409eff;
  }
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: none !important;
  border-color: #409eff;
}
:deep(.el-select .el-input__wrapper.is-focus) {
  box-shadow: none !important;
}
</style>
