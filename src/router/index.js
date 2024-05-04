import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { requiresAuth: false },
      component: () => import('pages/MainPanel.vue'),
      redirect: () => { return { path: '/feed' } },
      children: [
        {
          path: 'feed',
          name: 'feed',
          meta: { requiresAuth: true },
          component: () => import('pages/Feed.vue'),
        },
        {
          path: 'saved',
          name: 'Saved',
          meta: { requiresAuth: true },
          component: () => import('pages/Saved.vue'),
        },
        {
          path: 'chat',
          name: 'chat',
          meta: { requiresAuth: true },
          component: () => import('pages/Chat.vue'),
        }
        ,
        {
          path: 'settings',
          name: 'settings',
          meta: { requiresAuth: true },
          component: () => import('pages/settings/ProfileSettings.vue'),
          children: [
            {
              path: 'account',
              name: 'account',
              meta: { requiresAuth: true },
              component: () => import('pages/settings/AccountProfile.vue'),
            },
            {
              path: 'security',
              name: 'security',
              meta: { requiresAuth: true },
              component: () => import('pages/settings/Security.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '/Signin',
      name: 'Signin',
      meta: { isGuest: true },
      component: () => import('pages/auth/Signin.vue'),
    },
    {
      path: '/forgot',
      name: 'forgot',
      meta: { isGuest: false },
      component: () => import('pages/auth/ForgotPassword.vue'),
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      meta: { isGuest: false },
      component: () => import('pages/auth/VerifyEmail.vue'),
    },
    ,
    {
      path: '/reset-password',
      name: 'reset-password',
      meta: { isGuest: false },
      component: () => import('pages/auth/ResetPassword.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { isGuest: true },
      component: () => import('pages/auth/Signup.vue'),
    },
    {
      path: '/complete-profile',
      name: 'step_form',
      meta: { requiresAuth: true },
      component: () => import('pages/auth/CompleteProile.vue'),
    },
    {
      path: '/AppPolicy',
      name: 'AppPolicy',
      meta: { isGuest: false },
      component: () => import('pages/AppPolicy.vue'),
    },
    {
      path: '/AppTerms',
      name: 'AppTerms',
      meta: { isGuest: false },
      component: () => import('pages/AppTerms.vue'),
    },
  ]
})
// const userStore = useAuthStore();
router.beforeEach((to, from, next) => {
  const userStore = useAuthStore();

  if (to.meta.requiresAuth && !userStore.user.token) {
    console.log('token', userStore.user.token)
    console.log('True');
    next({ name: "Signin" });
  } else if (to.meta.isGuest && userStore.user.token) {
    console.log('token', userStore.user.token);
    console.log('False');
    next({ name: "step_form" });
  } else {
    next();
  }
});

function parseToken(token) {
  const payloadBase64 = token.split('.')[1]; // Extract payload from token
  const payload = JSON.parse(atob(payloadBase64)); // Decode base64 and parse JSON

  return payload;
}

const isTokenExpired = (token) => {
  if (!token) {
    return true; // Token not found or empty
  }

  const tokenData = parseToken(token); // Implement this function to parse token data
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  return tokenData.exp < currentTime; // Compare expiration time with current time
}
export default router
