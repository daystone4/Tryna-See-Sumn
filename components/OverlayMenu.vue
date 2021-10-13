<template>
<transition name="slide" appear>
    <div class="overlay" v-show="$store.state.showOverlay">
        <ul class="overlay__list">
            <li><NuxtLink class="overlay__list-link" :to="{name: 'index'}">Home</NuxtLink></li>
            <li><NuxtLink class="overlay__list-link" :to="{name: 'about'}">About</NuxtLink></li>
            <li><NuxtLink class="overlay__list-link" :to="{name: 'episodes'}">Episodes</NuxtLink></li>
            <li><NuxtLink class="overlay__list-link" :to="{name: 'contact'}">Contact</NuxtLink></li>
            <li><NuxtLink class="overlay__list-link" :to="{name: 'shop'}">Shop</NuxtLink></li>
        </ul>
    </div>
</transition>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background: $dark;
    display: grid;
    place-items: center;
    z-index: 10;

    &__list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        li {
            font-size: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;

            a {
                color: $white;
            }
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}

// .slide-enter-to {
//     transform: translateX(0);
// }
</style>