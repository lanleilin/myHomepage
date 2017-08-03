const state = {
  group_a: [],
  group_b: [],
  group_c: [],
  testNumber:9009,
  changeNumber:42
}

const mutations = {
		addChangeNum(state){
			state.changeNumber++
		}
}

const actions = {
    addChangeNum({ commit }) {
    //dosomething
    commit('addChangeNum')
  }
}

export default {
  state,
  mutations,
  actions
}
