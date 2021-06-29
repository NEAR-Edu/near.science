<template>
  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <router-link to="/requests" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
              <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-near-royal rounded-full">Ask a <span class="hidden lg:inline">Data</span> Scientist</span>
              <span class="ml-4 text-sm">We're accepting requests!</span>
              <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </router-link>
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
              <span class="block">NEAR.science</span>
              <span class="block text-near-royal-medium">ask a data scientist</span>
            </h1>
            <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">The NEAR community is growing fast and we have lots of questions about what's happening on-chain. Maybe you do too.</p>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FeaturesSection />
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid';
import FeaturesSection from '@/components/FeaturesSection';

export default {
  components: {
    ChevronRightIcon,
    FeaturesSection
  }
};
</script>
