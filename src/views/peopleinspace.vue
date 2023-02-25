<template>
    <div>
        <p>People In Space</p>
        <p>Updated: {{ peopleModel.updatedTime }}</p>
        <ul>
            <li v-for="person in peopleModel.people" :key="person.name">
                <p>{{ person.name }}</p>
                <p>{{ person.craft }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, onUpdated, ref, Ref } from "vue";
import { PeopleInSpaceModel, PersonInSpace } from "../models/peopleModel";

const peeps: Ref<PersonInSpace[]> = ref([]);
const peopleModel: Ref<PeopleInSpaceModel> = ref({
    message: "",
    number: 0,
    people: [],
    updatedTime: "",
});

async function retrievePeople() {
    axios
        .get("https://api.spacebits.net/people", {
            headers: {
                "content-type": "application/json",
                "x-api-key": "",
            },
        })
        .then((resp) => {
            peopleModel.value = resp.data;
        });
}

onMounted(async () => {
    await retrievePeople();
});

onUpdated(() => {
    console.log("updated");
});
</script>

<style scoped></style>
