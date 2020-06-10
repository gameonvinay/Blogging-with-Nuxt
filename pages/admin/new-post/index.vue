<template>
  <div class="form-container bg-white shadow-2xl">
    <section class="flex">
      <form class="real-form w-1/2" @submit.prevent="onSave">
        <h1 class="text-2xl text-center mt-10 mb-3">Create Post</h1>
        <div class="flex flex-col">
          <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
          <AppControlInput v-model="editedPost.title">Title</AppControlInput>
          <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
          <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
          <AppButton btn-style="save" type="submit">Save</AppButton>
          <AppButton type="button" btn-style="cancel" @click="onCancel">Cancel</AppButton>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: '',
      },
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style>
.form-container {
  width: 50vw;
  height: 85vh;
  box-sizing: border-box;
  display: block;
  margin: 2.5rem auto;
  border-radius: 2rem;
  background-color: white;
}

.real-form {
  margin: auto;
}

/* @media all and (max-width: 500px) {
  .form-container {
    min-width: 400px;
  }
} */
</style>
