<template>
  <div class="h-full w-full">
    <div v-if="show" class="h-full w-full fixed top-0 left-0 bg-black bg-opacity-75 z-20" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="h-full w-64 fixed p-6 bg-white top-0 left-0 z-30 box-border">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSideNav',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: yellowgreen;
}
</style>
