export const state = () => ({
  list: [],
  current: null
})

export const getters = {
  get(state) {
    return state.list
  },
  current(state) {
    return state.current
  }
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
  }
}

export const actions = {
  fetch({ commit }) {
    const rooms = [
      {
        id: 1,
        url: 'room1',
        title: 'Chat Room 1',
        tags: ['chat', 'room', 'room1', 'zzo'],
        people: 15
      },
      {
        id: 2,
        url: 'room2',
        title: 'Chat Room 2',
        tags: ['chat', 'room', 'room2', 'zzo'],
        people: 20
      }
    ]
    commit('set', rooms)
  },
  join({ state, commit }, url) {
    const room = state.list.find((it) => it.url === url)
    commit('join', room)
  },
  leave({ state, commit }, room) {
    commit('leave', room)
  },
  exists({ state }, url) {
    return state.list.some((it) => it.url === url)
  }
}
