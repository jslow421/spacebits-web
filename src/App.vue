<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
