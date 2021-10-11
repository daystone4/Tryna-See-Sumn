<template>
    <header id="header">
        <nav class="navbar">
            <ul class="navbar__list">
                <li><NuxtLink class="navbar__list-link" :to="{name: 'index'}">Home</NuxtLink></li>
                <li><NuxtLink class="navbar__list-link" :to="{name: 'about'}">About</NuxtLink></li>
                <li><NuxtLink class="navbar__list-link" :to="{name: 'episodes'}">Episodes</NuxtLink></li>
                <li><NuxtLink class="navbar__list-link" :to="{name: 'contact'}">Contact</NuxtLink></li>
                <li><NuxtLink class="navbar__list-link" :to="{name: 'shop'}">Shop</NuxtLink></li>
            </ul>
            <div :class="[$store.state.showOverlay ? 'active' : '', 'navbar__btn']" @click="$store.commit('toggleOverlay')">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
        <div class="overlay" v-show="$store.state.showOverlay">
            <ul class="overlay__list">
                <li><NuxtLink class="overlay__list-link" :to="{name: 'index'}">Home</NuxtLink></li>
                <li><NuxtLink class="overlay__list-link" :to="{name: 'about'}">About</NuxtLink></li>
                <li><NuxtLink class="overlay__list-link" :to="{name: 'episodes'}">Episodes</NuxtLink></li>
                <li><NuxtLink class="overlay__list-link" :to="{name: 'contact'}">Contact</NuxtLink></li>
                <li><NuxtLink class="overlay__list-link" :to="{name: 'shop'}">Shop</NuxtLink></li>
            </ul>
        </div>
        
    </header>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>
#header {
    position: relative;
    color: $white;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
}

.navbar__list {
    display: none;
}

.navbar__btn {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  transition: transform 330ms ease-out;
  z-index: 99;
}

.navbar__btn.active {
    transform: rotate(-45deg);  
}

// Menu Styles

.line {
  background: $dark;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.active .line:nth-of-type(1) {
    transform: rotate(45deg) translateX(25%);
}
.active .line:nth-of-type(2) {
    transform: rotate(-45deg) translateX(20%);
}

// Overlay

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: $dark;
    
}

@media only screen and (min-width: 48em) {
    .navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;

        &__list {
            display: flex;
            gap: 1rem;
        }

        .navbar__btn {
            display: none;
        }
    }
}
</style>