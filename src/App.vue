<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/navbar.vue";

onMounted(() => {
    console.log("App Running...");
});
</script>

<template>
    <navbar />
    <router-view />
</template>
