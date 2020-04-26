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
  fetch({ state, commit }) {
    const messages = [
      {
        room: 1,
        username: "zzo",
        content: "Hi! Nice to meet you!",
        created: "2019-10-01 10:00:00",
      },
      {
        room: 1,
        username: "zzo",
        content: "Hello!",
        created: "2019-10-01 10:05:00",
      },
    ]
    commit("set", messages)
  },
  send({ state, commit }, message) {
    commit("add", message)
  },
  recieve({ state, commit }, message) {
    commit("add", message)
  },
}
