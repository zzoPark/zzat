export const state = () => ({
  list: [],
  current: {}
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
  join(state, id) {
    state.current = state.list.find((it) => it.id === id)
  }
}

export const actions = {
  fetch({ state, commit }) {
    const rooms = [
      {
        id: 1,
        title: 'Chat Room 1',
        tags: ['chat', 'room', 'room1', 'zzo'],
        people: 15
      },
      {
        id: 2,
        title: 'Chat Room 2',
        tags: ['chat', 'room', 'room2', 'zzo'],
        people: 20
      }
    ]
    commit('set', rooms)
  },
  join({ state, commit }, data) {
    commit('join', data)
  }
}
