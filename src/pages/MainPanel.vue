<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <DashboardHeader
      @logout="userLogout"
      @drawer-changed="toggleLeftDrawer"
    ></DashboardHeader>
    <DashboardSidebar :navs="navs" v-model="drawer"></DashboardSidebar>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup>
import DashboardSidebar from "../partials/DashboardSidebar.vue";
import DashboardHeader from "../partials/DashboardHeader.vue";
import { ref ,computed} from 'vue'
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
const userStore = useAuthStore()
const drawer = ref(true);
const router = useRouter();
const toggleLeftDrawer = () => {
  drawer.value = !drawer.value;
};
const userLogout = () => {
  userStore.logout().then(() => {
    router.push({
      name: "Signin",
    });
  });
};
const sidebarWidth = "350px";
const navs = ref([
  {
    heading: "Overview",
    tabs: [
      {
        title: "Feed",
        icon: "feed",
        link: "/feed",
      },
      {
        title: "Saved",
        icon: "star",
        link: "/saved",
      },
      {
        title: "Messaging",
        icon: "chat",
        link: "/chat",
      },

      {
        title: "Settings",
        icon: "settings ",
        link: "/settings/account",
      },
      
    ],
  },
]);
  </script>
  <style scoped>
  .res-container {
  padding-left: v-bind(sidebarWidth) !important;

}
:deep(.q-page-container)
{
  height: 100%;
  min-height: 100vh;
    background:  #F4F4F4;
}
</style>