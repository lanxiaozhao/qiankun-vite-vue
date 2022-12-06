import { ref } from 'vue'
export function useOpenDialog() {
  const editRef = ref()
  const editItem = ref()
  const edit = (item, query?: () => Promise<unknown>, params?: object) => {
    // todo 这里的item需要请求获得，通过传入的请求方法传入item.id获取值再赋值给editItem
    editItem.value = item
    editRef.value.isShow = true
  }
  const addRef = ref()
  const add = () => {
    addRef.value.isShow = true
  }
  // todo 详情弹窗、列表弹窗
  return {
    editRef,
    edit,
    editItem,
    add,
    addRef
  }
}
