
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('main', () => {
  const users = ref([]);

  const addUser = (user) => {
    users.value.push(user);
  };

  // const clearUserData = () => {
  //   users.value = [];
  // };

  return {
    users,
    addUser,
    // clearUserData
  };
});
