<script setup>
const { data: posts } = await useAsyncData("posts", () => $fetch("/api/posts"));
</script>

<template>
  <div>
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts">
        <NuxtLink :to="`/post/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
