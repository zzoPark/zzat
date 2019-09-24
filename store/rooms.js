export const state = () => ({
  list: [
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
})

export const getters = {
  get (state) {
    return state.list
  }
}

export const mutations = {
  set (state, rooms) {
    state.rooms = rooms
  }
}
