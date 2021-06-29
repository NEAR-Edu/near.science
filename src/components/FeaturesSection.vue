<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-base font-semibold tracking-wider text-near-royal uppercase">NEAR Protocol Data Science is Here</h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Tap into the data behind NEAR Protocol</p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Everyone is building on NEAR. Everyone is using NEAR. Take advantage of on-chain data analytics today to get the edge your project or business needs.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.benefits }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CloudUploadIcon, CogIcon, LockClosedIcon, RefreshIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/vue/outline';

const features = [
  {
    name: 'Submit Requests',
    benefits: 'Ask a data scientist to help you analyze on-chain data using state-of-the-art data science tools and techniques.',
    icon: CloudUploadIcon
  },
  {
    name: 'Communicate Securely',
    benefits: 'Work without worrying about your project privacy with our team of professional data scientists with years of experience.',
    icon: LockClosedIcon
  },
  {
    name: 'Fast Turnaround',
    benefits: 'Build support for your requests within the community to accelerate development on your high priority projects.',
    icon: RefreshIcon
  },
  {
    name: 'Certified Scientists',
    benefits: 'Each of our data scientists comes with a wealth of experience and a strong track record of delivering high quality data solutions.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Custom Development',
    benefits: 'Go the extra mile with custom project development to enhance your project or product using up-to-the-minute insights from the public blockchain.',
    icon: CogIcon
  },
  {
    name: 'Storage Included',
    benefits: 'We handle all storage costs for you on-chain and off so you can focus on the interest parts: the questions and answers you need to succeed.',
    icon: ServerIcon
  }
];

export default {
  setup() {
    return {
      features
    };
  }
};
</script>
