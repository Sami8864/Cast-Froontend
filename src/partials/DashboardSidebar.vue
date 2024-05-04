<template lang="">
  <q-drawer :value="modalValue" @update:modelValue="$emit('update:modelValue', $event)" :behavior="$q.screen.lt.md ? 'mobile' : 'desktop'" side="left" bordered>
      <!-- drawer content -->
      <div class="mb-15" v-for="(nav, index) in navs" :key="index">
        <q-avatar  size="100px" class="pl-15" >
              <template #default>
                <q-img src="../assets/black_logo.svg" class="weight: "></q-img>
              </template>
</q-avatar>
<q-list bordered>
  <q-item clickable v-ripple to="/feed" class="mt-10">
    <q-item-section avatar>
      <q-img src="../assets/feed.svg" class="weight: "></q-img>
    </q-item-section>

    <q-item-section>Feed</q-item-section>
  </q-item>

  <q-item clickable v-ripple to="/saved" class="mt-10">
    <q-item-section avatar>
      <q-img src="../assets/saved.svg" class="weight: "></q-img>
    </q-item-section>

    <q-item-section>Saved</q-item-section>
  </q-item>

  <q-item clickable v-ripple to="/chat" class="mt-10">
    <q-item-section avatar>
      <q-img src="../assets/messaging.svg" class="weight: "></q-img>
    </q-item-section>

    <q-item-section>Messaging</q-item-section>
  </q-item>

  <q-item clickable v-ripple to="/settings/account" class="mt-10">
    <q-item-section avatar>
      <q-img src="../assets/setting.svg" class="weight: "></q-img>
    </q-item-section>

    <q-item-section>Settings</q-item-section>
  </q-item>
</q-list>
</div>

</q-drawer>
</template>
<script setup>

defineEmits(['update:modelValue'])
defineProps({
  modalValue: {
    type: Boolean,
    default: true,
  },
  navs: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
:deep(.q-drawer .q-drawer__content) {
  padding: 14px;
}

:deep(.q-drawer) {
  width: 300px !important;
  background-color: #101010;
}

:deep(.q-router-link--exact-active .q-focus-helper) {
  background: #ebf0ee !important;
  border-radius: 4px;
  opacity: 0.5;
}

.q-item__section--avatar,
:deep(.q-item__section--avatar) {
  min-width: 45px !important;
}

:deep(.q-item) {
  color: #fff;
}
</style>