const state = {
	group_a: [],
	group_b: [],
	group_c: [],
	testNumber: 9009,
	changeNumber: 2
}

const mutations = {
	addChangeNum(state) {
		//			state.changeNumber++
	}
}

const actions = {
	addChangeNum({
		commit
	}) {
		//dosomething
		state.changeNumber+=0.5
		if(state.changeNumber>5){
			state.changeNumber=0
		}
			commit('addChangeNum')
	}
}

export default {
	state,
	mutations,
	actions
}