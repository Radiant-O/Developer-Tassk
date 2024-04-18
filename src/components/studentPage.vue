<template>
    <div class="inputFormContainer">
      <div class="container">
      <h2 class="formHeader">Students Page</h2>
      <data-table :headers="['Student Name']" :data="students"></data-table>
    </div>
    </div>
  </template>
  
  <script>
  import DataTable from './DataTable.vue';
  export default {
    components: {
    DataTable
  },
    data() {
      return {
        students: ['James', 'Paul', 'Peter']
      };
    }
  };
  </script>
  