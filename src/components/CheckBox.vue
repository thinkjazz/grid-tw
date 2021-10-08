// <template>
// <div class ="checkbox">
//   <input type="checkbox" id="checkbox" v-model="checked" />
//   <label for="checkbox">{{ checked }}</label>
// </template>
<template>

 
    <span class="relative inline-flex items-center px-1 py-4">
      <input id="checkbox" v-model="checked" type="checkbox" name="checkbox" class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
 
    </span>
  
  

</template>
<script>
export default {
  name: 'CheckBox',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onClick () {
      return 
 
    }
  }
}
</script>
