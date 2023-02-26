import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
	{ path: "/", name: "home", component: home },
	{ path: "/peopleinspace", name: "peopleinspace", component: () => import("../views/peopleinspace.vue") },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
