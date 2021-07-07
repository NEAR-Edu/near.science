<template>
  <div class="sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <h1 class="my-14 text-gray-400 tracking-tight font-extrabold text-4xl lg:mt-6">Requests Dashboard</h1>
      <div v-if="loading">Loading status dashboard ...</div>
      <h1 class="my-14 text-gray-400 tracking-tight text-3xl font-extralight lg:mt-12">Status</h1>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrba8wkdSAerYiYt?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      <div class="border-t border-gray-100"></div>
      <h1 class="my-14 text-gray-400 tracking-tight text-3xl font-extralight lg:mt-12">Schedule</h1>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrF8lJIglyXaOsZn?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => (this.loading = false), 1000);
  }
};
</script>
