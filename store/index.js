export const state = () => ({
  fronts: [],
  materials: []
})

export const mutations = {
  SET_FRONTS(state, payload) {
    state.fronts = payload
  },
  SET_MATERIALS(state, payload) {
    state.materials = payload
  }
}

export const actions = {
  setFronts(context, payload) {
    context.commit('SET_FRONTS', payload)
  },
  setMaterials(context, payload) {
    context.commit('SET_MATERIALS', payload)
  }
}

export const getters = {
  getFronts(state) {
    return state.fronts
  },
  getMaterials(state) {
    return state.materials
  }
}
