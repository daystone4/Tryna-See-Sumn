<template>
  <button class="btn"> {{ text }}</button>
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
    padding: 2rem 1rem;
    color: $dark;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: $light;
      border-radius: 2rem;
      width: 25%;
      height: 50%;
      z-index: -1;
      transform: translateY(50%);
      transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }

    &:hover::after {
      width: 100%;
    }
}
</style>