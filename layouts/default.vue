<template>
    <div :class="[$store.state.showOverlay ? 'nav-active' : '', 'app-wrapper']">
        <TheHeader />
        <div class="content">
            <Nuxt />
        </div>
        <TheFooter />
    </div>
</template>