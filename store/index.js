export const state = () => ({
  showOverlay: false,
  // showModal: false,
  // scrollPosition: null,
  // navActive: false,
  // windowWidth: null,
})

export const mutations = {
  // popUp(state) {
  //     state.showModal = !state.showModal
  // },
  toggleOverlay(state) {
    state.showOverlay = !state.showOverlay
  },
}
