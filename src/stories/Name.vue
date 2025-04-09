<script setup lang="ts">
import Input from './Input.vue';
const firstName = defineModel<string>('firstName');
const lastName = defineModel<string>('lastName');
</script>

<template>
  <Input
    label="First name"
    v-model="firstName"
  />
  <Input
    label="Last name"
    v-model="lastName"
  />
</template>
