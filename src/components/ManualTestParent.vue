<template>
  <div>
<!-- родительский контейнер тестов -->
 <!-- состоящий из листа тестов и айтема удаления теста -->
   <ManualTestChildList :tests="options.manualTests"></ManualTestChildList>
  </div>
</template>

<script>
import ManualTestChildList from './ManualTestChildList.vue';
export default {
  components: {
    ManualTestChildList,
  },
  data() {
    return {
      options: {
        manualTests: [

        ],
      },
    };
  },

};
</script>

<style>
</style>