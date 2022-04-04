// plugins/i18n.js
import en from '../locales/en.json'
import cn from '../locales/cn.json'

export default {
  locale:'en',
  fallbackLocale: 'en',// always displays English if Chinese translation is not available
  messages: {
      // 'locales' directory contains all the translations in the form of json files
      en,  cn
  }
}