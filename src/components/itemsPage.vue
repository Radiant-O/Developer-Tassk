<template>
 <div class="inputFormContainer">
      <div class="container">
    <h2 class="formHeader">Items Page</h2>
    <DataTable :headers="['Item']" :data="items"></DataTable>
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
      items: ['Mango', 'Cashew', 'Apple']
    };
  }
};
</script>
