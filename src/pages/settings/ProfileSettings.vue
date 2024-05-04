<template>
    <div class="row ">
        <div class="col WAL position-relative" :style="style">
            <q-layout view="lHh Lpr lFf" class="WAL__layout " container>
                <q-drawer v-model="drawer" show-if-above :width="280" :breakpoint="400">
                    <q-scroll-area style="height: calc(100% - 150px); margin-top: 72px; border-right: 1px solid #ddd">
                        <q-list padding>
                            <q-item clickable v-ripple :to="{ name: 'account' }" :class="{ 'active': isActive }">
                                <q-item-section avatar class="justify-start setting_sidebar_icon">
                                    <q-avatar size="md">
                                        <!-- Conditional rendering of SVG icons based on isActive state -->
                                        <svg class="active_icon" width="30" height="30" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_11373_85401)">
                                                <path
                                                    d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10V10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                                                    stroke="#246DA8" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_11373_85401">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="30" class="nonactive_icon" height="30" viewBox="0 0 24 24"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_11373_85472)">
                                                <path
                                                    d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10V10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                                                    stroke="#94A3B8" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_11373_85472">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                    Account
                                    <p class="text-dar-grey">Manage your public profile and private information</p>
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple to="/settings/security">
                                <q-item-section avatar class="justify-start setting_sidebar_icon">
                                    <q-avatar size="md">
                                        <svg width="30" class="nonactive_icon" height="30" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_11373_85408)">
                                                <path
                                                    d="M12 15V17M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21ZM16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11H16Z"
                                                    stroke="#94A3B8" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_11373_85408">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="24"  class="active_icon" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_11373_85479)">
                                                <path
                                                    d="M12 15V17M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21ZM16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11H16Z"
                                                    stroke="#246DA8" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_11373_85479">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                    Security
                                    <p class="text-dar-grey">Manage your password and 2-step verification preferences
                                    </p>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-scroll-area>
                    <div class="absolute-top bg-grey-1 pa-20  rounded-borders	">
                        <div class="text-h5 text-weight-bold">Settings</div>
                    </div>
                </q-drawer>
                <q-page-container>
                    <q-page padding>
                        <router-view />
                    </q-page>
                </q-page-container>
            </q-layout>
        </div>
    </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
const $q = useQuasar()
const style = computed(() => ({
    height: $q.screen.height-50 + 'px'
}))






</script>
<style scoped>
:deep(.q-item .setting_sidebar_icon) {
    justify-content: flex-start !important;
}

:deep(.q-item.q-router-link--active, .q-item--active) .active_icon {
    display: block;
    /* fill: #1976D2; */
}

:deep(.q-item) .nonactive_icon {
    display: block;
    /* fill: #1976D2; */
}

:deep(.q-item) .active_icon {
    display: none;
}
:deep[data-v-89131f52]
{
    margin-top: 0px !important;
}
</style>