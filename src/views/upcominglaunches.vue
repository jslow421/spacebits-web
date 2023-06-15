<template>
	<span v-bind:class="{ hidden: !isLoading }">
		<spinner />
	</span>
	<!-- <div class="container mx-auto" v-bind:class="{ hidden: isLoading }">
		<div v-for="launch in launchesModel.launches?.result" class="mb-2">
			<div>Date: {{ launch.date_str }}</div>
			<div>Rocket: {{ launch.vehicle.name }}</div>
		</div>
	</div> -->
	<ul role="list" class="divide-y divide-gray-100 md:px-10 sm:px-0">
		<li v-for="launch in launchesModel.launches?.result" :key="launch.id" class="flex justify-between gap-x-6 py-5">
			<div class="flex gap-x-4">
				<img
					class="h-12 w-12 flex-none rounded-full bg-gray-50"
					:src="getImageForType(getRocketType(launch.vehicle.name))"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">{{ launch.name }}</p>
					<p class="mt-1 truncate text-xs leading-5 text-gray-500">
						{{ launch.vehicle.name }} - {{ launch.provider.name }}
					</p>
					<p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ launch.launch_description }}</p>
					<p v-if="launch.mission_description" class="mt-1 truncate text-xs leading-5 text-gray-500">
						{{ launch.mission_description }}
					</p>
				</div>
			</div>
			<div class="sm:flex sm:flex-col sm:items-end">
				<p class="text-sm leading-6 text-gray-900">{{ launch.date_str }}</p>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";
import { Configuration } from "../.configuration";
import { UpcomingLaunches } from "../models/upcomingLaunchModel";
import spinner from "../components/spinner.vue";
import { getImageForType, getRocketType } from "../models/rockets";

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
