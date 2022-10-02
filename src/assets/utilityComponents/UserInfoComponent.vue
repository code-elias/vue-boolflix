<template>
  <article>
    <p>Hello</p>
    <h2>{{ username }}</h2>
  </article>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        username: String,
    }
}
</script>

<style>

</style>