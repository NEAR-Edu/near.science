<template>
  <div class="sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <h1 class="my-14 text-gray-400 tracking-tight font-extrabold text-4xl lg:mt-6">Submit a Request</h1>
      <div v-if="loading">Loading request form ...</div>
      <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrCril7XqJoHcTLm?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="1475" style="background: transparent; border: 1px solid #ccc;"></iframe>
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
