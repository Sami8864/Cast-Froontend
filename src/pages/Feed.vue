<template lang="">
   <div class="">
      <div class="row  inner_header pa-40">
         <div class="col-6 ">
            <h4 class="m-0" style="margin:0px; font-weight:600">Feed</h4>
         </div>
         <div class="col-6">
            <div class="row justify-end">
               <div class="col-4  text-right	 mt-17 " style="display: flex;  justify-content: end; align-content: center; align-items: center;">
                  <q-avatar class="filter_icon" @click="dialog = true">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99951 3H19.9996C20.5519 3 20.9996 3.44764 20.9996 3.99987L20.9998 5.58569C20.9999 5.85097 20.8945 6.10538 20.7069 6.29295L14.2924 12.7071C14.1049 12.8946 13.9995 13.149 13.9995 13.4142V19.7192C13.9995 20.3698 13.3881 20.8472 12.757 20.6894L10.757 20.1894C10.3118 20.0781 9.99951 19.6781 9.99951 19.2192V13.4142C9.99951 13.149 9.89415 12.8946 9.70662 12.7071L3.2924 6.29289C3.10486 6.10536 2.99951 5.851 2.99951 5.58579V4C2.99951 3.44772 3.44722 3 3.99951 3Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </q-avatar>
               </div>
               <div class="col-md-5 col-xl-4">
                  <q-input  rounded  outlined class="mt-10 bg-white search_input" placeholder="Search talent" type="text"  style="height: 47px;border-radius: 23px;"   v-model="searchText"   :dense="dense" >
                     <template v-slot:prepend>
                        <q-avatar class="search_input_icon" style="font-size:20px;margin:-2px 0px !important">
                           <img src="../assets/search.svg">
                        </q-avatar>
                     </template>
                  </q-input>
               </div>
            </div>
         </div>
      </div>
      <div class="row pa-20">
         <q-dialog v-model="icon" position="right" style=" background: rgba(0, 0, 0, 0.49) !important;
            backdrop-filter: blur(17px) !important;">
            <q-card style="width: 400px; max-width: 50vw; height:100vh ;display: flex;
               flex-direction: column; padding:0px !important;">
               <q-card-section class="row items-center q-pb-none" style="flex-basis: 6%;">
                  <div class="text-h6">View Performer</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
               </q-card-section>
               <q-card-section class="main_card_body" style="flex-basis: 94%;">
                  <!-- <q-video src="https://www.youtube.com/embed/PJde4bjTwFU?si=PIysb8HeCXviH3PJ" style="height: 100%;"  /> -->
                  <q-img style="height: 100%" :src="details.user.profile_image"></q-img>
                  <q-card-section class="caption_Card" :style="{ height: captionCardHeight }">
                     <p class="text-white text-capitalize">{{details?.user?.user_details?.name ?? 'Name not available'}}</p>
                     <h6 class="text-white text-capitalize"> {{details.user.professions[0].name}}</h6>
                     <p class="text-white text-capitalize">{{details.user.professions.likes}}</p>
                     <div class="row mt-20">
                        <div class="col-12" style="position:relative">
                           <q-list class="rounded-borders">
                              <q-expansion-item switch-toggle-side expand-separator label="More" class="expansion_button"
                                 @click="toggleCaptionCardHeight">
                                 <q-card>
                                    <q-card-section class="inner_caption_container">
                                       <div class="row justify-between">
                                          <div class="">
                                             <p class="text-white text-capitalize	text-bold " style="font-size: 16px;">{{details?.user?.user_details?.gender ?? 'Name not available'}}</p>
                                          </div>
                                          <div class="">
                                             <p class="text-white text-capitalize	text-bold	" style="font-size: 16px;">{{details?.user?.user_details?.height ?? 'Name not  available' }}m</p>
                                          </div>
                                          <div class="">
                                             <p class="text-white text-capitalize	text-bold	" style="font-size: 16px;">{{details?.user?.user_details?.weight ?? 'Name not available'}}lbs</p>
                                          </div>
                                          <div class="">
                                             <p class="text-white text-capitalize text-bold		" style="font-size: 16px;">{{details?.user?.user_details?.age ?? 'Name not available'}}</p>
                                          </div>
                                       </div>
                                       <div class="row justify-between mt-20">
                                          <div class="">
                                             <p class="text-white text-capitalize	text-bold	" style="font-size: 16px;">{{details?.user?.attributes?.race ?? 'Name not available'}}
                                             </p>
                                          </div>
                                       </div>
                                       <q-card-section style="border-bottom:1px solid rgb(98, 97, 97);margin: 8px;"><span
                                          class="text-white">Links</span></q-card-section>
                                       <div class="link_box" style="margin: 20px 11px;background: rgba(0, 0, 0, 0.37);padding: 6px 11px;">
                                          <span color="grey-5" style="font-size: 11px;color: rgba(255, 255, 255, 0.5);">Casting Networks</span>
                                          <p style="color: #fff;">{{details?.user?.links?.casting_networks ??  'Links not available'}}</p>
                                       </div>
                                       <div class="link_box" style="margin: 20px 11px;background: rgba(0, 0, 0, 0.37);padding: 6px 11px;">
                                          <span color="grey-5" style="font-size: 11px;color: rgba(255, 255, 255, 0.5);">Instagram</span>
                                          <p style="color: #fff;">{{details?.user?.links?.instagram ??  'Links not available'}}</p>
                                       </div>
                                       <div class="link_box" style="margin: 20px 11px;background: rgba(0, 0, 0, 0.37);padding: 6px 11px;">
                                          <span color="grey-5" style="font-size: 11px;color: rgba(255, 255, 255, 0.5);">Tiktok</span>
                                          <p style="color: #fff;">{{details?.user?.links?.tiktok ??  'Links not available'}}</p>
                                       </div>
                                    </q-card-section>
                                 </q-card>
                              </q-expansion-item>
                              <div class="card_icons">
                                 <q-avatar @click="saveProfiles(details?.user?.user_details?.device_id )">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M30.2871 19.6603C31.024 18.1856 33.1283 18.1856 33.8652 19.6603L36.707 25.3471C36.9999 25.9333 37.5616 26.3389 38.2102 26.4325L44.5275 27.3446C46.1749 27.5825 46.8278 29.6113 45.6283 30.7654L41.0918 35.13C40.6131 35.5906 40.3943 36.2589 40.5079 36.9134L41.5824 43.1017C41.8655 44.7323 40.1586 45.9816 38.6899 45.2187L32.9981 42.262C32.4202 41.9617 31.7322 41.9617 31.1542 42.262L25.4624 45.2187C23.9937 45.9816 22.2868 44.7324 22.5699 43.1017L23.6444 36.9134C23.7581 36.2589 23.5393 35.5906 23.0605 35.13L18.524 30.7654C17.3245 29.6113 17.9774 27.5825 19.6249 27.3446L25.9421 26.4325C26.5908 26.3389 27.1524 25.9333 27.4454 25.3471L30.2871 19.6603Z"
                                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                 </q-avatar>
                                 <q-avatar @click="createChat(details?.user?.user?.id )">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M26 28.375H37M26 33.875H34.25M31.5138 41.5667L26 44.875V40.75H23.25C22.156 40.75 21.1068 40.3154 20.3332 39.5418C19.5596 38.7682 19.125 37.719 19.125 36.625V25.625C19.125 24.531 19.5596 23.4818 20.3332 22.7082C21.1068 21.9346 22.156 21.5 23.25 21.5H39.75C40.844 21.5 41.8932 21.9346 42.6668 22.7082C43.4404 23.4818 43.875 24.531 43.875 25.625V33.1875M37 42.125H45.25M41.125 38V46.25"
                                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                 </q-avatar>
                              </div>
                           </q-list>
                        </div>
                     </div>
                  </q-card-section>
               </q-card-section>
            </q-card>
         </q-dialog>
         <div class="flex justify-center pa-40" v-if="loading">
            <q-spinner-ball color="local-blue" size="lg" />
         </div>
         <div class="col-12 gallery" id="gallery" :loading="loading" >
            <q-intersection v-for="post in posts" :key="post"    class="example-item">
               <div class="gallery-item" :loading="loading" >
                  <div class="content">
                     <q-circular-progress v-if="loading"
                        indeterminate
                        rounded
                        size="50px"
                        color="lime"
                        class="q-ma-md"
                     />
                     <q-img :src="post.headshot.url " 
                     spinner-color="primary"
                     :loading="loading"  alt="" @click="getDetails(post.headshot.device_id)" />
                     
                  </div>
                  <q-chip class="bookmarkchip" clickable @click="saveProfiles(post.headshot.device_id)">
                     <template v-if="post.is_saved">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.21094 2.58021C9.94783 1.10556 12.0522 1.10556 12.7891 2.58021L14.2403 5.48437C14.5333 6.07065 15.0949 6.47618 15.7436 6.56984L18.9513 7.03298C20.5988 7.27084 21.2517 9.29963 20.0521 10.4537L17.7656 12.6536C17.2869 13.1142 17.0681 13.7824 17.1818 14.437L17.7252 17.5671C18.0084 19.1977 16.3014 20.447 14.8328 19.6841L11.922 18.172C11.344 17.8717 10.656 17.8717 10.078 18.172L7.16725 19.6841C5.69857 20.447 3.99164 19.1977 4.27477 17.5671L4.81825 14.437C4.9319 13.7824 4.71311 13.1142 4.23438 12.6536L1.94785 10.4537C0.748338 9.29963 1.40124 7.27084 3.0487 7.03298L6.25644 6.56984C6.90511 6.47618 7.46673 6.07065 7.7597 5.48437L9.21094 2.58021Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </template>
                     <template v-else>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.21094 2.58021C9.94784 1.10556 12.0522 1.10556 12.7891 2.58021L14.2403 5.48437C14.5333 6.07065 15.0949 6.47618 15.7436 6.56984L18.9513 7.03297C20.5988 7.27084 21.2517 9.29963 20.0521 10.4537L17.7656 12.6536C17.2869 13.1142 17.0681 13.7824 17.1818 14.437L17.7252 17.5671C18.0084 19.1977 16.3014 20.447 14.8328 19.6841L11.922 18.172C11.344 17.8717 10.656 17.8717 10.078 18.172L7.16725 19.6841C5.69857 20.447 3.99164 19.1977 4.27476 17.5671L4.81825 14.437C4.9319 13.7824 4.71311 13.1142 4.23438 12.6536L1.94785 10.4537C0.748338 9.29963 1.40124 7.27084 3.0487 7.03298L6.25644 6.56984C6.90511 6.47618 7.46674 6.07065 7.7597 5.48437L9.21094 2.58021Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </template>
                  </q-chip>
               </div>
               <q-inner-loading :showing="visible">
                        <q-spinner-gears size="50px" color="primary" />
                     </q-inner-loading>
            </q-intersection>
         </div>
      </div>
   </div>
   <q-dialog v-model="dialog" @click="persistent = true" position="right" style="background: rgba(0, 0, 0, 0.49) !important;
      backdrop-filter: blur(17px) !important;">
      <q-card class=" text-dark" style="width: 400px; max-width: 50vw; height:100vh ;display: flex;
         flex-direction: column;  ">
         <q-bar class="bg-dark">
            <q-space />
            <q-btn dense flat icon="close" color="white" v-close-popup>
               <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
         </q-bar>
         <q-card-section>
            <div class="text-h4 text-dark">Add Filter</div>
         </q-card-section>
         <div style="display: flex;
            flex-direction: column;  justify-content:space-between;     height: 100%;">
            <q-card-section class="q-pt-none">
               <q-list class="rounded-borders" style="overflow:auto">
                  <q-expansion-item dense-toggle switch-toggle-side expand-separator label="Gender">
                     <q-card>
                        <q-card-section>
                           <q-option-group v-model="group.gender" type="checkbox" :options="genders" inline>
                              <template v-slot:label="opt">
                                 <div class="row items-center">
                                    <span class="text-teal">{{ opt.label }}</span>
                                 </div>
                              </template>
                           </q-option-group>
                        </q-card-section>
                     </q-card>
                  </q-expansion-item>
                  <q-expansion-item dense-toggle switch-toggle-side expand-separator label="Ethnicity">
                     <q-card>
                        <q-card-section>
                           <q-option-group v-model="group.ethnicity" type="checkbox" :options="ethnicity" inline>
                              <template v-slot:label="opt">
                                 <div class="row items-center">
                                    <span class="text-teal">{{ opt.label }}</span>
                                 </div>
                              </template>
                           </q-option-group>
                        </q-card-section>
                     </q-card>
                  </q-expansion-item>
                  <q-expansion-item dense-toggle switch-toggle-side expand-separator label="Age Range">
                     <q-card>
                        <q-card-section>
                           <q-range v-model="group.age" :min="20" :max="100" :step="4" label-always color="dark" />
                        </q-card-section>
                     </q-card>
                  </q-expansion-item>
                  <q-expansion-item dense-toggle switch-toggle-side expand-separator label="Height & Weight">
                     <q-card>
                        <q-card-section style="overflow:hidden">
                           <q-slider class="q-mt-lg" v-model="HeightInMeters" :min="minHeightMeters" :max="maxHeightMeters"
                              :step="0.01" label
                              :label-value="' ' + HeightInMeters.toFixed(2) + 'm (' + heightInFeet.toFixed(2) + 'ft)'"
                              label-always color="dark" />
                           <q-slider class="q-mt-lg" v-model="WeightInPounds" :min="minWeightPounds" :max="maxWeightPounds"
                              :step="1" label
                              :label-value="'' + WeightInPounds.toFixed(2) + 'lbs (' + weightInKilograms.toFixed(2) + 'kg)'"
                              label-always color="dark" />
                        </q-card-section>
                     </q-card>
                  </q-expansion-item>
               </q-list>
            </q-card-section>
            <q-card-section class="bg-grey-1 footer_filter" style="z-index: 100;">
               <div class="row ">
                  <div class="col-6">
                     <q-btn flat color="primary" @click="clear" label="Clear Filters" />
                  </div>
                  <div class="col-6 row justify-end content-center items-center" style="gap:20px;">
                     <p class="m-0" v-close-popup>Cancel</p>
                     <q-btn class="" :loading="loading" rounded @click="search" color="black" label="Save" />
                  </div>
               </div>
            </q-card-section>
         </div>
      </q-card>
   </q-dialog>
</template>
<script setup>
   import { ref, onMounted, watch, computed } from "vue";
   import { useDataStore } from "src/stores/data";
   import notify from "../composables/notify";
   import { useChatStore } from "../stores/chat";
   const chartStore = useChatStore();
   const loading = ref(true);
   const newloading = ref(true);
   const dataStore = useDataStore();
   const posts = ref(null);
   const dialog = ref(false);
   const icon = ref(false);
   const details = ref('');
   const maximizedToggle = ref(true);
   const searchText = ref('');
   const loadingState = ref(false);
   const visible = ref(false)
   const handleError = (postId) => {
  console.log(`Error loading image for post with ID: ${postId}`);
  // Set a flag indicating that the image failed to load
  // For example, you can add a property like 'error' to the post object
  const postWithError = posts.find(post => post.id === postId);
  if (postWithError) {
    postWithError.error = true;
  }
}
   const createChat = (data) => {
      chartStore.createChat({ receiver_id: data }).then((res) => {
         notify("Chat  Create  Successfully", "positive", "check_circle");
      })
         .catch(() => {
            // loading.value = false;
         });
   };
   const searchname = () => {
      console.log('asdasd');
      dataStore.searchByName();
   };
   const clear = () => {
      console.log('clear  value ',);
   };
   const label = ref({
      min: -12,
      max: 8
   });
   const genders = ref([
      {
         value: 'Man',
         label: 'Man'
      },
      {
         value: 'Woman',
         label: 'Woman'
      },
      {
         value: 'others',
         label: 'Other'
      }
   ]);
   const ethnicity = ref(
      [
         {
            value: 'asian',
            label: 'Asian',
   
         },
         {
            value: 'indian',
            label: 'Indian',
   
         },
         {
            value: 'black',
            label: 'Black',
         },
         {
            value: 'white',
            label: 'White',
         },
         {
            value: 'latino hispanic',
            label: 'Latino hispanic',
         },
         {
            value: 'middle eastern',
            label: 'Middle eastern',
         },
      ]
   )
   const options = ref([
      {
         value: 'DGA',
         label: 'DGA',
   
      },
      {
         value: 'PGA',
         label: 'PGA',
   
      },
      {
         value: 'SAG-AFTRA',
         label: 'SAG-AFTRA',
      },
      {
         value: 'DGA',
         label: 'DGA',
   
      }
   
   ]);
   const captionCardHeight = ref('30%');
   const toggleCaptionCardHeight = (value) => {
      // Adjust the height of caption_Card based on the expansion item state
      captionCardHeight.value = captionCardHeight.value === '30%' ? '100%' : '30%';
   };
 
   const getActorPorilfes = () => {
  dataStore.getfeed().then((res) => {
    loading.value = false;
    posts.value = res.data;
   
    visible.value = false;
  });
   };
   const saveProfiles = (data) => {
      dataStore.saveProfile({ device_id: data }).then((res) => {
         if (res.success) {
            // Profile saved successfully
           
            getActorPorilfes();
            notify("Profile Saved Successfully", "positive", "check_circle");
         } else {
            // Profile is already saved
            notify("Profile is already saved", "warning", "warning");
         }
      }).catch(() => {
         // Handle errors
         loading.value = false;
         notify("Failed to save profile", "negative", "error");
      });
   };
   
   const getDetails = (data) => {
      dataStore.getProfile({ device_id: data }).then((res) => {
         // let i = rows.value.map((data) => data.id).indexOf(res);
         // rows.value.splice(i, 1);
         icon.value = true
         details.value = res;
         console.log('Data', details.value);
      })
         .catch(() => {
            loading.value = false;
         });
   };
   
   // Constants
   const METERS_TO_FEET_CONVERSION = 3.28084;
   const POUNDS_TO_KILOGRAMS_CONVERSION = 0.453592;
   // Height constants
   const minAge = ref();
   const minHeightMeters = ref(1.5);
   const maxHeightMeters = ref(2.5);
   const HeightInMeters = ref(2);
   const heightInMeters = ref(2);
   // Weight constants
   const minWeightPounds = ref(100);
   const maxWeightPounds = ref(400);
   const WeightInPounds = ref(200);
   const weightInPounds = ref(200); // Separate ref for weight in pounds
   // Computed property to calculate height in feet
   const heightInFeet = computed(() => HeightInMeters.value * METERS_TO_FEET_CONVERSION)
   // Computed property to calculate weight in kilograms
   const weightInKilograms = computed(() => WeightInPounds.value * POUNDS_TO_KILOGRAMS_CONVERSION);
   // Define the group ref with heightInMeters and weightInPounds
   const group = ref({
      gender: [],
      ethnicity: [],
      weightInPounds: weightInPounds.value,
      age: [],
      heightInMeters: heightInMeters.value
   });
   group.value.age = { min: 20, max: 40 };
   group.value.ethnicity = ['black'];
   const search = () => {
      dataStore.search({ data: group.value }).then((res) => {
         console.log('serach result ', res.data);
         posts.value = res.data;
      })
   
   };
   watch(HeightInMeters, (newValue) => {
      group.value.heightInMeters = newValue;
   });
   // Watch for changes in WeightInPounds and update weightInPounds accordingly
   watch(WeightInPounds, (newValue) => {
      group.value.weightInPounds = newValue;
   });
   watch(group, () => {
      getActorPorilfes();
   });
   onMounted(() => {
      getActorPorilfes();
   });
   let timeoutId = null;
   watch(searchText, (newValue, oldValue) => {
     clearTimeout(timeoutId);
     timeoutId = setTimeout(() => {
       const searchQuery = newValue.toLowerCase().trim();
       if (!searchQuery) {
         // If the search query is empty, reset the filtered list to the original chat list
         getActorPorilfes();
       } else {
         // Otherwise, perform the filtering based on the search query
         dataStore.searchByName({name:searchQuery}).then((res) => {
            posts.value = res.data;
         });
         // filteredChatList.value = chatlist.value.filter(conversation =>
         
         //   conversation.name.toLowerCase().includes(searchQuery)
         // );
       }
     }, 600); // Adjust the debounce delay as needed (e.g., 300 milliseconds)
   }, { deep: true });
</script>
<style scoped>
   [class="q-dialog__inner flex no-pointer-events q-dialog__inner--minimized q-dialog__inner--right fixed-right items-center"]
   {
   padding: 0px !important;
   }
   :deep(.q-dialog__inner)
   { padding: 0px !important;
   }
   :deep(.q-dialog__inner--minimized)
   { padding: 0px !important;
   }
   :deep(.q-dialog__inner--minimized)
   { padding: 0px !important;
   }
   :deep(.q-dialog__inner--right)
   { padding: 0px !important;
   }
   :deep(.q-dialog__backdrop .fixed-full) {
   background: rgba(0, 0, 0, 0.49) !important;
   backdrop-filter: blur(17px) !important;
   }
   [class="q-dialog__backdrop fixed-full"] {
   background: rgba(0, 0, 0, 0.49) !important;
   backdrop-filter: blur(17px) !important;
   }
   #q-portal--dialog--1 {
   background: rgba(0, 0, 0, 0.49) !important;
   backdrop-filter: blur(17px) !important;
   }
   :deep(.q-dialog__backdrop) {
   background: rgba(0, 0, 0, 0.49) !important;
   backdrop-filter: blur(17px) !important;
   }
   :deep(.q-field__control) {
   height: 49px;
   }
   .card_icons {
   position: absolute;
   top: 0;
   right: 0;
   }
   .main_card_body {
   padding: 0px !important;
   }
   .caption_Card {
   position: absolute !important;
   height: 30%;
   width: 100%;
   bottom: 0;
   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 10.29%, #000000 174.94%);
   display: flex;
   flex-direction: column;
   justify-content: end;
   padding-bottom: 48px;
   padding-left: 26px;
  padding-right: 26px;
   }
   
   .q-item[aria-expanded="true"]  .caption_Card::before{
      opacity: 1;
      content: '';
  position: absolute;
  height: 94vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.48);
  bottom: 0px;
  left: 0px;
   }
   .expansion_button :deep(.q-card) {
   background: transparent !important;
   }
   .expansion_button :deep(.q-item) {
   width: 110px;
   background: rgba(209, 200, 200, 0.42);
   border-radius: 100px;
   }
   :deep(.q-expansion-item--expanded) .caption_Card {
   height: 100% !important;
   }
   :deep(.q-item__section--avatar) {
   min-width: 31px !important;
   }
   .bookmarkchip {
   border-radius: 100%;
   width: 49px;
   height: 49px;
   position: absolute;
   top: 10px;
   right: 10px;
   background: #1c1b1b4d;
   color: rgba(16, 16, 16, 0.20);
   }
   .filter_icon {
   background-color: #fff;
   border: 1px solid #c5c0c0;
   width: 42px;
   height: 42px;
   margin-right: 30px;
   }
   .inner_header {
   border-bottom: 1px solid #E2E8F0;
   ;
   }
   .gallery {
   display: grid;
   grid-column-gap: 8px;
   grid-row-gap: 8px;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   }
   .gallery .q-img {
   height: 300px !important;
   width: 300px  !important;
   object-fit: cover;
   max-width: 100%;
   border-radius: 8px;
   transition: all 1.5s ease;
   }
   .q-dialog__inner
   {
   padding: 0px !important;
   }
   .gallery img:hover {
   box-shadow: none !important;
   }
   .gallery .content {
   padding: 4px;
   }
   .gallery .gallery-item {
   transition: grid-row-start 300ms linear;
   transition: transform 300ms ease;
   transition: all 0.5s ease;
   cursor: pointer;
   }
   .gallery .gallery-item:hover {
   transform: scale(1.025);
   }
   :deep(.q-option-group) {
   display: flex;
   flex-grow: 1;
   flex-wrap: wrap;
   gap: 10px;
   }
   .text-teal {
   color: #000000 !important;
   background: rgba(0, 0, 0, 0.10);
   ;
   padding: 6px 10px;
   border-radius: 17px;
   font-size: 11px;
   }
   q-checkbox__bg,
   :deep(.q-checkbox__inner) {
   display: none;
   }
   /* Change the background color when selected */
   :deep(.q-checkbox__label.q-checkbox__label--standard) {
   background-color: lightblue;
   padding: 8px;
   border-radius: 5px;
   cursor: pointer;
   }
   /* Change the text color when selected */
   :deep(.q-checkbox__label.q-checkbox__label--standard .q-checkbox__content) {
   color: white;
   }
   /* Hover effect */
   :deep(.q-checkbox__label.q-checkbox__label--standard:hover) {
   background-color: lightcyan;
   }
   :deep(.q-checkbox[aria-checked="true"] .q-checkbox__label) .text-teal {
   color: #fff !important;
   background: #000;
   padding: 6px 10px;
   border-radius: 17px;
   font-size: 11px;
   }
   p {
   margin: 0px;
   }
   .footer_filter {
   /* position: absolute;
   width: 100%;
   bottom: 0; */
   }
   .q-dialog__inner--minimized>div {
   max-height: 100vh !important;
   }
   p,
   h6 {
   margin: 0px;
   }
   .search_input_icon  :deep(.q-avatar__content)
   {
   margin: -3px !important;
   }
   [class="q-dialog__inner flex no-pointer-events q-dialog__inner--minimized q-dialog__inner--right fixed-right items-center"]
   {
   padding: 0px !important;
   }
   :deep(.q-dialog__inner--minimized)
   {
   padding: 0px !important;
   }
   .q-dialog  :deep(.q-dialog__inner--minimized)
   {
   padding: 0px !important;
   }
   .inner_caption_container{
      padding: 10px 0px;
   }
</style>