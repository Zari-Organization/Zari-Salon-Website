import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/services",
    name: "ServicesView",
    component: () =>
      import("../views/ServicesView.vue"),
  },
  {
    path: "/gallery",
    name: "GalleryView",
    component: () =>
      import("../views/GalleryView.vue"),
  },
  {
    path: "/shop",
    name: "ShopView",
    component: () =>
      import("../views/ShopView.vue"),
  },
  {
    path: "/booking",
    name: "BookingView",
    component: () =>
      import("../views/BookingView.vue"),
  },

  {
    path: "/account",
    name: "AccountView",
    component: () =>
      import("../views/AccountView.vue"),
  },

  {
    path: "/profile",
    name: "ProfileView",
    component: () =>
      import("../views/ProfileView.vue"),
  },

  {
    path: "/cart",
    name: "CartView",
    component: () =>
      import("../views/CartView.vue"),
  },
  {
    path: "/wishlist",
    name: "WishlistView",
    component: () =>
      import("../views/WishlistView.vue"),
  },



  {
    path: "/contact",
    name: "ContactView",
    component: () =>
      import("../views/ContactView.vue"),
  },

  {
    path: "/services/details",
    name: "ServiceDetails",
    component: () =>
      import("../views/ServiceDetails.vue"),
  },

  {
    path: "/cart/checkout",
    name: "CheckoutView",
    component: () =>
      import("../views/CheckoutView.vue"),
  },
  // {
  //   path: '/:pathMatch(.*)*', component: () =>
  //   import("../views/OopsView.vue"),
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });



