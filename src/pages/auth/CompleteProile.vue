<template>
   <div class="row  align-items-center">
      <div class="col-12">
         <div class=" row justify-center items-center q-gutter-x-sm pb-2 column">
            <q-avatar size="100px">
               <template #default>
                  <q-img src="../../assets/green_logo.svg" class="weight: "></q-img>
               </template>
            </q-avatar>
            <q-card-section class="pt-0 pb-0 ">
               <h3 class="text-first text-dark mb-0 text-weight-bold mt-0">
                  Complete Sign Up
               </h3>
            </q-card-section>
         </div>
         <div class="row justify-center items-center q-gutter-x-sm pb-2 column">
            <div class="q-pa-md  setp_from">
               <q-form class="q-gutter-md" enctype="multipart/form-data">
                  <q-stepper v-model="step" ref="stepper" color="secondary" animated>
                     <q-step :name="1" prefix="1" title="Basic information" :done="done1">
                        <p> Fill in your basic information to let us know your preferences</p>
                        <q-card-section>
                           <div class="row column">
                              <p> Profile Picture</p>
                              <!-- <q-avatar size="100px" square>
                                  <q-img class="rounded-borders" src="../../assets/female-12.jpg.png" :fit="mode"
                                      spinner-color="dark" ratio="1" width="100%">
                                      <template #loading>
                                          <q-img :src="userPlaceholder" ratio="1" width="100%"></q-img>
                                      </template>
                                  </q-img>
                                  </q-avatar> -->
                              <q-avatar size="116px" square>
                                 <q-img class="rounded-borders" :src="filmmaker.profile_photo != '' && filmmaker.profile_photo != null
                        ? filmmaker?.profile_photo
                        : userPlaceholder
                     " width="120px" style="border-radius:10px; border:5px solid #fff;">
                                    <div class="absolute-full text-subtitle2 flex flex-center" style="padding: 0px;">
                                       <q-avatar @click="() => filePicker.pickFiles()">
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path
                                                d="M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H5.93C6.25918 7.00005 6.58329 6.91884 6.87357 6.76359C7.16384 6.60834 7.4113 6.38383 7.594 6.11L8.406 4.89C8.5887 4.61617 8.83616 4.39166 9.12643 4.23641C9.41671 4.08116 9.74082 3.99995 10.07 4H13.93C14.2592 3.99995 14.5833 4.08116 14.8736 4.23641C15.1638 4.39166 15.4113 4.61617 15.594 4.89L16.406 6.11C16.5887 6.38383 16.8362 6.60834 17.1264 6.76359C17.4167 6.91884 17.7408 7.00005 18.07 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
                                                stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                             <path
                                                d="M15 13C15 13.7956 14.6839 14.5587 14.1213 15.1213C13.5587 15.6839 12.7956 16 12 16C11.2044 16 10.4413 15.6839 9.87868 15.1213C9.31607 14.5587 9 13.7956 9 13C9 12.2044 9.31607 11.4413 9.87868 10.8787C10.4413 10.3161 11.2044 10 12 10C12.7956 10 13.5587 10.3161 14.1213 10.8787C14.6839 11.4413 15 12.2044 15 13V13Z"
                                                stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                          </svg>
                                       </q-avatar>
                                       <q-avatar @click="deleteProfile()">
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path
                                                d="M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7M10 11V17M14 11V17M15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7M4 7H20"
                                                stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                          </svg>
                                       </q-avatar>
                                    </div>
                                 </q-img>
                                 <!-- <q-img class="rounded-borders" :src="
                                     filmmaker.profile_photo != '' && filmmaker.profile_photo != null
                                     ? filmmaker?.profile_photo
                                     : userPlaceholder
                                     "  spinner-color="dark" ratio="1" width="100%">
                                     <template #loading>
                                        <q-img :src="userPlaceholder" ratio="1" width="100%"></q-img>
                                     </template>
                                  </q-img> -->
                                 <!-- <q-badge
                                     floating
                                     color="local-blue"
                                     class="cursor-pointer"
                                     icon=""
                                     @click="() => filePicker.pickFiles()"
                                     >
                                     <q-icon name="photo_camera" color="white" />
                                  </q-badge> -->
                              </q-avatar>
                           </div>
                        </q-card-section>
                        <div class="row">
                           <div class="col-12 mb-0" v-for="(input, index) in inputs" :key="index">
                              <FormInput class="login-input" :type="input.type" v-model="form[input.model]"
                                 :detail="input" height="40px"></FormInput>
                           </div>
                        </div>
                        <q-stepper-navigation style="text-align:end;">
                           <q-btn @click="step1()" color="dark" rounded label="Next" />
                        </q-stepper-navigation>
                     </q-step>
                     <q-step :name="2" prefix="2" title="Additional Information" :done="done2">
                        <p> Fill in your basic information to let us know your preferences</p>
                        <div class="row">
                           <div class="col-12 mb-0">
                              <label for="" class="pb-4">Quick Bio</label>
                              <q-input outlined v-model="form.bio" counter maxlength="50" bottom-slots type="textarea"
                                 class="pt-5" :error="!isValid" />
                           </div>
                           <div class="col-12 mb-0 pt-20">
                              <label for="" class="pb-4">Unions</label>
                              <div class="row items-center">
                                 <div class="q-gutter-sm" v-for="opt in options" :key="opt.value">
                                    <q-checkbox v-model="form.union_id" :val="opt.value" :label="opt.label"
                                       class="text-teal" />
                                 </div>
                                 <!-- <q-radio v-model="form.union_id" :val="opt.value" :label="opt.label" class="text-teal" /> -->
                              </div>

                           </div>
                        </div>
                        <q-stepper-navigation style="text-align:end;">
                           <q-btn @click="submit()" :loading="loading"  color="dark" rounded label="Next" />
                        </q-stepper-navigation>
                     </q-step>
                     <q-step :name="3" prefix="3" title="Done" :done="done3" style="padding: 100px;">
                        <div class=" row justify-center items-center q-gutter-x-sm pb-2 column">
                           <q-avatar size="100px">
                              <template #default>
                                 <q-img src="../../assets/ill.png" class="weight: "></q-img>
                              </template>
                           </q-avatar>
                           <q-card-section class="pt-0 pb-0 ">
                              <h3 class="text-first text-dark mb-0 text-weight-bold mt-10">
                                 Sign Up Successful!
                              </h3>
                           </q-card-section>
                        </div>
                        <div class="row justify-center pt-35">
                           <div class="col-7">
                              <p class="text-center">Hi {{ form.full_name }}, you have successfully signed up to join castTypes
                                 as a filmmaker, tap on “proceed to dashboard” below to proceed to your dashboard.
                              </p>
                           </div>
                        </div>
                        <q-stepper-navigation style="text-align:center;">
                           <q-btn color="dark" @click="dashboard()" rounded label="Proceed to dashboard" />
                        </q-stepper-navigation>
                     </q-step>
                  </q-stepper>
               </q-form>
            </div>
         </div>
      </div>
   </div>
   <q-file style="display: none" ref="filePicker" v-model="profileImage" accept=".jpg, image/*">
      <template #default>
         <q-icon name="photo_camera" class="cursor-pointer" />
      </template>
   </q-file>
   <q-dialog v-model="imageDialog" no-backdrop-dismiss>
      <q-card style="max-width: 350px; width: 100%">
         <q-card-section>
            <p>Profile Image preview</p>
            <q-img :src="imagePreview" width="100%" ratio="1"></q-img>
            <div class="row mt-10 justify-between">
               <q-btn label="Close" no-caps flat color="local-blue" @click="profileImage = null"></q-btn>
               <q-btn label="Upload" no-caps color="blue" unelevated @click="uploadFile" :loading="loading"></q-btn>
            </div>
         </q-card-section>
      </q-card>
   </q-dialog>
</template>
<script setup>
import FormInput from "../../partials/FormInput.vue";
import { ref, onMounted, computed, watch, provide } from "vue";
import rules from "../../composables/validation-rules";
// import userPlaceholder from "../../assets/female-12.jpg.png";
import { useRouter } from "vue-router";
import { useDataStore } from "../../stores/data";
import { useAuthStore } from "../../stores/auth";
import notify from "../../composables/notify";
const dataStore = useDataStore();
const userStore = useAuthStore();
const router = useRouter();
const uploading = ref(false);
const imageDialog = ref(false);
const loading = ref(false);
const filePicker = ref();
const profileImage = ref(null);
const filmmaker = ref({});
const limit = ref('');
const step = ref(1)
const done1 = ref(false)
const done2 = ref(false)
const group = ref(['op1'])
const done3 = ref(false)
const dashboard = () => {
   router.push('/');
}
const deleteProfile = async () => {
   await userStore
      .deleteProfile()
      .then((res) => {
         console.log(res);
         filmmaker.value.profile_photo = null;
      });
}
const step1 = () => {
   // Check if all required fields are filled
   if (form.value.compnay_name && form.value.full_name) {
      done1.value = true;
      step.value = 2;
   } else {
      // Optionally, display a message to the user indicating that all fields must be filled
      notify("Please fill in all required fields before proceeding.", "negative", "check_circle");
   }
};

const form = ref({
   compnay_name: null,
   full_name: null,
   bio: null,
   union_id: [],
})
const inputs = ref([
   {
      label: "Company Name",
      placeholder: "American Made Films",
      model: "compnay_name",
      type: "text",
      rules: [rules.required],
   },
   {
      label: "Your Full Name",
      placeholder: "Margarett Bloomingdale",
      model: "full_name",
      type: "text",
      rules: [rules.required],
   }

]);
const options = ref([


])
const isValid = () => {
   computed(() => model.value.length <= 3)
}
const submit = () => {
   done2.value = true;
   loading.value = true;
   console.log('complete form data', form.value);
   userStore.completeProfile({ ...form.value })
      .then(() => {
         loading.value = false;
         notify("Profile added Successfully", "positive", "check_circle");
         step.value = 3;
      })
      .catch(() => {

      });

}
const uploadFile = async () => {
   if (profileImage.value) {
      loading.value = true;
      await userStore
         .UpdateProfile({
            profileImage: profileImage.value,
         })
         .then((res) => {
            console.log(res);
            loading.value = false;
            filmmaker.value.profile_photo = res.data.profile_image;
            imageDialog.value = false;
         });
      uploading.value = false;
      profileImage.value = null;
   }
};
const getunions = () => {
   dataStore.getUnions().then((res) => {
      console.log('respose in fucntion', res.data);
      options.value = res.data;

   });
}
const imagePreview = computed(() => {
   if (profileImage.value) {
      let file = profileImage.value;
      let imageUrl = URL.createObjectURL(file);
      return imageUrl;
   }
   return null;
});
watch(profileImage, () => {
   if (profileImage.value != null) {
      imageDialog.value = true;
   } else {
      imageDialog.value = false;
   }
});
onMounted(() => {
   getunions();
});
</script>
<style scoped>
.setp_from {
   width: 900px;
   padding: 30px 0px 0px 0px;
}

/* Styling for q-checkbox */
:deep(.q-checkbox__bg),
:deep(.q-checkbox__inner) {
   display: none;
}

:deep(.q-stepper__tab--done) {
   color: #4BC270 !important;
}

:deep(.q-stepper__tab) {
   color: #64748B;
}

:deep(.q-stepper__tab--active, .q-stepper__tab--done) {
   color: #4BC270 !important;

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

/* Selected state */
:deep(.q-checkbox[aria-checked="true"] .q-checkbox__label) .text-teal {
   color: #fff !important;
   background: #4BC270;
   padding: 6px 10px;
   border-radius: 17px;
   font-size: 11px;
}

/* Styling for q-radio */
:deep(.q-radio__bg),
:deep(.q-radio__inner) {
   display: none;
}

/* Change the background color when selected */
:deep(.q-radio__label.q-radio__label--standard) {
   background-color: lightblue;
   padding: 8px;
   border-radius: 5px;
   cursor: pointer;
}

/* Change the text color when selected */
:deep(.q-radio__label.q-radio__label--standard .q-radio__content) {
   color: white;
}

/* Hover effect */
:deep(.q-radio__label.q-radio__label--standard:hover) {
   background-color: lightcyan;
}

/* Selected state */
[class="q-radio cursor-pointer no-outline row inline no-wrap items-center text-teal"] {
   color: #000 !important;
   background: rgba(0, 0, 0, 0.10);
   padding: 6px 10px !important;
   border-radius: 17px !important;
   margin: 10px 10px;
   font-size: 11px !important;
}

[class="q-checkbox cursor-pointer no-outline row inline no-wrap items-center text-teal"] {
   color: #000 !important;
   background: rgba(0, 0, 0, 0.10);
   padding: 6px 10px !important;
   border-radius: 17px !important;
   margin: 10px 10px;
   font-size: 11px !important;
}

.q-radio[aria-checked="true"] {
   color: #fff !important;
   background: #4BC270;
}

.q-checkbox[aria-checked="true"] {
   color: #fff !important;
   background: #4BC270;
}
</style>
