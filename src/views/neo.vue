<template>
	<div class="container mx-auto">
		<div>Near Earth Objects</div>
		<div>Coming soon!</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { Configuration } from "../.configuration";

const isLoading = ref(false);
async function retrieveNeo() {}
</script>
