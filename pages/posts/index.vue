<template>
  <div class="flex items-center justify-center mt-10">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style></style>
