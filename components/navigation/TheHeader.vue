<template>
  <div class="h-16">
    <header class="w-full fixed h-16 flex justify-around bg-gray-800 items-center px-6 box-border z-10">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="text-2xl text-gray-300 px-4">
        <nuxt-link to="/">TECH BLOG</nuxt-link>
      </div>
      <div class="flex-1"></div>
      <div class="hidden md:block">
        <ul class="p-0 m-0 flex">
          <li class="mx-6 text-gray-300 hover:text-white nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="mx-6 text-gray-300 hover:text-white nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="mx-6 text-gray-300 hover:text-white nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
}
</script>

<style scoped>
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: yellowgreen;
}
</style>
