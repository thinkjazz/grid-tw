<template>
  <div>
    <div class ="flex flex-container">
      <input
        class="new-todo"
        autofocus
        placeholder="Input your task"
        @keyup.enter="addTest"
        v-model="testTitle"
      >
      {{ testTitle }}
      <textarea
        class="new-todo"
        autofocus
        placeholder="Input your steps"
        @keyup.enter="addTest"
        v-model="testSteps"
      ></textarea>
      {{ testSteps }}
   <button @click="addTest" class="inline-flex items-center px-6 py-3 mx-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-amber-600">Add</button>


    </div>
    <div class="flex flex-column" v-show="tests.length">
      <!-- <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"

        @change="toggleAll"
      > -->
      <!-- <label for="toggle-all">Mark all as complete</label> -->

      <ul class="flex-column">
        <li
          v-for="test in tests"
          class="test-item"
          :key="test.id"
          :class="{ editing: test === editedTest }"
        >
          <div class="view">
            <!-- <input class="toggle" type="checkbox" v-model="test.completed"> -->
            <label @dblclick="editTest(test)">{{ test.title }} || {{ test.steps }}</label>
            <button class="destroy" @click="removeTest(test)"> | УДАЛИТЬ</button>
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
          >
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

    <div class="footer" v-show="tests.length">
      <!-- <span class="todo-count">
        <strong>{{ remaining }}</strong>
        <span>{{ remaining === 1 ? 'item' : 'items' }} left</span>
      </span> -->
      <!-- <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility === 'active' }">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: visibility === 'completed' }">Completed</a>
        </li>
      </ul> -->
      <!-- <button class="clear-completed" @click="removeCompleted" v-show="tests.length > remaining">
        Clear completed
      </button> -->
    </div>
  </div>
</template>


<script>
const STORAGE_KEY = "App-ManualTests";

// const filters = {
//   all: (tests) => tests,
//   active: (tests) => tests.filter((test) => !test.completed),
//   completed: (tests) => tests.filter((test) => test.completed),
// };

export default {
  // app initial state
  data: () => ({
    tests: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
    editedTest: null,
    visibility: "all",
    testTitle: "",
    testSteps: "",
  }),

  // watch tests change for localStorage persistence
  watch: {
    tests: {
      handler(tests) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
      },
      deep: true,
    },
  },

  mounted() {
    // window.addEventListener('hashchange', this.onHashChange)
    // this.onHashChange()
  },

  computed: {
    // filteredTests() {
    //   return filters[this.visibility](this.tests);
    // },
    // remaining() {
    //   return filters.active(this.tests).length;
    // },
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    toggleAll(e) {
      this.tests.forEach((test) => (test.completed = e.target.checked));
    },

  addTest() {
  if (this.testTitle && this.testSteps) {


      this.tests.push({
        id: Date.now(),
        title: this.testTitle,
        steps: this.testSteps,

      });
      this.testTitle="";
      this.testSteps="";
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

    // onHashChange() {
    //   var visibility = window.location.hash.replace(/#\/?/, '')
    //   if (filters[visibility]) {
    //     this.visibility = visibility
    //   } else {
    //     window.location.hash = ''
    //     this.visibility = 'all'
    //   }
    // }
  },
};
</script>


<style>
/* @import "https://unpkg.com/todomvc-app-css@2.4.1/index.css"; */
</style>