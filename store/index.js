/**
 * State
 */
export const state = () => {}

/**
 * Getters
 */
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

/**
 * Mutations
 */
export const mutations = {}

/**
 * Actions
 */
export const actions = {}
