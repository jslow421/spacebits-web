<template>
    <h1 class="title">NAV</h1>
    <div>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/peopleinspace">People In Space</router-link>
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
