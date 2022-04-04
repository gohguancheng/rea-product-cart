export const state = () => ({
  language: 'en',
  currency: 'SG$',
  total: 0,
  cart: {},
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
  },
  adjustCart(state, payload) {
    const inCart = state.cart[payload.id]!==undefined;
    if(inCart) {
      state.total -= payload.amount;
      delete state.cart[payload.id];
    } else {
      state.total += payload.amount;
      state.cart[payload.id] = payload.amount;
    }
  },
}
