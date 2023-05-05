<template>
	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-gray-900 text-4xl font-bold tracking-tight sm:text-6xl">SpaceBits</h1>
				<p class="text-gray-600 mt-6 text-lg leading-8">This is a work in progress. Soon to come features:</p>
				<ul class="">
					<li>Upcoming launches</li>
					<li>Photo of the day</li>
					<li>And hopefully more!</li>
				</ul>
				<p class="text-gray-600 mt-6 text-lg leading-8">Features currently working:</p>
				<ul class="">
					<li>People in Space</li>
					<li>Daily near earth objects</li>
				</ul>
				<p class="text-gray-600 mt-6 text-lg leading-8">
					Note - "currently working" just means there's data. Layout and styling is still a work in progress.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
