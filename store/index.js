export const state = () => ({
  language: 'en',
  currency: 'SGD',
})

export const mutations = {
  chineseLang(state) {
    state.language = 'cn'
  },
  engLang(state) {
    state.language = 'en'
  },
  singDollar(state) {
    state.currency = 'SGD'
  },
  hkDollar(state) {
    state.currency = 'HKD'
  },
}
