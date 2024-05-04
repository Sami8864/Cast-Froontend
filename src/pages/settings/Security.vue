<template>
    <div class="row" style="overflow: hidden;">
        <div class="col">
            <q-card-section class="pt-0 pb-0 ">
                <h5 class="text-first text-dark mb-0 text-weight-bold mt-0">
                    Security
                </h5>
            </q-card-section>
            <q-card-section class="pt-15 pb-0 ">
                <h6 class="text-first text-dark mb-0  mt-0">
                    Change your password
                </h6>
                <p class="text-dar-grey">You can only change your password twice within 24 hours!</p>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-12 mb-0">
                        <label for="" class="pb-4">Current password</label>
                        <q-input outlined class="mt-10 bg-white" type="password"    v-model="form.current_password"  >
                            <template v-slot:prepend>
                            <q-avatar size="sm">
                                <img  src="../../assets/svg.svg">
                            </q-avatar>
                            </template>
                            
                        </q-input>
                        
                    </div>
                    <div class="col-12 mb-0 mt-20">
                        <label for="" class="pb-4">New password</label>
                        <q-input outlined class="mt-10 bg-white"  type="password" standout hint="Minimum 8 characters. Must include numbers, letters and special characters." :dense="dense"  v-model="form.new_password"  >
                            <template v-slot:prepend>
                            <q-avatar size="sm">
                                <img  src="../../assets/svg.svg">
                            </q-avatar>
                            </template></q-input>
                    </div>
                    
                    <div class="col-12 mb-0 mt-20 justify-end" style="text-align: end;">
                        <q-btn flat color="black" label="Cancel" />
                        <q-btn class="" :loading="loading" rounded @click="changePassword()" color="black" label="Save" />
                    </div>
                </div>
            </q-card-section>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watch, provide } from "vue";
import { useRouter } from "vue-router";
import { useDataStore } from "../../stores/data";
import { useAuthStore } from "../../stores/auth";
import notify from "../../composables/notify";
import userPlaceholder from "../../assets/profile.png";
const dataStore = useDataStore();
const userStore = useAuthStore();
const router = useRouter();
const loading = ref(false);
const form = ref({
    current_password: null,
    new_password : null,
})
const changePassword = ()=>{
    loading.value = true;
    userStore.chnagePassword({...form.value}).then(() => {
        loading.value = false;
        notify("Password Has Been Successfully", "positive", "check_circle");
      }).catch(() => {
          loading.value = false;
        });;
}
</script>
<style scoped>
:deep(.q-option-group) {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 10px;
}
:deep(.q-field__messages)
{
    color: #94A3B8;
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
    background: #4BC270;
    padding: 6px 10px;
    border-radius: 17px;
    font-size: 11px;
}
:deep(.q-field__bottom .row .items-start .q-field__bottom--animated)
{
    background: #f4f4f4 !important;
  text-align: start;
}
:deep(.q-field__bottom--animated)
{background: #f4f4f4 !important;

}
</style>