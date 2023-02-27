<template>
	<div class="container mx-auto">
		<p>People In Space</p>
		<p>Updated: {{ peopleModel.updatedTime }}</p>
		<button class="loading btn" v-bind:class="{ hidden: !isLoading }">loading</button>
		<div class="results grid grid-cols-2 gap-2">
			<div
				v-for="person in peopleModel.people"
				:key="person.name"
				class="card-compact card w-96 bg-gray-100 shadow-xl"
				v-bind:class="{ hidden: isLoading }"
			>
				<div class="card-body">
					<h2 class="card-title">{{ person.name }}</h2>
					<p>{{ person.craft }}</p>
					<div class="card-actions justify-end">
						<button class="btn-primary btn">Details</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, onUpdated, ref, Ref } from "vue";
import { PeopleInSpaceModel } from "../models/peopleModel";
import { Configuration } from "../.configuration";

const isLoading = ref(false);
const peopleModel = ref({
	message: "",
	number: 0,
	people: [],
	updatedTime: "",
}) as Ref<PeopleInSpaceModel>;

async function retrievePeople() {
	axios
		.get(Configuration.PEOPLE_IN_SPACE_URL, {
			headers: {
				"content-type": "application/json",
				"x-api-key": Configuration.API_KEY,
			},
		})
		.then((resp) => {
			peopleModel.value = resp.data;
		});
}

onMounted(async () => {
	isLoading.value = true;

	try {
		await retrievePeople();
	} catch (e) {
		console.warn(e);
	} finally {
		isLoading.value = false;
	}
});
</script>
