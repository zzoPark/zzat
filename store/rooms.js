export const state = () => ({
  list: [],
  current: null,
})

export const getters = {
  get(state) {
    return state.list
  },
  current(state) {
    return state.current
  },
}

export const mutations = {
  set(state, list) {
    state.list = list
  },
  add(state, item) {
    state.list.push(item)
  },
  join(state, item) {
    state.current = item
  },
  leave(state, item) {
    state.current = null
  },
}

export const actions = {
  async fetch({ commit }) {
    const rooms = await this.$axios.$get("rooms")
    commit("set", rooms)
  },
  async join({ state, commit }, slug) {
    const room = await this.$axios.$get(`rooms/${slug}`)
    commit("join", room)
  },
  leave({ state, commit }, room) {
    commit("leave", room)
  },
  async exists({ state }, slug) {
    try {
      const res = await this.$axios.head(`rooms/${slug}`)
      return res.status === 200
    } catch (err) {
      return false
    }
  },
  async add({ commit }, room) {
    const newRoom = await this.$axios.$post("rooms", room)
    commit("add", newRoom)
  },
}
