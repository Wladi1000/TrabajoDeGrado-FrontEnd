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
  <div class="card carrusel-componente" style="width: 14rem;">
    <img :src="imagen || ''" :alt="nombre + ' ' + marca">
    <div class="card-body carrusel-componente__detalles">
      <h3 class="card-title arrusel-componente__detalles--precio">{{ precio }}</h3>
      <p class="card-text carrusel-componente__detalles--nombre">{{ nombre }}</p>
      <!-- <p class="carrusel-componente__detalles--descripcion">{{ descripcion }}</p> -->
      <!-- <p class="carrusel-componente__detalles--marca">{{ marca }}</p> -->
      <p class="card-text carrusel-componente__detalles--reputacion">{{ reputacion }}♦♦♦♦♦ </p>
    </div>
  </div>
</template>