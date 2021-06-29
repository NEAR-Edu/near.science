<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout';

export default {
  components: {
    MainLayout
  }
};
</script>
