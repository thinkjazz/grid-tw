<template>
  <div>
<!-- родительский контейнер тестов -->
 <!-- состоящий из листа тестов и айтема удаления теста -->
   <TestList :tests="tests"></TestList>
  </div>
</template>

<script>
const STORAGE_KEY = 'manualTests';

import TestList from './TestList.vue';
export default {
  components: {
    TestList,
  },
  // inital state of manualTests
  data() {
    return {
      tests: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
      editedTest: null,

      // options: {
      //   manualTests: [],
      // },
    }
  },
  // watch for changes to be saved in the localStorage
  watch: {
    tests: {
      handler(tests) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
      },
      deep: true,
    },
  },


};
</script>

<style>
</style>