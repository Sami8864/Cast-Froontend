import axios from "axios";
import router from "../router";
import notify from "../composables/notify";
import { useAuthStore } from "../stores/auth";
const axiosApiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});
// Add a request interceptor
axiosApiClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.user.token;
    if (token) {
      // If a token exists, add it to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const userStore = useAuthStore();
    if (error.response.status == 422) {
      notify(error.response?.data?.error, "negative", "check_circle");
      // for (const [key, value] of Object.entries(error.response?.data?.error)) {
      //   key;
      //   notify(value, "negative", "error");
      // }
    } else if (error.response.status == 401) {
      userStore.logout();
      router.push({ path: "/Signin" });
      notify("Unauthenticated user", "negative", "error");
    } else if (error.response.status == 500) {
      notify("Internal server error", "negative", "error");
    } else if (error.response.status == 0) {
      notify("Server not responding", "negative", "error");
    } else if (error.response.status == 403) {
      notify("Unauthorized action", "negative", "error");
    }
    throw error;
  }
);
export default axiosApiClient;
