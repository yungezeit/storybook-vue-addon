<script setup lang="ts">
import { useId } from 'vue';

type InputProps = {
  /** The label of the input */
  label: string;
};

defineProps<InputProps>();

const id = useId();
const model = defineModel<string>();
</script>

<template>
  <div class="input-container">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id
      v-model="model"
      type="text"
    />
  </div>
</template>

<style>
.input-container {
  margin-block-end: 1rem;

  & label {
    margin-inline-end: 1rem;
  }
}
</style>
