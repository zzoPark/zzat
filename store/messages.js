export const state = () => ({
  list: [],
})

export const getters = {
  get(state) {
    return state.list
  },
}

export const mutations = {
  set(state, list) {
    state.list = list
  },
  add(state, item) {
    state.list.push(item)
  },
}

export const actions = {
  async fetch({ state, commit }) {
    const messages = await this.$axios.$get("messages")
    commit("set", messages)
  },
  send({ state, commit }, message) {
    commit("add", message)
  },
  recieve({ state, commit }, message) {
    commit("add", message)
  },
}
