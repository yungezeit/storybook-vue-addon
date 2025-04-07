<script setup lang="ts">
import { useId } from 'vue';

type InputProps = {
  /** The label of the input */
  label: string,
};

defineProps<InputProps>();

const id = useId();
const model = defineModel<string>();
</script>

<template>
  <label :for="id">
    {{  label }}
  </label>
  <input
    :id
    v-model="model"
    type="text"
  />
</template>