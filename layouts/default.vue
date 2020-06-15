<template>
  <div class="antialiased">
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '../components/navigation/TheHeader'
import TheSideNav from '../components/navigation/TheSideNav'

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheSideNav,
  },
  data() {
    return {
      displaySideNav: false,
    }
  },
}
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 100%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(245, 245, 245);
}
</style>
