<template>
    <button :class="[$store.state.showOverlay ? 'active' : '', 'navbar__btn']" @click="$store.commit('toggleOverlay')">
        <div class="line"></div>
        <div class="line"></div>
    </button>
</template>

<script>
</script>

<style lang="scss" scoped>
.navbar__btn {
    position: absolute;
    top: 30px;
    right: 30px;
    background: transparent;
    border: none;
    width: 50px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: transform 330ms ease-out;
    z-index: 99;
}

.navbar__btn.active {
    transform: rotate(90deg);  
}

.line {
  background: $dark;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.active .line:nth-of-type(1) {
    transform: rotate(45deg) translateX(19%);
    background: $white;
}
.active .line:nth-of-type(2) {
    transform: rotate(-45deg) translateX(20%);
    background: $white;
}
</style>