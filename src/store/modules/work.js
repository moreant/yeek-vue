import { fetchWork } from '@/api/work'

const state = {
  list: []
}

const mutations = {
  SET_WORK_LIST: (state, list) => {
    state.list = list
  },
  SET_INDEX: (state, index) => {
    state.index = index
  }
}

const actions = {
  info ({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchWork(query)
        .then(response => {
          const { data } = response
          commit('SET_WORK_LIST', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
