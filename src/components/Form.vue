
<template>
    <form @submit.prevent="submitForm">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required>
  
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required>
  
      <button type="submit">Submit</button>
    </form>

    <userInfo :firstName="firstName" :lastName="lastName" />
  <dataVue :title="'Users'" :items="users" />
</template>
  
<script setup>
  import { ref } from 'vue'; 
  import { useStore } from '../stores/index'
  import userInfo from './userInfo.vue';
  import dataVue from './data.vue';

  const store = useStore();
  const firstName = ref('');
 const lastName = ref('');
  
  //  const emit = defineEmits(['submit']);
  
  // const submitForm = () => {
  //   emit('submit', { firstName: firstName.value, lastName: lastName.value });
  //   firstName.value = '';
  //   lastName.value = '';
  // };

  const submitForm = () => {
  const userData = { firstName: firstName.value, lastName: lastName.value }
  store.addUser(userData)
  firstName.value = ''
  lastName.value = ''
}
</script>
  