<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import EditTerminal from './editTerminal.vue'
import type { TerminalItem } from '../type'
import { getTerminal, joinBlackList, disconnect, cancelManage } from '@/http/terminalManage/index'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// TODO 根据后端修改value值
const showTypeList = [
  { label: '全部设备', value: 0 },
  { label: '在线设备', value: 1 }
]
const data = ref<TerminalItem[]>([])
const getData = () => {
  getTerminal().then((res: { staInfo: TerminalItem[] }) => {
    data.value = res.staInfo
  })
}
getData()
const queryForm = reactive({
  showType: 0,
  queryCondition: ''
})
const editRef = ref(EditTerminal)
const editItem = ref<TerminalItem>()
const edit = (item: TerminalItem) => {
  // todo 根据item请求item数据
  editItem.value = item
  editRef.value.isShow = true
}
const refresh = () => {
  getData()
}
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
const selectChange = (val: number) => {
  // todo 重新请求数据
}
const query = () => {
  // todo 重新请求数据
}
const join = (item: TerminalItem) => {
  ElMessageBox.confirm(
    t('terminal.manage.joinMessage.info'),
    t('terminal.manage.joinMessage.title'),
    {
      confirmButtonText: t('buttons.ensure'),
      cancelButtonText: t('buttons.cancel'),
      type: 'warning',
      draggable: true
    }
  )
    .then(() => {
      joinBlackList({ mac: item.mac, name: item.name }).then((res: object) => {
        getData()
        ElMessage({
          type: 'success',
          message: t('terminal.manage.joinMessage.success')
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('terminal.manage.joinMessage.cancel')
      })
    })
}
const cut = (item: TerminalItem) => {
  ElMessageBox.confirm(
    t('terminal.manage.cutMessage.info'),
    t('terminal.manage.cutMessage.title'),
    {
      confirmButtonText: t('buttons.ensure'),
      cancelButtonText: t('buttons.cancel'),
      type: 'warning',
      draggable: true
    }
  )
    .then(() => {
      disconnect({ mac: item.mac, name: item.name }).then((res: object) => {
        getData()
        ElMessage({
          type: 'success',
          message: t('terminal.manage.cutMessage.success')
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('terminal.manage.cutMessage.cancel')
      })
    })
}
const cancel = (item: TerminalItem) => {
  ElMessageBox.confirm(
    t('terminal.manage.cancelMessage.info'),
    t('terminal.manage.cancelMessage.title'),
    {
      confirmButtonText: t('buttons.ensure'),
      cancelButtonText: t('buttons.cancel'),
      type: 'warning',
      draggable: true
    }
  )
    .then(() => {
      cancelManage({ mac: item.mac, name: item.name }).then((res: object) => {
        getData()
        ElMessage({
          type: 'success',
          message: t('terminal.manage.cancelMessage.success')
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('terminal.manage.cancelMessage.cancel')
      })
    })
}
</script>

<template>
  <div class="hasTable">
    <div class="note">
      {{ $t('terminal.manage.note') }}
    </div>
    <div class="toolbar">
      <el-form :inline="true" :model="queryForm" class="form" label-suffix="：">
        <el-form-item :label="t('terminal.manage.showDevice')">
          <el-select @change="selectChange" v-model="queryForm.showType">
            <el-option
              v-for="item in showTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="queryForm.queryCondition"
            :placeholder="t('terminal.manage.inputPlaceholder')"
          />
        </el-form-item>
      </el-form>
      <el-button class="btn" type="primary" @click="query">{{ $t('buttons.query') }}</el-button>
    </div>
    <el-table :data="data" class="table">
      <el-table-column
        prop="name"
        :label="$t('terminal.manage.table[0]')"
        width="120"
        show-overflow-tooltip
      >
        <template #default="scope">
          {{ scope.row.name ? scope.row.name : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="access" :label="$t('terminal.manage.table[1]')" width="90">
        <template #default="scope">
          {{ scope.row.access ? $t('terminal.manage.line') : $t('terminal.manage.wireless') }}
        </template>
      </el-table-column>
      <el-table-column prop="mac" :label="$t('terminal.manage.table[2]')" min-width="160" />
      <el-table-column prop="ipv4" :label="$t('terminal.manage.table[3]')" min-width="120" />
      <el-table-column prop="txRate" :label="$t('terminal.manage.table[4]')" width="130">
        <template #default="scope">
          {{ scope.row.txRate || scope.row.txRate === 0 ? scope.row.txRate : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="rxRate" :label="$t('terminal.manage.table[5]')" width="130">
        <template #default="scope">
          {{ scope.row.rxRate || scope.row.rxRate === 0 ? scope.row.rxRate : '--' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="accessName"
        :label="$t('terminal.manage.table[6]')"
        width="120"
        show-overflow-tooltip
      >
        <template #default="scope">
          {{ scope.row.accessName ? scope.row.accessName : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="radio" :label="$t('terminal.manage.table[7]')" min-width="100">
        <template #default="scope">
          {{ scope.row.radio ? scope.row.radio : '--' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="ssid"
        :label="$t('terminal.manage.table[8]')"
        min-width="150"
        show-overflow-tooltip
      >
        <template #default="scope">
          {{ scope.row.ssid ? scope.row.ssid : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="vlanId" :label="$t('terminal.manage.table[9]')" min-width="100">
        <template #default="scope">
          {{ scope.row.vlanId ? scope.row.vlanId : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="rssi" :label="$t('terminal.manage.table[10]')" min-width="100">
        <template #default="scope">
          {{ scope.row.rssi ? scope.row.rssi : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="accessTime" :label="$t('terminal.manage.table[11]')" width="150">
        <template #default="scope">
          {{ scope.row.accessTime ? scope.row.accessTime : '--' }}
        </template>
      </el-table-column>
      <!-- 缺少 -->
      <el-table-column
        prop="current"
        :label="$t('terminal.manage.table[12]')"
        width="120"
        fixed="right"
      >
        <template #default="scope">
          <span v-if="scope.row.current">{{ $t('terminal.manage.current') }}</span>
          <el-link v-else type="primary" @click="join(scope.row)">{{
            $t('buttons.joinBlackList')
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column :label="$t('terminal.manage.table[13]')" width="100" fixed="right">
        <template #default="scope">
          <i class="iconfont icon-edit" @click="edit(scope.row)" :title="$t('buttons.set')"></i>
          <i
            v-if="!scope.row.access"
            class="iconfont icon-disconnect"
            @click="cut(scope.row)"
            :title="$t('buttons.disconnect')"
          ></i>
          <i
            v-if="scope.row.rateLimit || scope.row.allowTime"
            class="iconfont icon-cancelManage"
            @click="cancel(scope.row)"
            :title="$t('buttons.cancelManage')"
          ></i>
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
  <edit-terminal ref="editRef" :record="editItem" @refresh="refresh"></edit-terminal>
</template>

<style lang="scss" scoped>
.note {
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  color: #ff1f1f;
  margin-bottom: 16px;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  .form {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .el-form-item {
      margin-right: 0;
    }
  }
  .btn {
    margin-left: 4px;
  }
}
.iconfont {
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    color: var(--el-color-primary);
  }
}
</style>
