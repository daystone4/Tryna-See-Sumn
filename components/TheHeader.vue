<template>
    <header id="header">
        <nav class="navbar">
            <ul class="navbar__list">
                <li class="navbar__list-item">Home</li>
                <li class="navbar__list-item">About</li>
                <li class="navbar__list-item">Episodes</li>
                <!-- <li class="navbar__list-item">Contact</li> -->
                <li class="navbar__list-item">Shop</li>
            </ul>
            <div class="navbar-cta">
                <NuxtLink to="/contact"><TheButton text="Contact" /></NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#header {
    background: $accent;
    color: $primary;
    padding: 0.5rem 1rem;
    margin-bottom: 4rem;
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
    }
}
</style>