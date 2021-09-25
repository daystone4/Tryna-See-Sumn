<template>
  <main id="main">
    <HeroSection />
    <section class="featured container">
      <div class="card-wrapper">
        <EpisodeCard :episode="feature" v-for="(feature, index) in featured" :key="index" />
      </div>
    </section>
  </main>

</template>

<script>
export default {
  computed: {
    featured() {
      return this.$store.state.episodes.filter(item => item.featured === true)
    }
  }

}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@media only screen and (min-width: 48em) {
  .card-wrapper {
    flex-direction: row;
  }
}
</style>
