<template>
  <div>
    <div class="flex justify-center mt-6">
      <div class="form-group">
        <label>Добавить ручной тест</label>
        <CustomButton @click="addTest">Добавить</CustomButton>
      </div>
    </div>

    <div class="flex flex-col">
 <li v-for="manualTest in options.manualTests"
      :key="manualTest.id">
            {{ manualTest.title }}
              {{ manualTest.steps }}
      </li>
    </div>

      <div
        class="form-group"
        v-for="(manualTest, i) in options.manualTests"
        :key="manualTest.id"
      >
        <label @dblclick="removeTest(i)">Manual Test {{ i + 1 }}</label>

        <CustomInput
          v-model.trim="manualTest.title"
          type="text"
          class="flex-wrap flex-auto block w-full min-w-0 px-3 py-2 mt-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 md:text-md"
        />

        <CustomTextArea
          v-model.trim="manualTest.steps"
          class="flex-wrap flex-auto block w-full min-w-0 px-3 py-2 mt-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 md:text-md"
        ></CustomTextArea>

        <div class="flex justify-center mt-6">
          <CustomButton class="mx-2" @click="addTest">Создать</CustomButton>
          <CustomButton class="mx-2 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-600" @click="addTest">Обновить</CustomButton>
          <CustomButton class="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-rose-600"
           @click="removeTest(i)">Удалить</CustomButton>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./Button.vue";
import CustomInput from "./Input.vue";
import CustomTextArea from "./TextArea.vue";

export default {
  components: {
    CustomButton,
    CustomInput,
    CustomTextArea,
  },
  data() {
    return {
      manualTestsAutoIncrement: 0,
      options: {
        manualTests: [
          {
            title: "",
            steps: "",

          },
          {
            title: "Registration test",
            steps: "step1\nstep2",

          },
        ],
      },
    };
  },
  methods: {
    addTest() {

      this.options.manualTests.push({
        // id: ++this.manualTestsAutoIncrement,
        title: this.title,
        steps: this.steps,


      });
      this.title = "";
      this.steps = "";
    },
    createTest() {
      console.log(1)
    },
    updateTest() {
     console.log('updated')
    },

    removeTest(id) {
      // this.options.manualTests = this.options.manualTests.filter(item => item.id !== id);
      this.options.manualTests.splice(id, 1);
    },
  },
};
</script>

<style>
</style>
