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
    edit(test) {
      this.$emit("edit", test);
    },
    doneEdit(test) {
      this.$emit("doneEdit", test);
    },
    cancelEdit(test) {
      this.$emit("cancelEdit", test);
    },
  }
};
</script>

