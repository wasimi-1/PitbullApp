<script setup>
const cartItem = ref(1) //Liczba produktów w koszyku, wartość początkowa to 1 

</script>

<template>
    <nav class="navbar is-black">
        <div class="container is-flex is-align-items-center is-justify-content-space-between">
            <div class="navbar-left is-flex is-align-items-center">
                <a class="navbar-item">
                    <span>Nasze salony</span>
                </a>
            </div>
            <div class="navbar-center has-text-white has-text-weigth-bold">
                <span>KOLEKCJA WIOSNA/LATO 2025! <br> POKAŻ PRODUKTY!</span>
            </div>
            <div class="navbar-right is-flex is-align-items-center">
                <a class="navbar-item">
                    <span>Moje konto</span>
                </a>
                <a class="navbar-item">
                    <span>Lista życzeń
                        <span class="wishlist-count">0</span>
                    </span>
                </a>
                <a class="navbar-item cart-button has-text-white">
                    <span>Koszyk ({{cartItem}})</span>
                </a>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.navbar {
    padding: 0.5rem 1rem;
}
.navbar-left, .navbar-right {
    gap: 1rem;
}
.navbar-item{
    color:white;
}
.cart-button {
    background-color: #4CAF50;
    padding: 10px 15px;
    font-weight: bold;
}

</style>