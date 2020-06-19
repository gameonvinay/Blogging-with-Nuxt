<template>
  <div class="p-8 max-w-6xl items-center m-auto">
    <section class="pb-6 text-center border-b-2 border-gray-500">
      <button @click="$router.push('/admin/new-post')" class="btn-post">Create Post</button>
      <button @click="onLogOut" class="btn-post">Log out</button>
    </section>
    <section class="text-center pt-10">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    },
  },
}
</script>

<style>
.btn-post {
  padding: 0.4rem 6rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  color: #0198fa;
  box-shadow: 0 0 3px #0198fa;
  border: 2px solid #0198fa;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn-post:hover {
  border: 2px solid #0198fa;
  border-radius: 0.5rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 0.4rem 6rem;
  background-color: #0198fa;
  color: #f7f7f7;
}

.btn-post:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 152, 250, 0.5);
}

.btn-post:active {
  outline: none;
  box-shadow: none;
}
</style>
