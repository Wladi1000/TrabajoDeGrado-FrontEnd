<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- <nav class="nav">
    <RouterLink to="/Inicio">Inicio</RouterLink>
    <RouterLink to="/Buscar">Buscar</RouterLink>
    <RouterLink to="/Carrito">Carrito</RouterLink>
    <RouterLink to="/perfil">perfil</RouterLink>
  </nav> -->
  <nav class="navbar navbar-expand-md navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-toggler">
      <a class="navbar-brand" href="#">Alianza Shop</a>
      <ul class="navbar-nav d-flex justify-content-center align-items-center">
        <li class="nav-item">
          <router-link to="/Inicio" class="nav-link active" aria-current="page" href="#">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Buscar" class="nav-link active" aria-current="page" href="#">Buscar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Perfil" class="nav-link active" aria-current="page" href="#">Perfil</router-link>
        </li>
        
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>