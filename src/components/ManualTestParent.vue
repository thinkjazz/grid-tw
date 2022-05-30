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
          {
            title: "Login test",
            steps: "Check step1\nCheck step2",
            completed: true
          },
          {
            title: "Registration test",
            steps: "step1\nstep2",
           completed: false
          },
        ],
      },
    };
  },

};
</script>

<style>
</style>