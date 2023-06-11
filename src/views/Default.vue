<script setup>
import { useRouter } from "vue-router";


const router = useRouter();

const moverLogin = () => {
  router.push("/Inicio");
};

</script>
<template>
  <div class="default">
    <h1>Bazar de la Alianza</h1>
    <h2>Ingresa a tu cuenta</h2>
    <ul class="default__caracteristicas">
      <li>Ver tu lista de favoritos</li>
      <li>Busca y reordena compras anteriores</li>
      <li>Ve el estado de tus compras</li>
    </ul>
    <div class="default__acciones">
      <button class="login" @click="moverLogin()">¿Ya eres cliente? Iniciar sesion</button>
      <button>¿Nuevo en Alianza? Crea una cuenta</button>
      <button>Omitir inicio de sesion</button>
    </div>
  </div>
</template>