<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
    <div class="px-4 py-5 bg-gray-100 sm:px-6">
      хедер
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
    </div>
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-col">
        <div>
          <ManualTest/>
          <CheckBoxesTree />
        </div>
        <div></div>
        <div>387867687</div>
      </div>
    </div>
    <div class="px-4 py-4 sm:px-6">
      футер
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
    </div>
  </div>
</template>

<script>
import ManualTest from "./ManualTest.vue";

import CheckBoxesTree from "./CheckBoxesTree.vue";

export default {

  components: {
  CheckBoxesTree,
  ManualTest,

  },
  props: {
    headerIcons: {
      type: Object,
      required: false,
    },
    cardDescription: {
      type: String,
      default: "",
      required: false,
    },
    options: {
      type: Object,
      required: false,
    },
    manualTests: {
      type: Array,
      required: false,
    },
    testForm: {
      type: Object,
      required: false,
    },

  }
}
</script>

<style>
.indent {
  margin-left: 1em;
}

.db-indent {
  margin-left: 2em;
}
</style>