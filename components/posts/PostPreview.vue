<template>
  <div class="justify-center items-center text-center mx-auto my-4">
    <nuxt-link :to="postLink">
      <article>
        <div>
          <img class="rounded-md shadow-xl mx-20 h-64 w-auto inline-block" :src="thumbnail" />
        </div>
        <div>
          <h1 class="my-4 text-2xl">{{ title }}</h1>
          <p>{{ previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    },
  },
}
</script>

<style></style>
