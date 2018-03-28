<template>
  <div class="container">
      <h3 class="stage-title">Shedule</h3>
    <main>
      <carousel>
        <carousel-slide v-for="(n, index) in slides" :key="index">
          <div class="stage-counter">hi! {{ n }}</div>
          <!-- <stage-template></stage-template> -->
          <div class="stage-view-container">
            <header class="header">
              <h3> Stage Name {{ n }}</h3>
              <ul class="stages-filters">
                <li><a href="#">Bussines Stage</a></li>
                <li><a href="#">Technology Stage</a></li>
                <li><a href="#">Workshops Stage</a></li>
              </ul>
            </header>
            <section class="presentation-list-container">
              <div class="presentation-list">
                <ul>
                  <li v-for="speaker in stageBussines" class="presetation" :key="speaker.id">
                    <div class="view">
                      <img src="" alt="">
                      <h5> {{ speaker.speaches.title }}</h5>
                      <h4>{{ speaker.name}}</h4>
                      <p>{{ speaker.speaches.houres }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <footer class="footer">
              <ul class="days-filters">
                <li><a href="#">Day ONE</a></li>
                <li><a href="#">Day TWO</a></li>
              </ul>
            </footer>
          </div>
        </carousel-slide>
      </carousel>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Carousel from './carousel.vue'
  import CarouselSlide from './carouselslide.vue'
  // import StageView from './stage-template.vue'

  export default {
    name: 'shedule',
    data() {
      return {
        slides: 7,
      }
    },
    components: {
      Carousel,
      CarouselSlide,
      // StageView
    },
    computed: {
      stageBussines () {
        return this.$store.getters.filterSpeakersByStage('Technology');
      }
    }
  }
</script>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: #f0f1f3;
    display: grid;
    grid-template-rows: 10% 90%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .stage-title,
  .stage-counter {
    text-align: center;
  }

  main {
    width: 100%;
    height: 100%;
  }

  .stage-view-container {
    text-align: center;
    margin: 0 auto;
  }


</style>
