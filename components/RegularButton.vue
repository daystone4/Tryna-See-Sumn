<template>
    <button class="btn">{{ text }}</button>
</template>

<script>
    export default {
        props: {
            text: String,
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    position: relative;
    background: transparent;
    border: none;
    padding: 1rem 0 0.25rem;
    color: $dark;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: $light;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }

    &:hover::after {
        transform: scaleX(1);
    }
}
</style>