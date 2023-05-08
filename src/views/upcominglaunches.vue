<template>
	<div class="container mx-auto">
		<p>Upcoming launches</p>
		<p>Coming soon!</p>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";
import { Configuration } from "../.configuration";
import { UpcomingLaunchModel } from "../models/launchModel";

const isLoading = ref(false);
const launchesModel = ref({}) as Ref<UpcomingLaunchModel>;

async function retrieveUpcomingLaunches() {
	try {
		const resp = await axios.get(Configuration.UPCOMING_LAUNCHES_URL, {
			headers: {
				"content-type": "application/json",
				"x-api-key": Configuration.API_KEY,
			},
		});
	} catch (e) {
		console.warn(e);
		isLoading.value = false;
	}
}
</script>
