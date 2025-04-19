<script setup lang="ts">
const { data } = await useFetch('/api/hello');
</script>

<template>
  <h1>Index page {{ data.message }}</h1>
  <NuxtLink to="/blog/hello-world"> Go to blog post </NuxtLink>
</template>
