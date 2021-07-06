<template>
  <div class="sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <h1 class="my-14 text-gray-400 tracking-tight font-extrabold text-4xl lg:mt-6">Submit a Request</h1>
      <div v-if="loading">Loading request form ...</div>
      <div key="14ada0f9-0042-516b-3b3d-23f5d1638ec0">
        <div data-canny />
      </div>
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

    // prettier-ignore
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: '14ada0f9-0042-516b-3b3d-23f5d1638ec0',
      basePath: '/requests'
    });
  }
};
</script>
