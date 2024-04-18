<template>
 <div class="inputFormContainer">
      <div class="container">
    <h2 class="formHeader">Items Page</h2>
    <DataComponent :headers="['Item']" :data="items"></DataComponent>
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
      items: ['Mango', 'Cashew', 'Apple']
    };
  }
};
</script>
