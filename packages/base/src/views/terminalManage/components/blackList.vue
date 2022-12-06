<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { BlackItem } from '../type'
import { getBlackList, removeBlack } from '@/http/terminalManage/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const data = ref<BlackItem[]>([])
const getData = () => {
  getBlackList().then((res: { blacklist: BlackItem[] }) => {
    data.value = res.blacklist
  })
}
getData()
const pagination = reactive({
  currentPage: 1,
  pageSize: 10
})
const handleSizeChange = (val: number) => {
  // todo 重新请求数据
  pagination.pageSize = val
}
const handleCurrentChange = (val: number) => {
  // todo 重新请求数据
  pagination.currentPage = val
}
const remove = (item: BlackItem) => {
  ElMessageBox.confirm(
    t('terminal.blackList.removeMessage.info'),
    t('terminal.blackList.removeMessage.title'),
    {
      confirmButtonText: t('buttons.ensure'),
      cancelButtonText: t('buttons.cancel'),
      type: 'warning',
      draggable: true
    }
  )
    .then(() => {
      removeBlack({ mac: item.mac, name: item.name }).then(() => {
        getData()
        ElMessage({
          type: 'success',
          message: t('terminal.blackList.removeMessage.success')
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('terminal.blackList.removeMessage.cancel')
      })
    })
}
</script>

<template>
  <div class="hasTable">
    <el-table :data="data" class="table">
      <el-table-column prop="name" :label="$t('terminal.blackList.table[0]')" show-overflow-tooltip>
        <template #default="scope">
          {{ scope.row.name ? scope.row.name : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="mac" :label="$t('terminal.blackList.table[1]')">
        <template #default="scope">
          {{ scope.row.mac ? scope.row.mac : '--' }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('terminal.blackList.table[2]')" fixed="right">
        <template #default="scope">
          <el-link type="primary" @click="remove(scope.row)">{{
            $t('buttons.removeBlackList')
          }}</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="pagination.currentPage"
      v-model:page-size="pagination.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next"
      :total="data.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="pagination"
    />
  </div>
</template>

<style lang="scss" scoped></style>
