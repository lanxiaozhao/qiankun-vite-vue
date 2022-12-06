<script setup lang="ts">
import dashboradRoutes from '@/router/dashboardRoutes'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import QuickSet from '@/views/quickSet/index.vue'
import { ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const menu = dashboradRoutes.children.filter((item) => item.meta.showLink)
const router = useRouter()
const activeRoute = router.currentRoute.value.fullPath
onMounted(() => {
  // 该参数是登陆后的响应数据，统一保存在localstorage中
  const quickComplete = localStorage.getItem('quick')
  if (!quickComplete) {
    ElMessageBox.confirm(t('message.openQuickSet.info'), t('message.openQuickSet.title'), {
      confirmButtonText: t('message.openQuickSet.ok'),
      cancelButtonText: t('message.openQuickSet.cancel'),
      type: 'warning',
      draggable: true
    })
      .then(() => {
        // quickSethow()
      })
      .catch(() => {
        localStorage.setItem('quick', '1')
      })
  }
})
// const quickSetRef = ref(QuickSet)
// const quickSethow = () => {
//   quickSetRef.value.isShow = true
// }
</script>

<template>
  <div class="menu-container">
    <div class="logo">logo</div>
    <el-menu router :default-active="activeRoute" class="menu">
      <div v-for="menuItem in menu" :key="menuItem.path">
        <el-sub-menu v-if="menuItem.children" :index="menuItem.path">
          <template #title>
            <i :class="['iconfont', menuItem.meta.icon]" class="icon"></i>
            <span class="submenu-title">{{ menuItem.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="childrenMenu in menuItem.children"
            :key="childrenMenu.path"
            :route="childrenMenu.path"
            :index="childrenMenu.path"
          >
            <i :class="['iconfont', childrenMenu.meta.icon]" class="child-icon"></i>
            <span>{{ childrenMenu.meta.title }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :route="menuItem.path" :index="menuItem.path">
          <i :class="['iconfont', menuItem.meta.icon]" class="icon"></i>
          <span>{{ menuItem.meta.title }}</span>
        </el-menu-item>
      </div>
      <!-- <div class="quick-set" @click="quickSethow">
        {{ $t('menu.quickSet') }}
      </div> -->
    </el-menu>
  </div>
  <!-- <quick-set ref="quickSetRef"></quick-set> -->
</template>

<style lang="scss" scoped>
.menu-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 33, 36);
  width: 256px;
  .logo {
    height: 56px;
    font-size: 18px;
    font-weight: 500;
    color: rgb(207, 207, 207);
  }
  .menu {
    height: calc(100vh - 56px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background: #9c9c9caf;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
}
.el-menu {
  width: 256px;
  background-color: rgb(30, 33, 36);
  border: none;
  &-item.is-active {
    background-color: rgb(43, 45, 48);
    font-weight: 500;
  }
  &-item {
    font-size: 16px;
  }
}
.el-sub-menu {
  .submenu-title {
    font-size: 16px;
  }

  .el-menu {
    background-color: transparent;
    &-item {
      font-size: 14px;
    }
  }
}
.icon {
  font-size: 20px;
  padding-right: 7px;
}
.child-icon {
  font-size: 16px;
  padding-right: 7px;
}
.quick-set {
  color: var(--el-menu-text-color);
  font-size: 14px;
  text-align: center;
  margin: 24px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(62, 63, 64, 0.8);
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: var(--el-menu-active-color);
  }
}
</style>
