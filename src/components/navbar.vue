<template>
	<div class="container navbar mx-auto bg-base-100">
		<div class="flex-1">
			<a class="btn-ghost btn text-xl normal-case">SpaceBits</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/peopleinspace">People In Space</router-link></li>
				<li><router-link to="/upcominglaunches">Upcoming Launches</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
