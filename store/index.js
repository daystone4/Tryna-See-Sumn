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
    // checkScreen(state) {
        // state.windowWidth = window.innerWidth;
        // if(state.windowWidth <= 750) {
        //     state.isMobile = true
        //     // return
        // } else {
        //     state.isMobile = false
        //     // return
        // }
    // }
}



