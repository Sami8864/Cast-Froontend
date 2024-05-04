<template lang="">
    <div class="row login-page">
        <div class="col-6" style="display: flex;justify-content: center;align-content: center;align-items: center;">
            <div class="login-card">
        <q-form ref="form" :greedy="true">
          <q-card-section class="row justify-first items-center q-gutter-x-sm pb-2">
            <q-avatar  size="100px" >
              <template #default>
                <q-img src="../../assets/logo.svg" class="weight: "></q-img>
              </template>
            </q-avatar>
          </q-card-section>
          <q-card-section class="pt-0 pb-0 ">
            <h5 class="text-first text-dark mb-0 text-weight-bold mt-0">
                Forgot Password
            </h5>
          </q-card-section>
         <q-space></q-space>
          <q-card-section class="mt-20 px-20 pb-40 pt-5">
            <div class="row">
              <div
                class="col-12 mb-0" v-for="(input, index) in inputs"  :key="index">
                <FormInput class="login-input" @enter="logging"
                :type="input.type"
                 v-model="model[input.model]"
                 :detail="input"
                  height="40px"
                ></FormInput>

              </div>
              <router-link to="Signin" style="color:#246DA8;text-decoration:none" > Go back to Sign In Page!</router-link>

              <div class="row justify-between col-12 mt-40">
                <q-btn class="full-width"
                  :loading="loading"
                  rounded
                  @click=forgotpassword()
                  color="black"
                  label="Forgot Password"
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
const form = ref(null);
const loading = ref(false);
const inputs = ref([
    {
        label: "Email address * ",
        placeholder: "Enter your email",
        model: "email",
        type: "email",
        rules: [rules.required, rules.email],
    }
]);
const router = useRouter();
const rememberme = ref(false);
const model = ref({
    email: null,
});
const forgotpassword = () => {
  form.value.validate().then((success) => {
    if (success) {
      loading.value = true;
      userStore.ForgotPassword({ ...model.value })
        .then(() => {
          loading.value = false;
          notify("Verification code sent to your email", "positive", "check_circle");

          router.push('/verify-email');
        })
        .catch(() => {
          notify("Please enter a valid email", "negative", "error");
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
