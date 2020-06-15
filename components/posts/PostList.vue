<template>
  <section class="flex flex-row flex-wrap">
    <PostPreview v-for="post in posts" :key="post.id" :id="post.id" :is-admin="isAdmin" :thumbnail="post.thumbnail" :title="post.title" :previewText="post.previewText"></PostPreview>
  </section>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'
export default {
  name: 'PostList',
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
