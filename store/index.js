export const state = () => ({
  language: 'en',
  currency: 'SG$',
  total: 0,
})

export const mutations = {
  chineseLang(state) {
    state.language = 'cn'
  },
  engLang(state) {
    state.language = 'en'
  },
  singDollar(state) {
    state.currency = 'SG$'
  },
  hkDollar(state) {
    state.currency = 'HK$'
  },
  computeTotal(state, amount) {
    state.total += amount;
  }
}
