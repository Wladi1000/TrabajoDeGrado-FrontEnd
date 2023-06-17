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
      <div class="collapse navbar-collapse" id="navbar-toggler">
        <a class="navbar-brand" href="#">Alianza Shop</a>
        <ul class="navbar-nav d-flex justify-content-center align-items-center">
          <li class="nav-item">
            <router-link
              to="/Inicio"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/Buscar"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Buscar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/Perfil"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Perfil</router-link
            >
          </li>
          <li class="nav-item">
            <form class="form-inline my-2 my-lg-0">
              <a
                class="btn btn-outline-success my-2 my-sm-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                >Get Start</a
              >
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>