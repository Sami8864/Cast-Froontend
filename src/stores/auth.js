import { defineStore } from 'pinia';
import axiosApiClient from "../axios";
import createFormData from '../composables/createFormData'

import notify from "../composables/notify";
export const useAuthStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      data: [],
      token: localStorage.getItem("token") || null, // Retrieve token from localStorage
    },
  }),
  getters: {},
  actions: {
    async login(data) {
      return axiosApiClient
        .post("/login", { ...data })
        .then((res) => {
          if (res.data.code == 403) {
            notify("Account Disabled", "negative", "check_circle");
            return res;
          };
          localStorage.setItem("token", res.data.data.access_token); // Store token in localStorage
          this.user.token = res.data.data.access_token
          this.user.data = res.data.data.user;
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async singup(data) {
      return axiosApiClient
        .post("/register", { ...data })
        .then((res) => {
          localStorage.setItem("token", res.data.data.access_token);
          this.user.token = res.data.data.access_token
          this.user.data = res.data.data.user;
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async completeProfile(data) {
      return axiosApiClient
        .post("/profile", { ...data })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async chnagePassword(data) {
      return axiosApiClient
        .post("/change-password", { data })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async ForgotPassword(data) {
      return axiosApiClient
        .post("/forgot-password", { ...data })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async VerifyEmail(data) {
      return axiosApiClient
        .post("/reset-password", { ...data })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async Ressetpassowrd(data) {
      return axiosApiClient
        .post("/reset-password", { ...data })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async deleteaccount() {
      return axiosApiClient
        .post("/filmmaker/delete-account")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async logout() {
      localStorage.removeItem('token');
      // Reset the token in the state
      this.user.token = null;
      return true;
    },
    async UpdateProfile(data) {
      let formdata = createFormData(data);
      return axiosApiClient
        .post(`filmmaker/updaProfileImage`, formdata)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async UpdateCover(data) {
      let formdata = createFormData(data);
      return axiosApiClient
        .post(`filmmaker/updacoverImage`, formdata)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async deleteCoverImage(data) {
      return axiosApiClient
        .get('/filmmaker/delete/cover/image')
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async deleteProfile(data) {
      return axiosApiClient
        .get('/filmmaker/delete/profile/image')
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async saveToken(data) {
      return axiosApiClient
        .post("/save-token", data)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  persist: true,
});
