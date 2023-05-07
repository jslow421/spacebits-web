<template>
	<span v-bind:class="{ hidden: !isLoading }">
		<spinner />
	</span>
	<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-5">
		<li
			v-for="person in peopleModel.people"
			:key="person.name"
			class="divide-gray-200 col-span-1 divide-y rounded-lg bg-white shadow"
		>
			<div class="flex w-full items-center justify-between space-x-6 p-6 text-black">
				<div class="flex-1 truncate">
					<div class="flex items-center space-x-3">
						<h3 class="text-gray-900 truncate text-sm font-medium">{{ person.name }}</h3>
						<span
							class="bg-green-50 text-green-700 ring-green-600/20 inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
							>{{ person.craft }}</span
						>
					</div>
				</div>
				<img
					class="bg-gray-300 h-10 w-10 flex-shrink-0 rounded-full"
					:src="person.imgUrl"
					@error="handleImageError"
					alt=""
				/>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";
import { PeopleInSpaceModel } from "../models/peopleModel";
import { Configuration } from "../.configuration";
import spinner from "../components/spinner.vue";

const isLoading = ref(false);
const peopleModel = ref({
	message: "",
	number: 0,
	people: [],
	update_date: "",
}) as Ref<PeopleInSpaceModel>;

async function retrievePeople() {
	try {
		const resp = await axios.get(Configuration.PEOPLE_IN_SPACE_URL, {
			headers: {
				"content-type": "application/json",
			},
		});

		peopleModel.value = resp.data;
		isLoading.value = false;
	} catch (e) {
		console.warn(e);
		isLoading.value = false;
	}
}

onMounted(async () => {
	isLoading.value = true;

	try {
		await retrievePeople();
	} catch (e) {
		console.warn(e);
		isLoading.value = false;
	}
});

async function handleImageError(event: Event) {
	const img = event.target as HTMLImageElement;
	img.src = "/placeholder.jpg";
}
</script>
