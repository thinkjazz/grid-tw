<template>
  <section class="tests">
    <h1>
      tests
      <transition name="fade">

      </transition>
    </h1>
    <div class="flex flex-row">
      <input
        type="text"
        class="input-group-field"
        v-model="newTest"
        @keyup.enter="addTest"
        placeholder="New test"
      />
      <textarea
        v-model="newText"
        @keyup.enter="addTest"
        placeholder="New textarea"
      >
      </textarea>
      <span class="input-group-button">
        <button @click="addTest" class="button">
          <i class="fa fa-plus"></i> Add
        </button>
      </span>
    </div>

    <div class="tests__clear button-group pull-right">

      <button class="button alert small" @click="clearAll">
        <i class="fa fa-trash"></i> Clear All
      </button>
    </div>

   <ul>
      <TestListItem
        v-for="(test, index) in tests"
        @remove="remove(index)"
        @edit="edit(index)"
        :test="test"
        :key="test.id"
      >
      </TestListItem>
   </ul>


  </section>
</template>

<script>
import TestListItem from "./TestListItem.vue";

export default {
  components: {
    TestListItem,
  },
  props: {
    tests: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newTest: "",
      newText: "",
    };
  },
  computed: {},

  methods: {
    addTest() {
      if (this.newTest && this.newText) {
        this.tests.push({
          id: Date.now(),
          title: this.newTest,
          steps: this.newText,
        });
        this.newTest = "";
        this.newText = "";
      }
    },

    remove(test) {
      this.tests.splice(test, 1);
    },
    edit(test) {
      this.beforeEditCacheTitle = test.title;
      this.beforeEditCacheStep = test.step;
      this.editedTest = test;
      console.log("edit(test) function calling:", this.editedTest, this.tests);
    },
    doneEdit(test) {
      this.editedTest = null;
      test.title = test.title.trim();
      test.step = test.step.trim();
      console.log("doneEdit(test) function calling:",  this.test.title, this.test.step);

      if (!test.title || !test.step) {
        this.remove(test);
      }
    },
    cancelEdit(test) {
      this.editedTodo = null;
      test.title = this.beforeEditCacheTitle;
      test.step = this.beforeEditCacheStep;
      console.log("cancelEdit(test) function calling:",  this.test.title, this.test.step);
    },
    clearAll() {
      this.tests = [];
    },
  },
};
</script>

<style></style>
