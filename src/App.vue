<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import Nav from "./components/nav.vue";
let navShow = ref(false);
</script>

<template>
  <RouterView />
</template>