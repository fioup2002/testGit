

const routes = [
  { path: "/", component: () => import("@/components/Home.vue") },
  { path: "/1", component: () => import("@/components/Register.vue") },
  { path: "/2", component: () => import("@/components/Login.vue") },
];

export default routes;
