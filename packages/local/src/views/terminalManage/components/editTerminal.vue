<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { TerminalItem } from '../type'
import type { FormInstance, FormRules } from 'element-plus'
import TimePicker from '@/components/timePicker.vue'
import { editTerminal } from '@/http/terminalManage/index'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

// todo 需要修改
const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const props = defineProps<{
  record: TerminalItem
}>()
const { t } = useI18n()
const formRef = ref<FormInstance>()
const formData = ref<TerminalItem>()
const isShow = ref(false)
watch(isShow, (val) => {
  if (val) {
    // todo 需要判断返回数据是否有时间限制，如果有，不需要再添加limiteTime,如果没有就需要添加
    formData.value = { ...props.record, limiteTime: [] }
  } else {
    formRef.value.resetFields()
  }
})

// todo 需要根据后端修改
const limiteSpeedList = [
  { label: 0, text: '不限速' },
  { label: 1, text: '限速' }
]
const limiteTimeList = [
  { label: 0, text: '所有时间' },
  { label: 1, text: '设置时间' }
]

const rules: FormRules = {
  name: [{ required: true, message: '不能为空', trigger: 'blur' }],
  maxTxRate: [{ required: true, message: '不能为空', trigger: 'blur' }],
  maxRxRate: [{ required: true, message: '不能为空', trigger: 'blur' }],
  limiteTime: [{ type: 'array', required: true, message: '不能为空', trigger: 'change' }]
}
const handleClose = () => {
  isShow.value = false
}
const emit = defineEmits<{ (e: 'refresh'): void }>()
const save = () => {
  // todo 请求接口 成功后有反馈设置成功 表单验证
  editTerminal(formData.value).then((res) => {
    isShow.value = false
    emit('refresh')
    ElMessage({
      type: 'success',
      message: t('terminal.edit.messageSuccess')
    })
  })
}
const pickTimeId = ref(0)
const pickTime = (val) => {
  if (
    formData.value.limiteTime.every(
      (item) => item.week !== val.week || item.rangeTime.join() !== val.rangeTime.join()
    )
  ) {
    formData.value.limiteTime.push({ ...val, id: pickTimeId.value })
    pickTimeId.value += 1
  }
}
const del = (id: number) => {
  formData.value.limiteTime = formData.value.limiteTime.filter((item) => item.id !== id)
}
defineExpose({
  isShow
})
</script>
<template>
  <el-dialog v-model="isShow" :title="$t('terminal.edit.title')" width="580px">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="120px" label-suffix="：">
      <el-form-item :label="$t('terminal.edit.form[0]')" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item :label="$t('terminal.edit.form[1]')">
        {{ formData.access ? $t('terminal.edit.line') : $t('terminal.edit.wireless') }}
      </el-form-item>
      <el-form-item :label="$t('terminal.edit.form[2]')">
        {{ formData.ipv4 }}
      </el-form-item>
      <el-form-item :label="$t('terminal.edit.form[3]')">
        {{ formData.mac }}
      </el-form-item>
      <el-form-item :label="$t('terminal.edit.form[4]')">
        <el-radio-group v-model="formData.rateLimit">
          <el-radio v-for="item in limiteSpeedList" :key="item.label" :label="item.label">
            {{ item.text }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="formData.rateLimit">
        <el-form-item :label="$t('terminal.edit.form[5]')" prop="maxTxRate">
          <el-input v-model.number="formData.maxTxRate">
            <template #suffix> KB/s </template>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('terminal.edit.form[6]')" prop="maxRxRate">
          <el-input v-model.number="formData.maxRxRate">
            <template #suffix> KB/s </template>
          </el-input>
        </el-form-item>
      </div>
      <el-form-item :label="$t('terminal.edit.form[7]')">
        <el-radio-group v-model="formData.allowTime">
          <el-radio v-for="item in limiteTimeList" :key="item.label" :label="item.label">
            {{ item.text }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="formData.allowTime">
        <el-form-item :label="$t('terminal.edit.form[8]')" prop="limiteTime">
          <div>
            <TimePicker @pick-time="pickTime"></TimePicker>
            <div v-for="item in formData.limiteTime" :key="item.id">
              {{ weeks[item.week] }} {{ item.rangeTime[0] }} —— {{ item.rangeTime[1]
              }}<el-button size="small" class="btn-del" @click="del(item.id)">{{
                $t('buttons.del')
              }}</el-button>
            </div>
          </div>
        </el-form-item>
      </div>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ $t('buttons.cancel') }}</el-button>
        <el-button type="primary" @click="save">{{ $t('buttons.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
