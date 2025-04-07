<script setup lang="ts">
import { useId } from 'vue';

const id = useId();

const firstName = defineModel<string>('firstName');
const lastName = defineModel<string>('lastName');
const firstNameId = `${id}-first-name`;
const lastNameId = `${id}-last-name`;
</script>

<template>
  <div>
    <label :for="firstNameId">First name</label>
    <input
      :id="firstNameId"
      v-model="firstName"
      type="text"
    />
  </div>
  <div>
    <label :for="lastNameId">Last name</label>
    <input
      :id="lastNameId"
      v-model="lastName"
      type="text"
    />
  </div>
</template>
