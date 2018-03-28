<template lang="html">
  <div>
    <div id="carousel-slide">
      <transition :name="transition">
        <div v-show="visible" class="slide__container">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel-slide',
    data() {
      return {
        index: 0
      }
    },
    computed: {
      transition() {
        if(this.$parent.direction) {
          return 'slide-' + this.$parent.direction
        }
      },
      visible() {
        return this.index === this.$parent.index
      }
    }
  }
</script>

<style lang="css" scoped>
  .slide__container {
    width: 100%;
    height: auto;
  }
  .slide-right-enter-active {
    animation: slideRightIn .5s;
  }
  .slide-right-leave-active {
    animation: slideRightOut .5s;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @keyframes slideRightIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @@keyframes slideRightOut {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }

  .slide-left-enter-active {
    animation: slideLeftIn .5s;
  }
  .slide-left-leave-active {
    animation: slideLeftOut .5s;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @keyframes slideLeftIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @@keyframes slideLeftOut {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }

  .slide__container {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
  }
</style>
