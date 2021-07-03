<template>
  <div class="sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl px-8">
      <h1 class="my-14 text-gray-400 tracking-tight font-extrabold text-4xl lg:mt-6">About this Project</h1>
      <div class="lg:mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base text-near-royal font-semibold tracking-wide uppercase">the beginning</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Winston Robson</h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="lg:ml-24">
                <img class="rounded-lg shadow-lg object-cover object-center" src="@/assets/WinstonRobson-front.png" width="250" />
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="space-y-2 prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>Winston is a business- minded data scientist with a love for truth and understandable answers.</p>
            <p>His work experience ranges from implementing bleeding edge data lake solutions to the development and instruction of intro to Excel curriculum.</p>
            <p>Airbnb hosts have described Winston as "amazing as a guest could be! He is friendly, respectful, appreciative, open minded and clean! I would have him back at any time!"</p>
          </div>
        </div>
      </div>
      <div class="lg:mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none mt-12">
        <div>
          <h2 class="text-base text-near-royal font-semibold tracking-wide uppercase">the middle</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Enter NEAR.science</h3>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
        <div class="mt-5 space-y-2 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          <p>This website is an experiment in data science as a service.</p>
          <p>The question we are trying to answer is whether people in the community are interested in asking Winston to help them make sense of on-chain data.</p>
          <p>Take a look at the <router-link to="/requests" class="text-near-royal">Requests</router-link> page to upvote existing requests to help Winston prioritize his time.</p>
          <p>You can also submit a new request that might capture his imagination as well as the upvotes of other readers on this site.</p>
        </div>
      </div>
      <div class="lg:mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none mt-12">
        <div>
          <h2 class="text-base text-near-royal font-semibold tracking-wide uppercase">the end?</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What's your science?</h3>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
        <div class="mt-5 space-y-2 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          <p>Are you interested in contributing to <strong>NEAR.science</strong>?</p>
          <p>If so, please register by clicking the button below and sharing your interests.</p>
          <p>We're always looking for new contributors. Besides, Winston would like some company.</p>
        </div>
      </div>
      <button @click="openForm" type="button" class="my-12 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-near-royal hover:bg-near-royal-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-near-royal-light uppercase">register as a contributor to NEAR.science</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openForm() {
      window.open('https://near-edu.typeform.com/to/dlmy8Ngc');
    }
  }
};
</script>
