
<template>
    <div>
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
          </tr>
     </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const { title, items } = defineProps(['title', 'items']);
  </script>
  