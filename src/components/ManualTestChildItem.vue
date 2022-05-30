<template>
  <li>
    <button @click.self="complete">
      {{ test.title }} |
      {{ test.step }}
    </button>
    <button @click="remove">X

    </button>
  </li>
</template>

<script>
export default {
  props: ["test"],
  methods: {
    remove() {
      this.$emit("remove");
    },
    complete() {
      this.$emit("complete");
    },
  },
};
</script>

<style></style>
