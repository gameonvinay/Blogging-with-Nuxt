<template>
  <div class="form-container bg-white shadow-2xl">
    <section class="flex">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return context.app.$axios
      .$get('https://nuxt-blog-884b3.firebaseio.com/posts/' + context.params.postId + '.json')
      .then((data) => {
        return {
          loadedPost: { ...data, id: context.params.postId },
        }
      })
      .catch((e) => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => this.$router.push('/admin'))
    },
  },
}
</script>

<style>
.form-container {
  width: 50vw;
  height: auto;
  box-sizing: border-box;
  display: block;
  margin: 2.5rem auto;
  border-radius: 2rem;
  background-color: white;
  padding-bottom: 2.5rem;
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
