<template>
  <li>

      <!-- {{ test.title }} ||
      {{ test.step }} -->

    <span @click="edit">Title: {{ test.title }} || Steps: {{ test.steps }} || ID: {{test.id}} </span>

    <button @click="remove"> (X) </button>
  </li>
</template>

<script>
export default {
  props: {
    test: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit("remove");
    },
    complete() {
      this.$emit("complete");
    },
    edit(test) {
      this.$emit("edit", test);
    },
    doneEdit() {
      this.$emit("doneEdit");
    },
    cancelEdit() {
      this.$emit("cancelEdit");
    },
  }
};
</script>

