<script setup lang="ts">

type InputProps = {
  /** The label of the input */
  label: string,
};

defineProps<InputProps>();

const model = defineModel<string>();
</script>

<template>
  <input
    v-model="model"
    type="text"
  />
</template>