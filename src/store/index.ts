import { createStore } from 'vuex'

interface State {
  message: string,
}

const store = createStore<State>({
  strict: true,
  state: {
    message: 'Hello from Vuex :)',
  },
  getters: {
    message: (state: State): string => state.message,
  },
})

export default store
