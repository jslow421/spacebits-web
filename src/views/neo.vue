<template>
	<span v-bind:class="{ hidden: !isLoading }">
		<spinner />
	</span>
	<div class="container mx-auto bg-white px-4 sm:px-6 lg:px-8" v-bind:class="{ hidden: isLoading }">
		<div class="-mx-4 mt-8 sm:-mx-0">
			<table class="divide-gray-300 min-w-full divide-y">
				<caption>
					{{
						neoModel.data?.element_count
					}}
					Near Earth objects for today
				</caption>
				<thead>
					<tr>
						<th scope="col" class="text-gray-900 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
							Name
						</th>
						<th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">
							ID
						</th>
						<th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
							Potentially Hazardous?
						</th>
						<th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold">
							Min Est Diameter (Miles)
						</th>
					</tr>
				</thead>
				<tbody class="divide-gray-200 divide-y bg-white">
					<tr v-for="neo in neoModel.data?.near_earth_objects" :key="neo.id">
						<td class="text-gray-500 px-3 py-4 text-sm lg:table-cell">
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
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 
										0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</td>
						<td class="text-gray-500 px-3 py-4 text-sm lg:table-cell">{{ neo.id }}</td>
						<td class="text-gray-500 px-3 py-4 text-sm sm:table-cell">
							{{ neo.is_potentially_hazardous_asteroid }}
						</td>
						<td class="text-gray-500 px-3 py-4 text-sm">
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
import spinner from "../components/spinner.vue";

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
