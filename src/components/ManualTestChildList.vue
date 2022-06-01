<template>
  <section class="tests">
    <h1>
      tests
      <transition name="fade">
        <small v-if="incomplete">({{ incomplete }})</small>
      </transition>
    </h1>
    <div class="tests__new input-group">
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
      <button class="button warning small" @click="clearCompleted">
        <i class="fa fa-check"></i> Clear Completed
      </button>
      <button class="button alert small" @click="clearAll">
        <i class="fa fa-trash"></i> Clear All
      </button>
    </div>


      <ManualTestChildItem
        v-for="(test, index, k) in tests"
        @remove="remove(index)"
        @complete="complete(test)"
        :test="test"
        :key="k"
      ></ManualTestChildItem>

  </section>
</template>

<script>
import ManualTestChildItem from './ManualTestChildItem.vue';

export default {

  components: {
    ManualTestChildItem,
  },
  props: {
    tests: {
      default: []
      },
  },
  data() {
    return {
      newTest: '',
      newText: '',
    };
  },
  computed: {
    incomplete() {
      return this.tests.filter(this.inProgress).length;
    }
  },
  methods: {
    addTest() {
      if (this.newTest) {
        this.tests.push({
          title: this.newTest,
          step: this.newText,
          completed: false
        });
        this.newTest = '';
        this.newText = '';
      }
    },
    complete(test) {
      test.completed = !test.completed;
    },
    remove(index) {
      this.tests.splice(index, 1);
    },
    clearCompleted() {
      this.tests = this.tests.filter(this.inProgress);
    },
    clearAll() {
      this.tests = [];
    },
    inProgress(test) {
      return !this.isCompleted(test);
    },
    isCompleted(test) {
      return test.completed;
    },

},


};
</script>

<style></style>
