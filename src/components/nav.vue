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
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav d-flex justify-content-center align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buscar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Carrito</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Perfil</a>
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