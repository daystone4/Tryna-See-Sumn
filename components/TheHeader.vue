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
            <HamburgerMenu />
            <OverlayMenu />
        </nav>
        
        
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