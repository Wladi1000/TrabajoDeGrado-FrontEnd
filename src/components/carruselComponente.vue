<script setup>

  import { toRefs } from 'vue';

  const props = defineProps({
    imagen: String,
    nombre: String,
    reputacion: Number,
    estado: Boolean,
    precio: Number,
    descripcion: String,
    marca: String,
    envio: Boolean
  });

  const { 
    imagen, 
    nombre, 
    reputacion, 
    estado, 
    precio, 
    descripcion, 
    marca, 
    envio 
  } = toRefs(props);

</script>
<template>
  <div class="carrusel-componente">
    <img :src="imagen || ''" :alt="nombre + ' ' + marca">
    <div class="carrusel-componente__detalles">
      <h3 class="carrusel-componente__detalles--precio">{{ precio }}</h3>
      <p class="carrusel-componente__detalles--nombre">{{ nombre }}</p>
      <!-- <p class="carrusel-componente__detalles--descripcion">{{ descripcion }}</p> -->
      <!-- <p class="carrusel-componente__detalles--marca">{{ marca }}</p> -->
      <p class="carrusel-componente__detalles--reputacion">{{ reputacion }}</p>
    </div>
  </div>
</template>