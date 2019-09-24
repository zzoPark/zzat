export const state = () => ({
  list: []
})

export const getters = {
  get(state) {
    return state.list
  }
}

export const mutations = {
  set(state, rooms) {
    state.list = rooms
  },
  add(state, room) {
    state.list.push(room)
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
  }
}
