<template>
  <div id="app">
    <transition @enter="menuEnter" @leave="menuLeave">
      <div class="menu-container" :class="{ isOpen: isOpen }">
        <nav>
          <ul>
            <li><router-link to='/'><span>Home</span></router-link></li>
            <li><router-link to='/shedule'><span>Shedule</span></router-link></li>
          </ul>
        </nav>
        <button class="menu-toggle-button" @click.prevent="menuToggle">click</button>
      </div>
    </transition>
    <header>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
      isOpen: false,
      menuItems: [
          { title: 'Home', link: '/'},
          { title: 'Shedule', link: '/shedule'}
        ]
      }

    },
    components: {
    },
    methods: {
      menuEnter () {

      },
      menuLeave () {

      },
      open () {
        this.isOpen = true;
      },
      close () {
        this.isOpen = false;
      },
      menuToggle () {
        console.log('menu click');
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #526e8c;
    width: 100%;
    height: 100vh;
  }

  #app {
    max-width: 100%;
    max-height: 100vh;
    background-color: #526e8c;
  }

  .menu-container {
    width: 30vw;
    height: 100vh;
    background-color: blue;
    position: absolute;
    transform: translateX(-100%);
    transition: translateX 0.6s ease-out;
  }

  .menu-container.isOpen {
    transform: translateX(0);
  }

  .menu-toggle-button {
    position: absolute;
    right: -5.5vh;
    top: 0;
  }

</style>
