<script setup>
import { ref } from 'vue';

useHead({
  title: 'Nuxt 3 PWA',
  link: [
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ],
  meta: [
    { name: 'theme-color', content: '#4DBA87' }
  ]
})

const stateModal = ref(false);
const startModal = () => {
    stateModal.value = true
};

const stopModal = () => {
    stateModal.value = false
};
</script>
<template>
    <BarBlack @toogle-modal="startModal"/>
    <NavBar />
    <NuxtPage />
    <AppFooter />
    <Modal v-if="stateModal" @toogle-modal="stopModal" :title="modalTitle" :text="modalText"/>
</template>
<style scoped>
</style>