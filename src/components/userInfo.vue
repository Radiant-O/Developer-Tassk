<template>
    <div>
      <h2>User Info</h2>
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ lastName }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const { firstName, lastName } = defineProps(['firstName', 'lastName'])
  </script>
  