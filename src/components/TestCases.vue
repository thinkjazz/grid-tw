<template>
  <div>
    <div class="flex">
      <input
        class="new-todo"
        autofocus
        placeholder="Input your task"
        @keyup.enter="addTest"
        v-model="testTitle"
      />
      {{ testTitle }}
      <textarea
        class="new-todo"
        autofocus
        placeholder="Input your steps"
        @keyup.enter="addTest"
        v-model="testSteps"
      ></textarea>
      {{ testSteps }}
      <button
        @click="addTest"
        class="inline-flex items-center px-6 py-3 mx-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-amber-600"
      >
        Add
      </button>
    </div>
    <div class="flex flex-column" v-show="tests.length">
      <ul class="flex-column">
        <li
          v-for="test in tests"
          class="test-item"
          :key="test.id"
          :class="{ editing: test === editedTest }"
        >
          <div class="view">
            <label @dblclick="editTest(test)">{{ test.title }} </label>
            <button class="destroy" @click="removeTest(test)">| УДАЛИТЬ</button>
          </div>
          <input
            v-if="test === editedTest"
            class="edit"
            type="text"
            v-model="test.title"
            @vnode-mounted="({ el }) => el.focus()"
            @blur="doneEdit(test)"
            @keyup.enter="doneEdit(test)"
            @keyup.escape="cancelEdit(test)"
          />
          <textarea
            v-if="test === editedTest"
            class="edit"
            type="text"
            v-model="test.steps"
            @vnode-mounted="({ el }) => el.focus()"
            @blur="doneEdit(test)"
            @keyup.enter="doneEdit(test)"
            @keyup.escape="cancelEdit(test)"
          >
          </textarea>
        </li>
      </ul>
    </div>

    <div class="footer" v-show="tests.length"></div>
  </div>
</template>

<script>
const STORAGE_KEY = "App-ManualTests";
import CustomButton from "./Button.vue";
import CustomInput from "./Input.vue";
import CustomTextArea from "./TextArea.vue";

export default {
  components: {
    CustomButton,
    CustomInput,
    CustomTextArea
  },
  // app initial state
  data: () => ({
    tests: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
    editedTest: null,
    visibility: "all",
    testTitle: "",
    testSteps: "",
  }),

  // watch tests change for localStorage
  watch: {
    tests: {
      handler(tests) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
      },
      deep: true,
    },
  },
  methods: {
    addTest() {
      if (this.testTitle && this.testSteps) {
        this.tests.push({
          id: Date.now(),
          title: this.testTitle,
          steps: this.testSteps,
        });
        this.testTitle = "";
        this.testSteps = "";
      }
    },

    removeTest(test) {
      this.tests.splice(this.tests.indexOf(test), 1);
    },

    editTest(test) {
      this.beforeEditCacheTitle = test.title;
      this.beforeEditCacheSteps = test.steps;
      this.editedTest = test;
      console.log("Edited", this.editedTest);
    },

    doneEdit(test) {
      if (!this.editedTest) {
        return;
      }
      this.editedTest = null;
      test.title = test.title.trim();
      test.steps = test.steps.trim();
      if (!test.title && !test.steps) {
        this.removeTest(test);
      }
    },

    cancelEdit(test) {
      this.editedTest = null;
      test.title = this.beforeEditCacheTitle;
      test.steps = this.beforeEditCacheSteps;
    },

    removeCompleted() {
      this.tests = filters.active(this.tests);
    },
  },
};
</script>

<style>
.test-item {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
</style>
