import { ref } from 'vue'

export function useDialogOperation(props?: Readonly<unknown>) {
  const isShow = ref(false)
  const handleClose = () => {
    isShow.value = false
  }
  const emit = defineEmits<{ (e: 'refresh'): void }>()
  // todo 对于有不同type的，需要传入type和对应的query,如：params：{[type1]:query,[type2]:query2}
  const save = (query?: () => Promise<unknown>) => {
    // todo 按照type请求不同接口 成功后有反馈设置成功
    // for (const key in params) {
    //   if (key === props.type) {
    //     params.key().then(res => {isShow.value = false
    //       emit('refresh')})
    //     break
    //   }
    // }
    isShow.value = false
    emit('refresh')
  }
  return {
    isShow,
    handleClose,
    save
  }
}
