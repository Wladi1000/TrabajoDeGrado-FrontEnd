<script setup>

  import { toRefs } from 'vue';

  const props = defineProps({
    imagen: String,
    nombre: String,
    reputacion: Number,
    estado: Boolean,
    precio: Number,
    descipcion: String,
    marca: String,
    envio: Boolean
  });

  const { 
    imagen, 
    nombre, 
    reputacion, 
    estado, 
    precio, 
    descipcion, 
    marca, 
    envio 
  } = toRefs(props);

</script>
<template>
  <div class="carrusel-componente">

  </div>
</template>