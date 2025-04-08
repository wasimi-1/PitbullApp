<script setup>
const cartItem = ref(1) //Liczba produktów w koszyku, wartość początkowa to 1 
const emit = defineEmits(['toogle-modal']);

const handleClick = () => {
  emit('toogle-modal', {
    title: 'Modal Title',
    text: 'This is the content of the modal.'
  })
}
</script>

<template>
    <nav class="navbar is-black px-1 py-1">

      <div class="navbar-brand">
        <NuxtLink to="/salony" class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span>Nasze salony</span>
          </span>
        </NuxtLink>
      </div>
  
      <div class="navbar-menu is-active">
        <div class="navbar-start"></div>
  
        <NuxtLink to="/produkty2025" class="navbar-item">
        <div class="navbar-center">
          <p class="title has-text-white has-text-centered has-text-weigth-bold">
            KOLEKCJA WIOSNA/LATO 2025 <br />
            POKAŻ PRODUKTY!
          </p>
        </div>
      </NuxtLink>
  
        <div class="navbar-end">
          <NuxtLink to="/konto" class="navbar-item">
            <span class="icon-text">
              <span class="icon">
                <i class="far fa-user"></i>
              </span>
              <span>Moje konto</span>
            </span>
          </NuxtLink>
  
          
          <NuxtLink to="/lista-zyczen" class="navbar-item wishlist">
            <span class="icon-text">
              <span class="icon wishlist-icon">
                <i class="far fa-heart"></i>
                <span class="wishlist-badge">0</span>
              </span>
              <span>Lista życzeń</span>
            </span>
          </NuxtLink>
  
          
          <NuxtLink to="/koszyk" class="navbar-item custom-cart-button">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>Koszyk ({{ cartItem }})</span>
            </span>
          </NuxtLink>
          <button class="navbar-item custom-cart-button" @click="handleClick">
            <span>Open modal</span>
        </button>
        </div>
    </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar-center {
    flex-grow: 1;
    text-align: center;
  }
  
  
  .custom-cart-button {
    background-color: #48c774 !important; 
    border-radius: 6px !important; 
    padding: 10px 16px;
    font-weight: bold;
    color: white !important;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in-out;
  }
  
  
  .custom-cart-button:hover {
    background-color: #36a765 !important; 
  }
  
  
  .wishlist {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .wishlist-icon {
    position: relative;
    display: inline-block;
  }
  
  .wishlist-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: white; 
    color: black; 
    font-size: 12px;
    font-weight: bold;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black; 
  }
  </style>
  