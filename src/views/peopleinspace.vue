<template>
	<div>
		<p>People In Space</p>
		<p>Updated: {{ peopleModel.updatedTime }}</p>
		<div
			v-for="person in peopleModel.people"
			:key="person.name"
			class="bg-accent-100 card-compact card w-96 shadow-xl"
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
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, onUpdated, ref, Ref } from "vue";
import { PeopleInSpaceModel } from "../models/peopleModel";
import { Configuration } from "../.configuration";

const peopleModel: Ref<PeopleInSpaceModel> = ref({
	message: "",
	number: 0,
	people: [],
	updatedTime: "",
});

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
	await retrievePeople();
});

onUpdated(() => {});
</script>

<style scoped lang="scss">
.people-list {
	list-style: none;
}
</style>
