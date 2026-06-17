<template>
  <div class="layout">
    <NuxtPage />
  </div>
</template>

<style scoped>
  .layout {
    min-height: 100vh;
    background: var(--bg);
  }

  @media (max-width: 560px) {
    .layout {
      background: #ffffff;
    }
  }
</style>
