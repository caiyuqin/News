import * as types from './type'

export default {
  SHOW_HEADER: ({
    commit
  }) => {
    commit(types.SHOW_HEADER)
  },
  HIDE_HEADER: ({
    commit
  }) => {
    commit(types.HIDE_HEADER)
  },
  LOADING_SHOW: ({
    commit
  }) => {
    commit(types.LOADING_SHOW)
  },
  LOADING_HIDE: ({
    commit
  }) => {
    commit(types.LOADING_HIDE)
  }


}
