<template>
    <div class="inputFormContainer">
      <div class="container">
      <h2 class="formHeader">Students Page</h2>
      <DataComponent :headers="['Student Name']" :data="students"></DataComponent>
    </div>
    </div>
  </template>
  
  <script>
  import DataComponent from './dataComponent.vue';
  export default {
    components: {
      DataComponent
  },
    data() {
      return {
        students: ['James', 'Paul', 'Peter']
      };
    }
  };
  </script>
  