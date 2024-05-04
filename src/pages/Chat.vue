<template>
   <div class="row">
      <div class="col-12">
         <div class="WAL position-relative " :style="style">
            <q-layout view="lHh Lpr lFf" class="WAL__layout " container>
               <q-header elevated>
                  <q-toolbar class="bg-grey-3 text-black">
                     <q-btn round flat>
                        <q-avatar v-if="conversations && conversations.profile_image">
                           <img :src="conversations?.profile_image ? conversations.profile_image : conversations?.profile_image">
                        </q-avatar>
                     </q-btn>
                     <span class="q-subtitle-1 q-pl-md">
                        {{ conversations?.name  }}

                     </span>
                     <q-space />
                     <q-btn round flat icon="more_vert">
                        <q-menu auto-close :offset="[110, 0]">
                           <q-list style="min-width: 150px">
                              <q-item clickable >
                                 <q-item-section @click=muteChat(conversations?.id)>Mute</q-item-section>
                              </q-item>
                              <q-item clickable >
                                 <q-item-section @click=unMuteChat(conversations?.id)>Unmute</q-item-section>
                              </q-item>
                           </q-list>
                        </q-menu>
                     </q-btn>
                  </q-toolbar>
               </q-header>
               <q-drawer v-model="leftDrawerOpen" show-if-above bordered :breakpoint="690">
                  <q-toolbar class="bg-grey-3">
                     <q-btn round flat>
                        <q-avatar>
                           <img
                              :src="form.profile_image ? form.profile_image : 'https://cdn.quasar.dev/img/boy-avatar.png'">
                        </q-avatar>
                     </q-btn>
                     <span class="q-subtitle-1 q-pl-md">
                        {{ form.full_name }}
                     </span>
                     <q-space />
                     <q-btn round flat>
                        <!-- <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M10 7V10M10 10V13M10 10H13M10 10H7M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                              stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> -->
                     </q-btn>
                     <!-- <q-btn round flat icon="more_vert">
                        <q-menu auto-close :offset="[110, 8]">
                           <q-list style="min-width: 150px">
                              <q-item clickable>
                                 <q-item-section>New Chat</q-item-section>
                              </q-item>
                           </q-list>
                        </q-menu>
                     </q-btn> -->
                  </q-toolbar>
                  <q-toolbar class="bg-grey-2">
                     <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search"
                     placeholder="Search conversation">
                     <template v-slot:prepend>
                     <q-icon name="search" />
                     </template>
                  </q-input>
                  </q-toolbar>
                  <q-scroll-area style="height: calc(100% - 100px)">
                     <q-list>
                        <q-item v-for="(conversation, id) in chatlist" :key="conversation.id" clickable v-ripple
                           @click="setCurrentConversation(conversation.id)">
                           <q-item-section avatar>
                              <q-avatar>
                                 <img :src="conversation.profile_image">
                              </q-avatar>
                           </q-item-section>
                           <q-item-section>
                              <q-item-label lines="1">
                                 {{ conversation.name }}
                              </q-item-label>
                              <q-item-label class="conversation__summary" caption>
                                 <q-icon name="check" v-if="conversation.sent" />
                                 <q-icon name="not_interested" v-if="conversation.deleted" />
                                 {{ conversation.latest_message }}
                              </q-item-label>
                           </q-item-section>
                           <q-item-section side>
                              <q-item-label caption>
                                 {{ formatTimestamp(conversation.created_at) }}
                              </q-item-label>

                     <q-btn round flat icon="mute" v-if="conversation.muted">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8.383 0.0761159C8.56569 0.15186 8.72181 0.280072 8.83163 0.444541C8.94146 0.60901 9.00005 0.80235 9 1.00012V13.0001C8.99996 13.1979 8.94129 13.3912 8.8314 13.5556C8.72152 13.72 8.56535 13.8481 8.38265 13.9238C8.19995 13.9995 7.99892 14.0193 7.80497 13.9807C7.61102 13.9421 7.43285 13.8469 7.293 13.7071L3.586 10.0001H1C0.734784 10.0001 0.48043 9.89476 0.292893 9.70722C0.105357 9.51969 0 9.26533 0 9.00012V5.00012C0 4.7349 0.105357 4.48055 0.292893 4.29301C0.48043 4.10547 0.734784 4.00012 1 4.00012H3.586L7.293 0.293116C7.43285 0.153183 7.61105 0.0578741 7.80508 0.0192471C7.9991 -0.0193799 8.20023 0.000411086 8.383 0.0761159ZM11.293 4.29312C11.4805 4.10565 11.7348 4.00033 12 4.00033C12.2652 4.00033 12.5195 4.10565 12.707 4.29312L14 5.58612L15.293 4.29312C15.3852 4.19761 15.4956 4.12142 15.6176 4.06901C15.7396 4.01661 15.8708 3.98902 16.0036 3.98787C16.1364 3.98671 16.2681 4.01201 16.391 4.06229C16.5138 4.11258 16.6255 4.18683 16.7194 4.28072C16.8133 4.37461 16.8875 4.48627 16.9378 4.60916C16.9881 4.73206 17.0134 4.86374 17.0123 4.99652C17.0111 5.1293 16.9835 5.26052 16.9311 5.38252C16.8787 5.50452 16.8025 5.61487 16.707 5.70712L15.414 7.00012L16.707 8.29312C16.8892 8.48172 16.99 8.73432 16.9877 8.99652C16.9854 9.25871 16.8802 9.50953 16.6948 9.69493C16.5094 9.88034 16.2586 9.98551 15.9964 9.98779C15.7342 9.99007 15.4816 9.88927 15.293 9.70712L14 8.41412L12.707 9.70712C12.5184 9.88927 12.2658 9.99007 12.0036 9.98779C11.7414 9.98551 11.4906 9.88034 11.3052 9.69493C11.1198 9.50953 11.0146 9.25871 11.0123 8.99652C11.01 8.73432 11.1108 8.48172 11.293 8.29312L12.586 7.00012L11.293 5.70712C11.1055 5.51959 11.0002 5.26528 11.0002 5.00012C11.0002 4.73495 11.1055 4.48064 11.293 4.29312Z" fill="#94A3B8"/>
                     </svg>

                     </q-btn>

                           </q-item-section>
                        </q-item>
                     </q-list>

                  </q-scroll-area>

               </q-drawer>

               <q-page-container class="bg-grey-2">
                <div
                v-if="letChat<150"
                color="warning"
                class="q-mb-md"
                icon="warning"
                style="display:flex;background:#ffe7bc;padding:2%;align-items:center"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
                User don't have sufficient balance to chat. Please ask user to recharge your account.
               </div>
                  <q-infinite-scroll class="q-px-md q-pt-sm" @load="onLoad" :offset="250"
                     style="display: flex; flex-direction: column-reverse; height: 100%; overflow: auto;"
                     :disable="scrollEnable" :debounce="500" ref="chatContainer">
                     <template v-slot:loading>
                        <div class="row justify-center q-my-md">
                           <q-spinner-dots color="primary" size="40px" />
                        </div>
                     </template>
                     <!-- Render messages in the correct order -->
                     <div v-if="chatLocked">
                       <template v-if="hasSufficientBalance">
        <div v-for="(message, index) in messages.slice()" :key="index">
          <q-chat-message :text="[message.message]" :stamp="formatTimestamp(message.created_at)"
                          :sent="currentUser.id === message.sender.id" />
        </div>
      </template>
      <template v-else>
        <div v-for="(message, index) in messages.slice()" :key="index">
          <q-chat-message :text="[message.message]" :stamp="formatTimestamp(message.created_at)"
                          sent />
        </div>
      </template>
                    </div>
                    <div v-else class="no-messages" style="display:flex;justify-content:center;margin-top:20%">
                      <p>You have not created any chats yet!</p>
                    </div>
                  </q-infinite-scroll>
               </q-page-container>
               <q-footer>
                  <q-toolbar class="bg-grey-3 text-black row">

                     <q-input rounded outlined dense @keyup.enter="sendMessage()" class="WAL__field col-grow q-mr-sm"
                        bg-color="white" v-model="message" placeholder="Type a message" :disable="!chatLocked"/>
                        <q-btn @click="sendMessage()" class="q-ml-sm" label="Send" color="primary" :disable="!chatLocked">
                          <template v-if="isLoading">
                            <q-spinner-ios class="on-left" />
                          </template>
                        </q-btn>
                  </q-toolbar>
               </q-footer>
            </q-layout>
         </div>
      </div>
   </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { ref, computed, onMounted, watch} from 'vue'
import Pusher from 'pusher-js';
// import {Echo} from 'laravel-echo';
import { useRouter } from "vue-router";
import { useChatStore } from "../stores/chat";
import { useAuthStore } from "../stores/auth";
import { useDataStore } from "../stores/data";
import notify from "../composables/notify";

const chartStore = useChatStore();
const userStore = useAuthStore();
const route = useRouter();
const dataStore = useDataStore();
const $q = useQuasar();
const leftDrawerOpen = ref(false)
const search = ref('')
const messages = ref([]);
const message = ref('');
const currentUser = ref('');
const otherUser = ref(null);
const conversations = ref([]);
const currentConversationIndex = ref(0)
const chatContainer = ref(null); // Ref to chat container
const channel_id = ref(0);
const chatContainerRef = ref(null);
const scrollEnable = ref(true);
const isLoading = ref(false);

const chatLocked=ref(false);
const letChat=ref("");

const hasSufficientBalance = computed(() => letChat.value >= 150);

// Disable send button and input field when the user doesn't have sufficient balance
const isChatDisabled = computed(() => !hasSufficientBalance.value);

const muteChat = (data)=>{
   console.log('id', data);
   chartStore.mutechat(data).then( (res) => {
      getChats();
      console.log('id', data);
      notify("Chat  Mute  Successfully", "positive", "check_circle");
   })
}
const unMuteChat = (data)=>{
   console.log('id', data);
   chartStore.unmutechat(data).then( (res) => {
      getChats();
      notify("Chat  UnMute  Successfully", "positive", "check_circle");
      console.log('id', data);
   })
}
// Function to scroll to the bottom
const scrollBottom = () => {
  if (chatContainer.value) {
    const container = chatContainer.value.$el;
    container.scrollTop = container.scrollHeight;
  }
};

// Example function to trigger scrollBottom
const someFunctionThatTriggersScrollBottom = () => {
  scrollBottom(); // Call scrollBottom when needed
};
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
const getFilmMaker = () => {
  dataStore.getFilmMakerProfile().then((res) => {
    console.log('response in function', res.data);
    form.value = res.data;
  });
}
const formatTimestamp = (timestamp) => {
   const now = new Date();
   const messageTime = new Date(timestamp);
   const diff = Math.floor((now - messageTime) / 1000); // Difference in seconds

   // Define time intervals in seconds
   const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
   };

   for (const [intervalName, intervalSeconds] of Object.entries(intervals)) {
      const intervalCount = Math.floor(diff / intervalSeconds);
      if (intervalCount >= 1) {
         return intervalCount === 1 ? `1 ${intervalName} ago` : `${intervalCount} ${intervalName}s ago`;
      }
   }

   return 'Just now'; // Default case if timestamp is within seconds
};
const onLoad = () => {
   chartStore.getconversations({ ...currentConversation.value }).then((res) => {
      console.log("load");
      messages.value = messages.value.concat(res.messages);
      if (res.data.data.length < 3) {
         scrollEnable.value = true;
      } else {
         scrollEnable.value = false;
      }
      done();
   }).catch((err) => {
      console.error('Error fetching conversation:', err);
      // Handle error appropriately, e.g., show error message to the user
   });
};

const currentConversation = computed(() => {
   console.log('conversations.value.length', conversations.value.length);
   if (conversations.value.length > 0) {
      console.log('value aaaa', conversations.value[currentConversationIndex.value]);

   }
   return null;
});
const style = computed(() => ({
   height: $q.screen.height-50 + 'px'
}))
const toggleLeftDrawer = () => {
   leftDrawerOpen.value = !leftDrawerOpen.value
}
const scrollToBottom = () => {
   if (chatContainerRef.value) {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
   }
};





const sendMessage = () => {

  isLoading.value = true;
   // Access the array from the reactive ref if necessary: chatlist.value
   // Then, use Array.prototype.find to find an item based on its id
   const findItemById = (id) => {
      return chatlist.value.find(item => item.id === id);
   };
   const idToFind = currentConversationIndex.value; // For example, you want to find the item with id 2
   const foundItem = findItemById(idToFind);
   if (foundItem) {
      console.log('Found item:', foundItem.channel_id);
   } else {
      console.log('Item with id', idToFind, 'not found.');
   }
   chartStore.sendMessage({ id: currentConversationIndex.value, message: message.value, channel_id: foundItem.channel_id }).then((res) => {
      message.value = null;

    isLoading.value = false;
      // messages.value.push(res.data);
      console.log('message sent', messages.value);
   }).catch((err) => {

    isLoading.value = false;
      throw err;
   });
};
;
const chatlist = ref([]);
const getChats = ()=> {
   try {
       chartStore.getchats().then( (res) => {
         chatlist.value = res.data;
         if(res.data.length>0){
          chatLocked.value=true;
         };
         console.log(chatLocked.value);
         console.log('chatlist.value[0]' , chatlist.value[0].id);
         setCurrentConversation(chatlist.value[0].id);
      });
   } catch (error) {
      console.error(error);
   }
}
const setCurrentConversation = (index) => {
   console.log('index' , index);
   if (currentConversationIndex.value != index) {
      scrollToBottom();
      console.log('index', index - 1);
      scrollEnable.value = true;
      currentConversationIndex.value = index ;
      console.log('value', currentConversationIndex.value);
      conversations.value = chatlist.value.map(conversation => {
         if (conversation.id === currentConversationIndex.value) {
            return conversation;
         }
      }).filter(Boolean)[0];
      console.log('converstion value set', conversations.value);
      console.log('my conversations anre now letting to be '+conversations.value.id);
      //chartStore.getChats().then((res)=>{console.log('myResponse is '+res.data.battery_level)});
      chartStore.getconversations(index).then((res) => {
         console.log('chats in chat page ', res.messages);
         console.log('messsage from store', chartStore.messages);


         messages.value = res.messages;
         currentUser.value = res.current_user;
         console.log('current user value ', chartStore.id);
         otherUser.value = res.user;
         console.log('Other user value ', otherUser.value.id);

         // Subscribe to Pusher channel after retrieving channel_id
         const pusher = new Pusher('aab619730d10cbbda792', {
            cluster: 'ap4',
         });
         console.log('index', index);
         const findItemById = (id) => {
            return chatlist.value.find(item => item.id === id);
         };
         const idToFind = index;
         const foundItem = findItemById(idToFind);
         if (foundItem) {
            console.log('Found item:', foundItem.channel_id);
            const channel = pusher.subscribe(foundItem.channel_id);

            // Define a handler for the event
            channel.bind('users.chat', data => {
               // Handle the received data here
               console.log('Received data:', data);

               // Example: Update messages array
               messages.value.unshift(data);
               // messages.value.push(data); // Assuming data is in the expected format
            });
         } else {
            console.log('Item with id', idToFind, 'not found.');
         }
      }).catch((err) => {
         console.error('Error fetching conversation:', err);
      });
      chartStore.getBattery().then((res)=>{
        letChat.value=res.battery_level;
        console.log(letChat.value);
      }).catch((err) => {
         console.error('Error fetching conversation:', err);
      });;
   }
};
onMounted(async () => {
   getFilmMaker(); // Assuming getFilmMaker is an asynchronous function

   getChats(); // Wait for getChats to complete
});

let timeoutId = null;
watch(search, (newValue, oldValue) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const searchQuery = newValue.toLowerCase().trim();
    if (!searchQuery) {
      // If the search query is empty, reset the filtered list to the original chat list
      filteredChatList.value = chatlist.value;
    } else {
      // Otherwise, perform the filtering based on the search query
      filteredChatList.value = chatlist.value.filter(conversation =>

        conversation.name.toLowerCase().includes(searchQuery)
      );
    }
  }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds)
}, { deep: true });
const filteredChatList = ref(chatlist);
// Additionally, handle the scenario when the search query is cleared
watch(search, (newValue, oldValue) => {
  if (!newValue && oldValue) {
    // If the search query is cleared, reset the filtered list to the original chat list
    filteredChatList.value = chatlist.value;
    getChats()
  }
});

</script>
<style scoped>
.WAL {}

.conversation__summary {
   margin-top: 4px;
}
.q-avatar__content, .q-avatar img:not(.q-icon):not(.q-img__image)
{
   object-fit: cover !important;
}
.conversation__more {
   margin-top: 0 !important;
   font-size: 1.4rem;
}
:deep(.q-message-text--sent){
   color: #000 !important;
}
:deep(.q-message-text--sent .q-message-text-content){
   color: #fff !important;
   opacity: 1;
}
:deep( .q-message-text--sent .q-message-stamp)
{
   opacity: 1;
}
:deep(.q-message-text--received)
{
   color: rgba(36, 109, 168, 1) !important;
}
:deep(.q-message-text--received .q-message-text-content){
   color: #fff !important;
   opacity: 1;
}
:deep( .q-message-text--received .q-message-stamp)
{
   opacity: 1;
}
svg{
  margin-right:1%
}
</style>
