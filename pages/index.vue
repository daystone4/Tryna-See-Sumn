<template>
  <main id="main">
    <!--  Hero Section -->
    <section class="hero section-double-padding">
        <div class="section__content container">
          <h3 class="subtitle">The New Generation Dating Podcast</h3>
          <h1 class="title">Tryna See Sumn</h1>
          <p class="paragraph">With the help of real people, real stories, and real conversations, we're able to see sumn from a different perspective than before. Each episode features special guests and information to help each sex better understand one another. Candid conversations range from communication, social media, open relationships, sex, attachment styles, and so much more.</p>
          <div class="btn-wrapper">
            <SpecialButton text="Subscribe" />
          </div> 
        </div>
    </section>
    <!-- Featured Episodes -->
    <section class="featured section-double-padding">
      <div class="section-content container">
        <h2 class="title">Featured Episodes</h2>
        <div class="card-wrapper">
          <EpisodeCard :episode="feature" v-for="(feature, index) in featured" :key="index" />
        </div>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="testimonials section-double-padding">
      <div class="section-content container">
        <h2 class="title">Wise Words</h2>
        <TheCarousel />
      </div>
    </section>
    <!-- Follow the Podcast -->
    <!-- <section class="social section-double-padding">
      <div class="section-content container">
        <h2 class="title">Follow the Podcast</h2>
          <div class="social-wrapper">
            <a href="https://www.instagram.com/trynaseesumnpod/" target="_blank" class="accent-text">Instagram</a>
            <a href="https://www.facebook.com/trynaseesumnpod" target="_blank" class="accent-text">Facebook</a>
            <a href="https://www.pinterest.com/trynaseesumnpodcast/" target="_blank" class="accent-text">Pinterest</a>
          </div>
      </div>
    </section> -->
  </main>

</template>

<script>
export default {
  computed: {
    featured() {
      return this.$store.state.episodes.episodes.filter(item => item.featured === true)
    }
  },
}
</script>

<style lang="scss" scoped>
#main {
  text-align: center;
}

.hero {
  text-align: left;
}

.testimonials {
  background: $light;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.social-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

}

.accent-text {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: $light;
  text-transform: uppercase;

  // &:hover {
  //   color: $dark;
  // }
}


@media only screen and (min-width: 48em) {
  .card-wrapper {
    flex-direction: row;
  }
}
</style>
