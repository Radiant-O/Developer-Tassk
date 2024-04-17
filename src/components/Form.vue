<!-- components/UserForm.vue -->
<template>
    <form @submit.prevent="submitForm">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required>
  
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required>
  
      <button type="submit">Submit</button>
    </form>
</template>
  
<script setup>
  import { ref, defineEmit } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  
  const emit = defineEmit(['submit']);
  
  const submitForm = () => {
    emit('submit', { firstName: firstName.value, lastName: lastName.value });
    firstName.value = '';
    lastName.value = '';
  };
</script>
  