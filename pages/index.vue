<template>
  <div class="justify-center items-center text-center mx-auto bg-gray-300">
    <div class="justify-center items-center">
      <section>
        <h1 class="text-3xl pt-10 mb-4">Get the latest tech news!</h1>
      </section>
      <PostList :posts="loadedPosts" />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  name: 'Index',
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
