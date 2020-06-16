<template>
  <div>
    <section>
      <h1>{{ loadedPost.title }}</h1>
      <div>
        <div>Last updated on {{ loadedPost.updateDate }} </div>
        <br />
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section>
      <p>Let me know what you think about the post, send me a mail to <a href="mailto:feedback@gameondevs.com">feedback@gameondevs.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get('https://nuxt-blog-884b3.firebaseio.com/posts/' + context.params.id + '.json')
      .then((data) => {
        return {
          loadedPost: data,
        }
      })
      .catch((e) => context.error(e))
  },
}
</script>

<style></style>
