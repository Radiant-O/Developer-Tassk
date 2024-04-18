<template>
  <div class="inputFormContainer">
      <div class="container">

        <h1 class="formHeader">Input Form</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="formField">
        <label for="firstName" class="field-label">First Name:</label>
        <input class="field" type="text" id="firstName" v-model.trim="firstName" required>
      </div>
      <div class="formField">
        <label for="lastName" class="field-label">Last Name:</label>
        <input class="field" type="text" id="lastName" v-model.trim="lastName" required>
      </div>
      <button type="submit" class="btn btn-teal">Submit</button>
    </form>
    
   <div class="tableContainer">
    <table class="formTable">
      <thead>
        <tr>
          <th class="tableHeader">First Name</th>
          <th class="tableHeader">Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index" class="box">
          <td class="odd">{{ user.firstName }}</td>
          <td class="even">{{ user.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from "../stores";

export default {
  setup() {
    const store = useUserStore();
    const firstName = ref('');
    const lastName = ref('');
    

    const handleSubmit = () => {
      if (firstName.value && lastName.value) {
        const userData = {
          firstName: firstName.value,
          lastName: lastName.value
        };
        //UserData is added to the store 
        store.addUser(userData);
        // console.log('User added to store:', store.users);
        clearForm();
      } else {
        alert('Please enter both first name and last name.');
      }
    };

    const clearForm = () => {
      firstName.value = '';
      lastName.value = '';
    };

    //  computed property is used to directly reference the users array from the store
    const users = computed(() => store.users);


    // watch(() => store.users, (newValue) => {
    //   users.value = newValue;
    // });

    return { firstName, lastName, users, handleSubmit, clearForm };
  }
};
</script>
