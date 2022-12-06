<script setup lang="ts">
import { reactive } from 'vue'
const weeks = [
  { value: 1, label: '星期一' },
  { value: 2, label: '星期二' },
  { value: 3, label: '星期三' },
  { value: 4, label: '星期四' },
  { value: 5, label: '星期五' },
  { value: 6, label: '星期六' },
  { value: 0, label: '星期日' }
]
const limiteTime = reactive({
  week: 1,
  rangeTime: []
})
const emit = defineEmits<{
  (e: 'pickTime', val: Object): void
}>()

const addTime = () => {
  console.log(limiteTime)

  emit('pickTime', limiteTime)
}
</script>

<template>
  <div class="time-picker">
    <el-select v-model="limiteTime.week">
      <el-option
        v-for="item in weeks"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></el-option>
    </el-select>
    <el-time-picker
      v-model="limiteTime.rangeTime"
      format="HH:mm"
      value-format="HH:mm"
      is-range
      range-separator="-"
      start-placeholder="Start time"
      end-placeholder="End time"
      popper-class="time-select"
    />
    <el-button :disabled="!limiteTime.rangeTime.length" class="btn" @click="addTime">{{
      $t('buttons.add')
    }}</el-button>
  </div>
</template>

<style lang="scss" scoped>
.time-picker {
  display: flex;
  align-items: center;
  .el-select {
    width: 90px;
    margin-right: 10px;
  }
  :deep(.el-date-editor.el-input__wrapper) {
    width: 240px;
  }
  .btn {
    margin-left: 10px;
  }
}
.time-select {
  width: 240px !important;
}
</style>
