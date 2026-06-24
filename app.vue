<script setup lang="ts">
  import TheDefault from './layouts/TheDefault.vue'

  useHead({
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/small-logo.ico' }],
  })
</script>

<template>
  <UApp>
    <TheDefault />
  </UApp>
</template>
