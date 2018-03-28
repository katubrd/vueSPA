<template>
  <div>
    <div class="carousel">
      <!-- <div class="carousel__pagination">
        <button v-for="n in SlidesCount" @click="goto(n - 1)" :class="{active: n - 1 == index }"></button>
      </div> -->
      <slot></slot>
      <button class="carousel__nav carousel__next" @click.prevent="next">next</button>
      <button class="carousel__nav carousel__prev" @click.prevent="prev">prev</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        index: 0,
        slides: [],
        direction: null
      }
    },
    mounted() {
      this.slides = this.$children
      this.slides.forEach((slide, i) => {
        slide.index = i
      })
    },
    computed: {
      SlidesCount() {
        return this.slides.length
      }
    },
    methods: {
      next() {
        this.index++
        this.direction = 'right'
        if(this.index >= this.SlidesCount) {
          this.index = 0
        }
      },
      prev() {
        this.index--
        this.direction = 'left'
        if(this.index < 0) {
          this.index = this.SlidesCount - 1
        }
      },
      goto(index) {
        this.direction = index > this.index ? 'right' : 'left'
        this.index = index
      }
    }
  }
</script>

<style>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100vw;
  }
  .carousel__nav {
    position: absolute;
    top: 43vh;
  }

  .carousel__prev {
    left : 0;
  }

   .carousel__next {
     right: 0;
   }

  .carousel__pagination {
    position: absolute;
    bottom: 3vh;
    left: 0;
    right: 0;
    text-align: center;
  }
  .carousel__pagination button {
    display: inline-block;
    width: 17px;
    height: 17px;
    background-color: white;
    opacity: 0.7;
    border-radius: 50%;
    margin: 0 0.7vh
  }
  .carousel__pagination button.active {
    bacground-color: black;
  }
</style>
