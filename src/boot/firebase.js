// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
import { useAuthStore } from "../stores/auth";
const userStore = useAuthStore();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh03RKVrg-ANQgfaqvarnIAtXn2Ysub-U",
  authDomain: "casttypes-76ae6.firebaseapp.com",
  projectId: "casttypes-76ae6",
  storageBucket: "casttypes-76ae6.appspot.com",
  messagingSenderId: "257814638429",
  appId: "1:257814638429:web:c63eb91788d3b3e21b02b4",
  measurementId: "G-WN7VZMFBK8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BHOAUHMhcjQExiCCx6zl89lJUMzCjn9U6AsIB_G56wp9FyPNvpp3x2b4Se3Ls_dJbK55OIpu0GbK_7ZEZxGsW3Q",
})
  .then((currentToken) => {
    
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      userStore.saveToken({ token: currentToken })  // <-- Pass currentToken here
        .then(() => {

          notify("Token Saved Successfully", "positive", "check_circle");
        })
        .catch(() => {
     
        });
      console.log({ currentToken });
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
// Initialize Firebase
