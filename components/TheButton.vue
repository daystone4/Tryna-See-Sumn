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
    background: transparent;
    padding: 0.75rem 1.5rem;
    border: 1px solid ;
    border-radius: 4px;
    color: $primary;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    &:hover {
      background: $lightprimary;
      // box-shadow: ;
    }
}
</style>