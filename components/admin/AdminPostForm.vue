<template>
  <form class="real-form w-2/3" @submit.prevent="onSave">
    <h1 class="text-2xl text-center mt-10 mb-3">Create Post</h1>
    <div class="flex flex-col">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
      <AppButton btn-style="save" type="submit">Save</AppButton>
      <AppButton type="button" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style scoped>
.real-form {
  margin: auto;
}
</style>
