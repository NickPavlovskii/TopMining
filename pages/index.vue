<template>
  <main class="page">
    <!-- <WorkProcessSection @cta="onLeaveRequest" /> -->
    <TopMiningSection />
    <CryptoMarketSection />
  </main>
</template>

<script setup lang="ts">
  useHead({ title: 'Niklad' })

  function onLeaveRequest() {
    // TODO: открыть форму заявки
  }
</script>

<style scoped>
  .page {
    padding: 0;
  }
</style>
