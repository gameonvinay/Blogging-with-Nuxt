<template>
  <div class="form-container bg-white shadow-2xl">
    <section class="flex">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm.vue'

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>

<style>
.form-container {
  max-width: 600px;
  height: auto;
  box-sizing: border-box;
  display: block;
  margin: 2.5rem auto;
  padding-bottom: 2.5rem;
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
