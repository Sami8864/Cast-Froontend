import { defineStore } from 'pinia';
import axiosApiClient from "../axios";
export const useDataStore = defineStore({
  id: "search",
  state: () => ({
    searchText: '',
    searchResults: [],
    loadingState: false,
    profileImage: null
  }),
  getters: {},
  actions: {
      async getfeed() {
        return axiosApiClient.get("/get-all-profiles").then((res) => {
            console.log('user posts', res.data.data);
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      async search (payload){
        return axiosApiClient.post('/search', {...payload}).then((res) => {
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      async saveProfile (payload){
        return axiosApiClient.post('/save-feed', {...payload}).then((res) => {
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      async searchByName (payload){
        return axiosApiClient.post('/actor/search-name', {...payload}).then((res) => {
          return res.data;
        }).catch((err) => {
          throw err;
        })
      
      },
      async getSavedFeed() {
        return axiosApiClient.get("/saved-feeds").then((res) => {
            console.log('user posts', res.data.data);
            return res.data;
          })
          .catch((err) => {
            throw err;
          });
      },
      async unSaveProfile (payload){
        return axiosApiClient.post('/delete-feed', {...payload}).then((res) => {
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      async getProfile (payload){
        return axiosApiClient.post('/actor/profile/details', {...payload}).then((res) => {
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      async getUnions (){
        return axiosApiClient.get('/unions').then((res) => {
          console.log('data' ,res.data.data );
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      async getFilmMakerProfile (){
        return axiosApiClient.get('/filmmaker/profile').then((res) => {
          console.log('data' ,res.data.data );
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
      setProfileImage(profileImage) {
        this.profileImage = profileImage;
      },
      async getNotification (){
        return axiosApiClient.get('/notifications').then((res) => {
          console.log('data' ,res.data.data );
          return res.data;
        }).catch((err) => {
          throw err;
        })
      },
  },
  persist: true,
});
