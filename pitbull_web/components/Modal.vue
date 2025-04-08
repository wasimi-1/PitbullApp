<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'v-if vs v=show'
  },
  text: {
    type: String,
    default: 'Treść modala'
  }
});

const emit = defineEmits(['toogle-modal']);
</script>

<template>
    <div class ='modal is-active'>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" aria-label="close" @click="emit('toogle-modal')"></button>
        </header>
        <section class="modal-card-body">
          <slot>
            <p>{{text}}</p>
          </slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="emit('toogle-modal')">OK</button>
          <button class="button" @click="emit('toogle-modal')">Anuluj</button>
        </footer>
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal-card {
    max-width: 500px;
  }
  </style>
  