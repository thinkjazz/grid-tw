<template>
 <div>
  <CheckBox type="checkbox" v-model="all" class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"/>Сгенерировать репозиторий в GitHub<br>
  <CheckBox type="checkbox" v-model="tree.level.level" class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 indent"/>Сгенерировать 2 автотеста<br>
  <CheckBox type="checkbox" v-model="tree.level.end" class="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 db-indent"/>Cгенерировать ещё условие<br>
    
  Сгенерировать GitHub: {{ all }}<br>
  Сгенерировать 2 автотеста: {{ tree.level.level }}<br>
  Ещё что-то: {{ tree.level.end }}<br>
   
</div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'CheckBoxesTree',
   components: {
      CheckBox,
    },
data: () =>  ({
    all: false,
    tree: {
    	level: {
      	level: false,
        end: false,
     
      }
    }
  }),
  
  watch: {
  	all () {
      this.tree.level.level = !this.tree.level.level
    },
    
    'tree.level.level' () {
    	this.tree.level.end = !this.tree.level.end
    },
  }
}
</script>
