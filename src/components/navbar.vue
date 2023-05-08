<template>
	<header class="mb-2 bg-gray-dark">
		<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
			<RouterLink to="/">
				<div class="-m-1.5 p-1.5">
					<span class="sr-only">SpaceBits</span>
					<img class="h-8 w-auto" src="/apple-touch-icon.png" alt="" />
				</div>
			</RouterLink>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<Bars3Icon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<router-link
					v-for="item in navigation"
					:key="item.name"
					class="text-sm font-semibold leading-6 text-white"
					@click="mobileMenuOpen = false"
					:to="item.path"
				>
					{{ item.name }}
				</router-link>
			</div>
		</nav>
		<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
			<div class="fixed inset-0 z-10" />
			<DialogPanel
				class="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src="/apple-touch-icon.png" alt="" />
					</a>
					<button type="button" class="text-gray-700 -m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
						<span class="sr-only">Close menu</span>
						<XMarkIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="divide-gray-500/10 -my-6 divide-y">
						<div class="space-y-2 py-6">
							<router-link
								v-for="item in navigation"
								:key="item.name"
								class="text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-base"
								@click="mobileMenuOpen = false"
								:to="item.path"
							>
								{{ item.name }}
							</router-link>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Features } from "../../features";

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "People In Space", path: "/peopleinspace" },
];

// Feature flagged nav items
if (Features.isEnabled(Features.features.upcomingLaunches)) {
	navigation.push({ name: "Upcoming Launches", path: "/upcominglaunches" });
}

if (Features.isEnabled(Features.features.neo)) {
	navigation.push({ name: "NEO", path: "/neo" });
}

const mobileMenuOpen = ref(false);
</script>
