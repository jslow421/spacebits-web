<template>
	<div class="container mx-auto bg-white px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-base font-semibold leading-6 text-gray-900">
					Today's {{ neoModel.data?.element_count }} Near Earth Objects
				</h1>
				<p class="mt-2 text-sm text-gray-700">A list of Near Earth Objects for today.</p>
			</div>
		</div>
		<div class="-mx-4 mt-8 sm:-mx-0">
			<table class="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
							Name
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
							ID
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
							Potentially Hazardous?
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Min Est Diameter (Miles)
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					<tr v-for="neo in neoModel.data?.near_earth_objects" :key="neo.id">
						<td class="px-3 py-4 text-sm text-gray-500 lg:table-cell">
							<a :href="neo.nasa_jpl_url" target="_blank">
								{{ neo.name }}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="inline h-4 w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</td>
						<td class="px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ neo.id }}</td>
						<td class="px-3 py-4 text-sm text-gray-500 sm:table-cell">
							{{ neo.is_potentially_hazardous_asteroid }}
						</td>
						<td class="px-3 py-4 text-sm text-gray-500">
							{{ neo.estimated_diameter?.miles?.estimated_diameter_min }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";
import { Configuration } from "../.configuration";
import { NearEarthObjects } from "../models/neoModel";

const isLoading = ref(false);
const neoModel = ref({
	data: {},
	updated_date_time: "",
}) as Ref<NearEarthObjects>;

async function retrieveNeo() {
	axios
		.get(Configuration.NEO_URL, {
			headers: {
				"content-type": "application/json",
				"x-api-key": Configuration.API_KEY,
			},
		})
		.then((resp) => {
			neoModel.value = resp.data;
			isLoading.value = false;
		});
}

onMounted(async () => {
	isLoading.value = true;

	try {
		await retrieveNeo();
	} catch (e) {
		console.warn(e);
		isLoading.value = false;
	}
});
</script>
