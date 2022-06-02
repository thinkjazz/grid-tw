<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button type="button" @click="onButtonClick"
    class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-amber-600">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    onButtonClick() {
      this.$emit("click");
    },
  },
};
</script>
