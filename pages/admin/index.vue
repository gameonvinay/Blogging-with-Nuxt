<template>
  <div class="p-8">
    <section class="pb-6 text-center border-b-2 border-gray-500">
      <button @click="$router.push('/admin/new-post')" class="border border-gray-600 px-4 py-2 hover:">Create Post</button>
    </section>
    <section class="text-center pt-10">
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  components: {
    PostList,
  },
}
</script>

<style></style>
