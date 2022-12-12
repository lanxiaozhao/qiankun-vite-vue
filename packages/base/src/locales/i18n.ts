import { createI18n, type I18n } from 'vue-i18n'
import en from './lang/en'
import zhCN from './lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhCnLocale from 'element-plus/lib/locale/lang/zh-cn'
import { computed, ref } from 'vue'

export const localLanguage = ref('')
export const setLang = (lang: string) => {
  localLanguage.value = lang
  localStorage.setItem('user_lang', lang)
}

export const getLang = computed(() => {
  localLanguage.value = localStorage.getItem('user_lang')
  if (!localLanguage.value) {
    const userLang = (navigator.language || navigator.browserLanguage).toLowerCase()
    setLang(userLang)
    return userLang
  } else {
    return localLanguage.value
  }
})

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
  locale: getLang.value,
  messages,
  legacy: false,
  globalInjection: true,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  fallbackLocale: zhCnLocale.name
})
