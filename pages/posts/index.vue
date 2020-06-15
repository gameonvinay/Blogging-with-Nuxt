<template>
  <div class="flex items-center justify-center mt-10">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style></style>
