<template>
  <!-- <client-only> -->
  <swiper class="swiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide" v-for="(slide, index) in carouselSlides" :key="index">
          <div class="slide-content">
            <p>{{ slide.quote }}</p>
            <p>- {{  slide.author }}</p>
          </div>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <!-- </client-only> -->
</template>

<script>
  export default {
    data() {
      return {
        swiperOptions: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        },
        carouselSlides: this.$store.state.testimonials.testimonials,
      }
    }
  }
</script>

<style lang="scss">


.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>