import { createI18n, type I18n } from 'vue-i18n'
import en from './lang/en'
import zhCN from './lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhCnLocale from 'element-plus/lib/locale/lang/zh-cn'
import { ref } from 'vue'
export const localLang = ref('zh-cn')
const messages = {
  [zhCnLocale.name]: {
    ...zhCnLocale,
    ...zhCN
  },
  [enLocale.name]: {
    ...enLocale,
    ...en
  }
}

export const i18n: I18n = createI18n({
  locale: localLang.value,
  messages,
  legacy: false,
  globalInjection: true,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  fallbackLocale: zhCnLocale.name
})
