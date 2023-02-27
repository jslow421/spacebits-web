<script setup lang="ts">
import { onMounted } from "vue";
import navbar from "./components/navbar.vue";

onMounted(() => {});
</script>

<template>
	<navbar />
	<router-view />
</template>
