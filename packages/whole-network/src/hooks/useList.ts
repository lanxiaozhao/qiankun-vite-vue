import { reactive, ref } from 'vue'

export function useList(listQuery?: () => Promise<unknown>) {
  // todo 请求列表数据并赋值给data
  const data = ref([])
  // todo 刷新函数 重新调用listQuery
  const refresh = () => {}
  // 分页处理
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10
  })
  const handleSizeChange = (val: number) => {
    pagination.pageSize = val
    // todo 传入新的请求列表参数，刷新列表
  }
  const handleCurrentChange = (val: number) => {
    pagination.currentPage = val
    // todo 传入新的请求列表参数，刷新列表
  }
  // 多选处理
  const selected = ref([])
  const selectChange = (val: []) => {
    console.log(val)
    selected.value = val
  }
  // todo 删除所选条目的函数
  // todo 启用禁用的函数
  return {
    data,
    pagination,
    handleSizeChange,
    handleCurrentChange,
    selectChange
  }
}
