<template>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn-ghost btn text-xl normal-case">SpaceBits</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/peopleinspace">People In Space</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "navbar",
};
</script>

<style scoped lang="scss">
.title {
	color: red;
}
</style>
