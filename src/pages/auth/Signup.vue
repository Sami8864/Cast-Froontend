<template lang="">
    <div class="row login-page">
        <div class="col-6" style="display: flex;justify-content: center;align-content: center;align-items: center;">
            <div class="login-card">
        <q-form ref="form" :greedy="true">
          <q-card-section
            class="row justify-first items-center q-gutter-x-sm pb-2"
          >
            <q-avatar  size="100px" >
              <template #default>
                <q-img src="../../assets/logo.svg" class="weight: "></q-img>
              </template>
            </q-avatar>
          </q-card-section>
          <q-card-section class="pt-0 pb-0 ">
            <h4 class="text-first text-dark mb-0 text-weight-bold mt-0">
                Sign Up
            </h4>
          </q-card-section>
          <q-card-section class="pt-12 pb-0 q-mb-lg">
            <p class="text-first text-dark mb-0">
                Have an account? <span  color="local-blue" class="text-first text-local-blue mb-0  mt-0">
                  <router-link to="Signin" style="color:#246DA8" > Sign In</router-link>
                  </span>
            </p>
          </q-card-section>
          <q-card-section class="px-20 pb-20 pt-5">
            <div class="row">
              <div
                class="col-12 mb-0"
                v-for="(input, index) in inputs"
                :key="index"
              >
                <FormInput
                  class="login-input"
                  @enter="singup"
                  :type="input.type"
                  v-model="model[input.model]"
                  :detail="input"
                  height="40px"
                ></FormInput>

              </div>
              <div class="row justify-between col-12 mt-20" style="position: relative;">

                <q-checkbox v-model="rememberme" >
                  <template v-slot:label>
                  <span>I agree with terms and privacy policy</span>
                </template>

                </q-checkbox>
                <span style="position: absolute;top: 10px;left: 40px;">I agree with <span class="text-decoration" style="text-decoration: underline ; color:#246DA8"><router-link to="/AppTerms"> terms</router-link></span>  and <span style="text-decoration: underline ; color:#246DA8"><router-link to="/AppPolicy">privacy policy</router-link></span></span>
                 <!-- <template v-slot:label>
                    I agree with <span style="color:#246DA8">terms</span>  and <span style="color:#246DA8">privacy policy</span>
                </template>  -->
              </div>
              <div class="row justify-between col-12 mt-40		">
                <q-btn class="full-width text-capitalize	"
                  :loading="loading"
                  rounded
                  @click="singup"
                  color="black"
                  label="Proceed"

                  :disable="!rememberme"
                />
              </div>
            </div>
          </q-card-section>
        </q-form>
      </div></div>
      <div class="col-6 right_column" style="padding-top:6%;padding-left:2.5%;padding-right:2.5%;padding-bottom:3%">
        <p class="text-h3 text-light_white"> <span class="text-local-blue ">Cast </span>the perfect<br>
            <span class="text-local-blue ">types </span>   for your<br> movies</p>
            <div class="q-pa-md example-row-equal-width photo_grid" >
            <div class="row"  style="gap:20px">
                <div class="col-3" style="display:flex ; flex-direction:column; gap:20px ;align-items: center;">

                    <q-img
                    width="100%"
                    height="70%"
                    fit="contain"
                    src="../../assets/images/2.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />
                    <q-img
                    width="100%"
                    src="../../assets/images/7.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />

                </div>
                <div class="col-5" style="display:flex ; flex-direction:column; gap:20px">
                    <q-img
                    width="100%"
                    src="../../assets/images/3.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />
                    <q-img
                    width="100%"
                    src="../../assets/images/4.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />
                    <q-img
                     width="100%"
                    src="../../assets/images/1.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />

                </div>
                <div class="col-3" style="display:flex ; flex-direction:column; gap:20px">
                    <q-img
                    width="100%"
                    height="39%"
                    src="../../assets/images/6.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />
                    <q-img
                    width="100%"
                    height="50%"
                    src="../../assets/images/5.png"
                    img-class="my-custom-image"
                    class="rounded-borders"
                    />
                </div>
             </div>
        </div>
        </div>

    </div>
  </template>
<script setup>
import FormInput from "../../partials/FormInput.vue";
import { ref } from "vue";
import rules from "../../composables/validation-rules";
import notify from "../../composables/notify";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
const userStore = useAuthStore();
const rememberme = ref(false);
const form = ref(null);
const loading = ref(false);
const router = useRouter();
const inputs = ref([
    {
        label: "Email",
        placeholder: "Enter your email",
        model: "email",
        type: "text",
        rules: [rules.required, rules.email],
    },
    {
        label: "Password",
        placeholder: "Enter your password",
        model: "password",
        type: "password",
        rules: [rules.required],
    }
    ,
    {
        label: "Confirm Password",
        placeholder: "Enter your password",
        model: "password_confirmation",
        type: "password",
        rules: [rules.required],
    }
]);


const model = ref({
    email: null,
    password: null,
    password: null,
    password_confirmation :null,
    name : 'Film Maker',
    user_type:2
});


const singup = () => {
  form.value.validate().then((success) => {
    console.log(notify);
    if (success) {
      loading.value = true;
      userStore.singup({ ...model.value })
        .then(() => {
          loading.value = false;
          notify("Film Maker is register Successfully", "positive", "check_circle");
          router.push({
            name: "step_form",
          });
        })
        .catch(() => {
          loading.value = false;
        });
    }
  });
};
</script>
<style lang="scss" scoped>
.login-page {
    height: 100vh;
    width: 100%;
}

.right_column {
    background: #101010;
}

.login-card {
    max-width: 380px;
    width: 100%;
}
.photo_grid
{
  width: 100%;
}
</style>
