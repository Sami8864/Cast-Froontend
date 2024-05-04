<template>
    <div class="row">
        <div class="col">
            <q-card-section class="pt-0 pb-0 ">
                <h5 class="text-first text-dark mb-0 text-weight-bold mt-0">
                    Account
                </h5>
            </q-card-section>
            <q-card-section class="pt-15 pb-0 ">
                <h6 class="text-first text-dark mb-0  mt-0">
                    Profile
                </h6>
                <p class="text-dar-grey">Following information is publicly displayed, be careful!</p>
            </q-card-section>
            <q-card-section style="height: 300px;">
                <q-img :src="filmmaker.CoverImage != '' && filmmaker.CoverImage != null
                        ? filmmaker?.CoverImage
                        : form.cover_image
                    " style="border-radius:10px;height: 250px;">
                    <div class="absolute-full text-subtitle2 flex flex-center">
                        <q-avatar @click="() => fileCoverPicker.pickFiles()">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H5.93C6.25918 7.00005 6.58329 6.91884 6.87357 6.76359C7.16384 6.60834 7.4113 6.38383 7.594 6.11L8.406 4.89C8.5887 4.61617 8.83616 4.39166 9.12643 4.23641C9.41671 4.08116 9.74082 3.99995 10.07 4H13.93C14.2592 3.99995 14.5833 4.08116 14.8736 4.23641C15.1638 4.39166 15.4113 4.61617 15.594 4.89L16.406 6.11C16.5887 6.38383 16.8362 6.60834 17.1264 6.76359C17.4167 6.91884 17.7408 7.00005 18.07 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M15 13C15 13.7956 14.6839 14.5587 14.1213 15.1213C13.5587 15.6839 12.7956 16 12 16C11.2044 16 10.4413 15.6839 9.87868 15.1213C9.31607 14.5587 9 13.7956 9 13C9 12.2044 9.31607 11.4413 9.87868 10.8787C10.4413 10.3161 11.2044 10 12 10C12.7956 10 13.5587 10.3161 14.1213 10.8787C14.6839 11.4413 15 12.2044 15 13V13Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </q-avatar>
                        <q-avatar  @click="deleteCoverImage()">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7M10 11V17M14 11V17M15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7M4 7H20"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </q-avatar>
                    </div>
                </q-img>
            </q-card-section>
            <q-card-section>
                <div class="row mt-20   ">
                    <div class="col-3">
                        <q-img :src="filmmaker.profile_photo != '' && filmmaker.profile_photo != null
                                ? filmmaker?.profile_photo
                                : form.profile_image
                            " width="145px" height="145px"
                            style="border-radius:10px; border:5px solid #fff;position: absolute;top: -250%;left: 30px;">
                            <div class="absolute-full text-subtitle2 flex flex-center">
                                <q-avatar @click="() => filePicker.pickFiles()">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
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
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7M10 11V17M14 11V17M15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7M4 7H20"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </q-avatar>
                            </div>
                        </q-img>
                    </div>
                </div>
            </q-card-section>
            <q-card-section>

                <div class="row">
                    <div class="col-12 mb-0">
                        <label for="" class="pb-4">Company Name</label>
                        <q-input outlined class="mt-10 bg-white" v-model="form.compnay_name" />
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">Your Full Name</label>
                        <q-input outlined class="mt-10 bg-white" label="Company" v-model="form.full_name" />
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">Quick Bio</label>
                        <q-input outlined bg-color="white" class="bg-white mt-10"  type="textarea"
                            v-model="form.bio" />
                    </div>
                    <div class="col-12 mb-0 pt-20  ">

                        <label for="" class="pb-4">Unions</label>
                        <div class="row items-center">
                            <div class="q-gutter-sm " v-for=" opt in options">
                            <q-radio v-model="form.union_id" :val="opt.value" :label="opt.label" class="text-teal" />
                        </div>
                    </div>
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">IMDb</label>
                        <q-input outlined class="mt-10 bg-white"  v-model="form.imdb_link" placeholder="imdb.com/actionactingagency"/>
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">Actors Access</label>
                        <q-input outlined class="mt-10 bg-white"  v-model="form.actoraccess_link"  placeholder="aaccess.com/actionactingagency"/>
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">800 Casting</label>
                        <q-input outlined class="mt-10 bg-white"  v-model="form.casting_link" placeholder="800casting.com/actionactingagency" />
                    </div>
                    
                    <div class="col-12 mb-0 mt-20">
                        <q-list class="rounded-borders">
                            <q-expansion-item class="bg-grey-0 text-weight-bolder" switch-toggle-side expand-separator label="Danger Zone">
                                <q-card class="bg-grey-0">
                                    <q-card-section class="bg-grey-0">
                                        <q-btn class="full-width text-weight-bolder  text-capitalize text-italic	" @click="deleteAccount()" :loading="loading" rounded
                                            color="red-8" label="Delete Account"  />
                                    </q-card-section>
                                </q-card>
                            </q-expansion-item>

                        </q-list>
                    </div>
                    <div class="col-12 mb-0 mt-20 justify-end" style="text-align: end;">
                        <q-btn flat class="text-capitalize" color="black" label="Cancel" />
                        <q-btn class="text-capitalize" rounded color="black" :loading="loading" @click="submit()" label="Save" />
                    </div>
                </div>
            </q-card-section>
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
                    <q-btn label="Close" no-caps flat color="local-blue" 
                        @click="profileImage = null"></q-btn>
                    <q-btn label="Upload" no-caps color="blue"  :loading="loading" sunelevated @click="uploadFile" ></q-btn>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
    <q-file style="display: none" ref="fileCoverPicker" v-model="CoverImage" accept=".jpg, image/*">
        <template #default>
            <q-icon name="photo_camera" class="cursor-pointer" />
        </template>
    </q-file>
    <q-dialog v-model="CoverDialog" no-backdrop-dismiss>
        <q-card style="max-width: 350px; width: 100%">
            <q-card-section>
                <p>Cover Image preview</p>
                <q-img :src="CoverPreview" width="100%" ratio="1"></q-img>
                <div class="row mt-10 justify-between">
                    <q-btn label="Close" no-caps flat color="local-blue" 
                        @click="profileImage = null"></q-btn>
                    <q-btn label="Upload" no-caps color="blue"  :loading="loading" sunelevated @click="uploadCoverImage" ></q-btn>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup>

import { ref, onMounted, computed, watch, provide,inject  } from "vue";
import { useRouter } from "vue-router";
import { useDataStore } from "../../stores/data";
import { useAuthStore } from "../../stores/auth";
import notify from "../../composables/notify";
import userPlaceholder from "../../assets/profile.png";
const dataStore = useDataStore();
const userStore = useAuthStore();
const router = useRouter();
const group = ref(['op1']);
const profile = ref(null);
const loading = ref(false);
const limit = ref('')
const uploading = ref(false);
const imageDialog = ref(false);
const filePicker = ref();
const fileCoverPicker = ref();
const profileImage = ref(null);
const CoverImage = ref(null);
const CoverDialog = ref(false);
const filmmaker = ref({});
const deleteProfile = async () => {
    await userStore
        .deleteProfile()
        .then((res) => {
            console.log(res);
            getFilmMaker()
            filmmaker.value.profile_photo = null;
        });
}
const deleteCoverImage = async () => {
    await userStore.deleteCoverImage().then((res) => {
            console.log(res);
            filmmaker.value.CoverImage = ''
            getFilmMaker()
        });
}
const submit = ()=>{
    loading.value = true;
         console.log('complete form data', form.value);
          userStore.completeProfile({ ...form.value })
            .then(() => {
                loading.value = false
                notify("Profile Has been Updated  Successfully", "positive", "check_circle");
            })
            .catch(() => {
                loading.value = false
            });
     
    }
const form = ref({
    profile_image: null,
    compnay_name: null,
    full_name: null,
    bio: null,
    union_id: null,
    imdb_link:null,
    actoraccess_link:null,
    casting_link:null,
})
const isValid = () => {
    computed(() => model.value.length <= 3)

}
const options = ref([]);// Assuming shape is a reactive variable in your component
const getunions = async () => {
  try {
    const res = await dataStore.getUnions();
    console.log('response in function', res.data);
    options.value = res.data;
  } catch (error) {
    console.error('Error fetching unions:', error);
    // Handle error
  }
}
const getFilmMaker = () => {
  dataStore.getFilmMakerProfile().then((res) => {
    console.log('response in function', res.data);
    form.value = res.data;
  });
}

const deleteAccount = () => {
    loading.value = true;
    userStore.deleteaccount().then(() => {
        loading.value = false;
        notify("Acount deleted Successfully", "positive", "check_circle");
        router.push('/Signin');
    }).catch(() => {
        loading.value = false;
    });;
}
const uploadFile = async () => {
    if (profileImage.value) {
        loading.value = true;
        await userStore
            .UpdateProfile({
                profileImage: profileImage.value,
            })
            .then((res) => {
                loading.value = false;
                console.log(res);
                filmmaker.value.profile_photo = res.data.profile_image;
                dataStore.setProfileImage(res.data.profile_image);
                imageDialog.value = false;
            }).catch(() => {
                loading.value = false;
            });;

        uploading.value = false;
        profileImage.value = null;
    }
};
const uploadCoverImage = async () => {
    if (CoverImage.value) {
        loading.value = true;
        await userStore
            .UpdateCover({
                coverImage: CoverImage.value,
            })
            .then((res) => {
                loading.value = false;
                console.log(res);
                filmmaker.value.CoverImage = res.data.cover_image;
                console.log('cover image', filmmaker.value.CoverImage);
                CoverDialog.value = false;
            }).catch(() => {
                loading.value = false;
            });;

        uploading.value = false;
        CoverImage.value = null;
    }
};
const imagePreview = computed(() => {
    if (profileImage.value) {
        let file = profileImage.value;
        let imageUrl = URL.createObjectURL(file);
        return imageUrl;
    }
    return null;
});
const CoverPreview = computed(() => {
    if (CoverImage.value) {
        let file = CoverImage.value;
        let imageUrl = URL.createObjectURL(file);
        return imageUrl;
    }
    return null;
});
watch(CoverImage, () => {
    if (CoverImage.value != null) {
        CoverDialog.value = true;
    } else {
        CoverDialog.value = false;
    }
})
watch(profileImage, () => {
    if (profileImage.value != null) {
        imageDialog.value = true;
    } else {
        imageDialog.value = false;
    }
})
onMounted(() => {
    getFilmMaker();
    getunions();
});
</script>
<style scoped>
/* Styling for q-checkbox */
:deep(.q-checkbox__bg),
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
[class="q-radio cursor-pointer no-outline row inline no-wrap items-center text-teal"]  {
    color: #000 !important;
    background: rgba(0, 0, 0, 0.10);
    padding: 6px 10px !important; 
    border-radius: 17px !important;
    margin: 10px 10px;
    font-size: 11px !important;
}
.q-radio[aria-checked="true"]{
    color: #fff !important;
    background: #4BC270;
}
</style>