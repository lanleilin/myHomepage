import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_music = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

const actions = {
  /**
   * Search
   * queryStr: String
   * count: 3 default
   */
  query ({ commit }, payload) {
    request
      .get('https://api.douban.com/v2/movie/search?q=' +
        payload.queryStr + '&count=3')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'query',
            tag: 'movie',
            res: res.body.subjects
          })
        }
      })

  }
}

export default {
  state,
  mutations,
  actions
}
