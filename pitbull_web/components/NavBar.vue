<script setup>
const searchQuery = ref(''); // Zmienna do przechowywania zapytania wyszukiwania
</script>

<template>
     <nav class="navbar">
        <div class="container is-flex is-align-items-center is-justify-content-space-between">
            <div class="navbar-logo">
                <span class="logo-text">LOGO</span>
            </div>
            <div class="navbar-menu is-flex is-align-items-center">
                <a class="navbar-item">SALE UP TO -60%!</a>
                <NuxtLink to="/about" class="navbar-item">PRODUKTY (About)</NuxtLink>
                <a class="navbar-item">MĘSKIE</a>
                <a class="navbar-item">DAMSKIE</a>
                <a class="navbar-item">DZIECIĘCE</a>
                <a class="navbar-item">AKCESORIA</a>
                <a class="navbar-item">PROMOCJE</a>
            </div>
            <div class="navbar-search">
                <input v-model="searchQuery" type="text" placeholder="Szukaj" class="search-input" />
                <button class="search-button search-icon">
                        <i class="fas fa-search"></i>
                </button>
            </div>

            <div>
  </div>
        </div>
    </nav>

</template>
<style scoped>

.logo-text {
  font-size: 24px; 
  color: black;
}
.navbar {
    background-color: white; 
    color: black; 
}

.navbar-item {
    color: black; 
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%; 
    padding: 8px 12px;
    font-weight: bold;
}

.navbar-search {
    display: flex;
    align-items: center;
}

.search-input {
    width: 220px;
    height: 38px;
    padding: 8px 35px 8px 12px; 
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 0; 
    background-color: white;
    color: black;
}

.search-icon {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: #888;
}


.search-button {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
}

.search-button:hover {
    color: #888; 
}

.navbar-item:hover {
    color: #888; 
    outline: none; 
    background-color: transparent !important; 
    border-bottom: 2px solid black;
}
.navbar-item:focus {
    color: #888; 
    outline: none; 
    background-color: transparent !important; 
    border-bottom: 2px solid black;
}

</style>