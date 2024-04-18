<template>
    <header>
      <nav class="nav">
        <ul class="navContainer">
          
          <li><router-link to="/" class="navLink">User Form</router-link></li>
          <li><router-link to="/items" class="navLink">Items</router-link></li>
          <li><router-link to="/students" class="navLink">Students</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  /* Add styling for your header */
  </style>
  