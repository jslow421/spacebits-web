<template>
	<span v-bind:class="{ hidden: !isLoading }">
		<spinner />
	</span>
	<div class="container mx-auto" v-bind:class="{ hidden: isLoading }">
		<div v-for="launch in launchesModel.launches?.result">
			<span>{{ launch.launch_description }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";
import { Configuration } from "../.configuration";
import { UpcomingLaunches } from "../models/upcomingLaunchModel";
import spinner from "../components/spinner.vue";

const isLoading = ref(false);
const launchesModel = ref({}) as Ref<UpcomingLaunches>;

async function retrieveUpcomingLaunches() {
	try {
		const resp = await axios.get(Configuration.UPCOMING_LAUNCHES_URL, {
			headers: {
				"content-type": "application/json",
				"x-api-key": Configuration.API_KEY,
			},
		});

		console.log(resp);
		launchesModel.value = resp.data;
		isLoading.value = false;
	} catch (e) {
		console.warn(e);
		isLoading.value = false;
	} finally {
		isLoading.value = false;
	}
}

onMounted(async () => {
	isLoading.value = true;
	await retrieveUpcomingLaunches();
});
</script>
