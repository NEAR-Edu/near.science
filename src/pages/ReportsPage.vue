<template>
  <div class="sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl px-8">
      <h1 class="my-14 text-gray-400 tracking-tight font-extrabold text-4xl lg:mt-6">Read a Report</h1>
      <div v-if="loading">Loading reports ...</div>
      <div v-else class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="article in articles" :key="article.guid" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <a :href="article.link" target="new">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="article.image" alt="" />
            </div>
          </a>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="pb-4">
                <span v-for="category in article.categories" :key="category" :class="[colorize(category), 'inline-flex items-center mx-1 px-2 rounded text-xs']">
                  {{ category }}
                </span>
              </div>
              <a :href="article.link" class="block mt-2" target="new">
                <p class="text-3xl font-extralight text-gray-900">
                  {{ article.title }}
                </p>
                <p class="mt-3 text-base text-gray-500" v-html="article.content"></p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <span class="sr-only">{{ article.creator }}</span>
                <img class="h-10 w-10 rounded-full" :src="require(`@/assets/${article.creator.replaceAll(' ', '')}.png`)" alt="" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {{ article.creator }}
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="article.isoDate">
                    {{ formatDate(article.pubDate) }}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, onMounted } from 'vue';
import { useFetch } from 'vue-composable';
import { format } from 'date-fns';

export default {
  setup() {
    const url = 'https://v1.nocodeapi.com/near/medium/HjwOoXjpnetZafNb';

    const { json: articles, loading, exec, error, status } = useFetch();

    onMounted(exec.bind(null, url));

    watch(status, code => {
      if (code === 200) {
        articles.value = articles.value.filter(onlyNearArticles).map(extractFeaturedImage);
      }
    });

    function onlyNearArticles(a) {
      const regex = /near|blockchain|dapp/gi;
      const inSnippet = regex.test(a.contentSnippet);
      const inTitle = regex.test(a.title);
      return inSnippet || inTitle;
    }

    function extractFeaturedImage(a) {
      return {
        ...a,
        image: a.content.match(/<img[^>]+src="([^">]+)"/)[1]
      };
    }

    // prettier-ignore
    function colorize(category) {
      const color = {
        'blockchain': 'bg-red-100 text-red-800',
        'data-science': 'bg-pink-100 text-pink-800',
        'data-visualization': 'bg-yellow-100 text-yellow-800',
        'exploratory-data-analysis': 'bg-blue-100 text-blue-800',
        'near-protocol': 'bg-green-100 text-green-800',
        'postgres': 'bg-indigo-100 text-indigo-800',
        'sql': 'bg-purple-100 text-purple-800',
      }[category];

      return color ? color : 'bg-gray-100 text-gray-800'
    }

    function formatDate(date) {
      return format(new Date(date), 'EEEE MMM do, yyyy');
    }

    function fetchImage(name) {
      const imgUrl = `@/assets/${name.replace(' ', '')}.png`;
      console.log(imgUrl);
      return imgUrl;
    }

    return {
      colorize,
      articles,
      loading,
      error,
      formatDate,
      fetchImage
    };
  }
};
</script>

<style>
p.medium-feed-image {
  display: none;
}
p.medium-feed-link {
  display: none;
}
</style>
