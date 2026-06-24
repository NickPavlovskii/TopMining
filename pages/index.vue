<template>
  <main class="page">
    <!-- <WorkProcessSection @cta="onLeaveRequest" /> -->
    <TopMiningSection />
    <CryptoMarketSection />
    <MiningCalculatorPromo />
  </main>
</template>

<script setup lang="ts">
  import CryptoMarketSection from '~/components/crypto/CryptoMarketSection.vue'
  import MiningCalculatorPromo from '~/components/top-mining/MiningCalculatorPromo.vue'
  import TopMiningSection from '~/components/top-mining/TopMiningSection.vue'

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
