<script setup>
import Nav from '../components/nav.vue';
import carruselComponente from '../components/carruselComponente.vue';
</script>
<template>
  <div class="inicio">
    <h1>Esto es un inicio</h1>
    <carrusel-componente 
      imagen="https://picsum.photos/200"
      nombre="wladi"
      :reputacion="5"
      :estado="true"
      :precio="500"
      descripcion="Una suave genialidad"
      marca="Wladi y asociados"
      :envio="true"
    />
    <button class="btn btn-secondary">Holaaaa</button>
  </div>
</template>