<script setup>
  import { toRefs } from 'vue';
  import Componente from './carruselComponente.vue';
  const props = defineProps({
    registros: Array
  });

  const { registros } = toRefs(props);

</script>
<template>
  <div class="carrusel">
    <carruselComponente v-for="e in registros" :key="e.id"/>
  </div>
</template>