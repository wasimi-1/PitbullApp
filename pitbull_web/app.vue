<script setup>
const stateModal = ref(false);
const modalTitle = ref('');
const modalText = ref('');

const startModal = ({title = '', text = ''}) => {
    modalTitle.value = title;
    modalText.value = text;
    stateModal.value = true;
}
const stopModal = () => {
    stateModal.value = false;
}
</script>

<template>
  <div>
    <BarBlack @toogle-modal="startModal"/>
    <NavBar />
    <NuxtPage />
    <AppFooter />
    <Modal v-if="stateModal" @toogle-modal="stopModal" :title="modalTitle" :text="modalText"/>
  </div>
</template>
