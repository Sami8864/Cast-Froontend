import { defineStore } from "pinia";
import Pusher from "pusher-js";
import axiosApiClient from "../axios";
export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    messages: [],
    pusher: null, // Store the Pusher instance
    channel: null, // Store the channel instance
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
    async initializePusher() {
      console.log('Initializing Pusher...');
      this.pusher = new Pusher('aab619730d10cbbda792', {
        cluster: 'ap4',
        encrypted: true
      });
    },
    disconnectPusher() {
      // Unsubscribe from the channel
      if (this.channel) {
        this.channel.unbind(); // Unbind all event listeners
        this.channel.unsubscribe(); // Unsubscribe from the channel
      }
      // Disconnect Pusher
      if (this.pusher) {
        this.pusher.disconnect();
      }
    },

    async getconversations(index) {
      return axiosApiClient
        .get(`/conversation/${index}`)
        .then((res) => {
          console.log("all chats", res.data);
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async createChat(data) {
      return axiosApiClient
        .post('getChannelId', data)
        .then((res) => {
          console.log("chat  Created", res.data);
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    async getchats() {
      return axiosApiClient
        .get("/conversations")
        .then((res) => {
          console.log("all chats", res.data.data);
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    },

    async sendMessage(data) {
      try {
        if (!this.pusher) {
          console.warn('Pusher is not initialized. Initializing...');
          await this.initializePusher();
        }
        this.channel = this.pusher.subscribe(data.channel_id);
        console.log('Subscribed to channel:', this.channel);
        console.log('Sending message:', data);
        const res = await axiosApiClient.post(`/send/message/${data.id}`,  data );
        return res.data;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    },
    async mutechat(data) {
      try {
        const res = await axiosApiClient.get(`chat/mute/${data}`);
        return res.data;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    },
    async unmutechat(data) {
      try {
        const res = await axiosApiClient.get(`chat/unmute/${data}`);
        return res.data;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    },
  },

  hooks: {
    beforeMount() {
      this.initializePusher();
    },
    beforeUnmount() {
      this.disconnectPusher();
    },
  },

});
