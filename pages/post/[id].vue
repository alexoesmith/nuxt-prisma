<script setup>
const route = useRoute();

const { data: post } = await useAsyncData(route.params.id, () =>
  $fetch(`/api/posts/${route.params.id}`, {
    method: "GET",
  })
);
</script>

<template>
  <div>
    <h1>Post</h1>
    <h2>{{ post.title }}</h2>
    <div v-html="post.content"></div>
  </div>
</template>
