<template lang="">
  <q-header  bordered class="text-primary" style="background:#fff !important">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
          />
  
          <q-toolbar-title>
         
          </q-toolbar-title>
          <div class="">
        <q-toolbar-title>
          <q-avatar size="sm" color="white" class="mr-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <q-popup-edit v-model="label" auto-save v-slot="scope">
            <q-input v-model="searchText" dense autofocus @keyup.enter="search" placeholder="Search Talent" />
      </q-popup-edit>
                </q-avatar>
                <q-btn-dropdown style="width: 20px; margin-left: 3px;padding-top: 9px;"
      v-model="menu"
      class=" q-ml-lg"
      color=""
      label=""
    >
    <template v-slot:label>
              <div class="row q-gutter-sm items-center justify-center">
                <q-avatar size="sm" color="white" class="mr-20">
                  <img src="../assets/notification.svg" />
                </q-avatar>
                <div  class="column justify-center" :class="[$q.screen.lt.sm ? 'hidden' : '']" >
                </div>
              </div>
            </template>
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar size="md" color="white">
                  <img   :src="profileImage ?  profileImage : (form.profile_image ? form.profile_image : 'https://cdn.quasar.dev/img/boy-avatar.png') " />
                </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Ahad butt</q-item-label>
            <q-item-label caption>hello</q-item-label>
          </q-item-section>
          
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar size="md" color="white">
                  <img   :src="profileImage ?  profileImage : (form.profile_image ? form.profile_image : 'https://cdn.quasar.dev/img/boy-avatar.png') " />
                </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Ahad butt</q-item-label>
            <q-item-label caption>hello hello hello hello hello</q-item-label>
          </q-item-section>
          
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar size="md" color="white">
                  <img   :src="profileImage ?  profileImage : (form.profile_image ? form.profile_image : 'https://cdn.quasar.dev/img/boy-avatar.png') " />
                </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Ahad butt</q-item-label>
            <q-item-label caption>hello</q-item-label>
          </q-item-section>
          
        </q-item>
      </q-list>
    </q-btn-dropdown>
                
          <q-btn-dropdown class="drop_down_button" style="width:30px" color="" dropdown-icon="">
            <template v-slot:label>
              <div class="row q-gutter-sm items-center">
                <q-avatar size="md" color="white">
                  <img   :src="profileImage ?  profileImage : (form.profile_image ? form.profile_image : 'https://cdn.quasar.dev/img/boy-avatar.png') " />
                </q-avatar>
                <div  class="column justify-center" :class="[$q.screen.lt.sm ? 'hidden' : '']" >
                </div>
              </div>
            </template>
            <q-list>
            <q-item clickable v-close-popup @click="$emit('logout')">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar-title>
      </div>
        </q-toolbar>
      </q-header>
</template>
<script setup>
import { ref, onMounted, defineEmits, onUnmounted,computed } from "vue";
import { useDataStore } from "../stores/data";
import { inject } from 'vue';
const searchText = inject('searchText');
const drawer = ref(true);
const dataStore = useDataStore();
const filmmaker = ref({});
const form = ref({
    profile_image: null,
})
const search = () => {
  console.log('Performing search:', searchText.value);
  // Perform search action using searchText.value
};
const profileImage = computed(() => dataStore.profileImage);
const emit = defineEmits(["drawer-changed", "logout"]);
const getFilmMaker = () => {
  dataStore.getFilmMakerProfile().then((res) => {
    console.log('response header of profile image', res.data);
    form.value.profile_image = res.data.profile_image; // Update profile image
  });
};

const toggleLeftDrawer = () => {
  drawer.value = !drawer.value;
  emit("drawer-changed", drawer.value);
};
onMounted(() => {
  getFilmMaker();
});
</script>
<style scoped>
:deep(.q-header) {
  background: #fff !important;
  left: 280px !important;
}

button {
  color: black !important;
}
.q-btn::before {

  box-shadow: none !important;
}
:deep(.q-btn-dropdown--simple * + .q-btn-dropdown__arrow){
  display: none !important;

}
:deep(.q-avatar__content, .q-avatar img:not(.q-icon):not(.q-img__image))
{
  object-fit: cover;
}
button:hover{
  box-shadow: none;
}
button{
  color: #fff;
}
</style>
