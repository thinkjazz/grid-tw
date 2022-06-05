<template>
  <div
    class="flex items-center justify-center h-screen overflow-hidden"
    style="background: #edf2f7"
  >

    <div
      class="absolute top-0 bottom-0 left-0 right-0 z-10 py-12 transition duration-150 ease-in-out bg-gray-500"
      id="modal"
    >
      <div role="alert" class="container w-11/12 max-w-lg mx-auto md:w-2/3">
        <div
          class="relative px-5 py-8 bg-white border border-gray-400 rounded shadow-md md:px-10"
        >
          <div class="flex justify-start w-full mb-3 text-gray-600">
           <svg width="50px" height="50px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5ZM5.79293 7.50001L3.14648 4.85356L3.85359 4.14645L7.20714 7.50001L3.85359 10.8536L3.14648 10.1465L5.79293 7.50001ZM12 11H8V10H12V11Z" fill="black"/>
</svg>
          </div>
          <h1
            class="mb-4 font-bold leading-tight tracking-normal text-gray-800 font-lg"
          >
            Ручной тест для последующей автоматизации
          </h1>
              <label
            for="manual-test"
            class="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >Название теста</label
          >
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <!-- <svg width="30px" height="30px" viewBox="0 0 25 25"   fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5ZM5.79293 7.50001L3.14648 4.85356L3.85359 4.14645L7.20714 7.50001L3.85359 10.8536L3.14648 10.1465L5.79293 7.50001ZM12 11H8V10H12V11Z" fill="black"/>
</svg> -->
        <!-- <TerminalIcon class="w-5 h-5 text-gray-400" aria-hidden="true" /> -->
      </div>
      <!-- <input type="email" name="email" id="email" class="block w-full pl-10 border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Распишите ручной тест шаг за шагом" /> -->
    </div>

          <CustomInput
            id="manual-test"
            class="flex items-center w-full h-10 pl-3 mt-2 mb-5 text-sm font-normal text-gray-600 border border-gray-300 rounded-md focus:outline-none sm:text-sm focus:border focus:border-yellow-500"
            placeholder="Введите название ручного теста"
          />

          <label
            for="manual-test-case"
            class="block text-sm font-bold text-gray-700"
            >Добавьте описание теста</label
          >
          <div class="mt-1">
            <CustomTextArea
              rows="8"
              name="manual-test-case"

              class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Open 'https://github.com/login'

              Set username 'Alex'
              Set password '12%#5f'
              Submit form

              Verify successful authorization as 'Alex'"
            />
          </div>

          <div class="relative mt-2 mb-5">
            <div
              class="absolute flex items-center h-full px-4 text-gray-600 border-r "
            >

            </div>

          </div>

          <div class="relative mt-2 mb-5">
            <div
              class="absolute right-0 flex items-center h-full pr-3 text-gray-600 cursor-pointer "
            >

            </div>

          </div>

          <div class="relative mt-2 mb-5">
            <div
              class="absolute right-0 flex items-center h-full pr-3 text-gray-600 cursor-pointer "
            >

            </div>

          </div>
          <div class="flex items-center justify-start w-full">
            <CustomButton
              class="px-8 py-2 text-sm text-white transition duration-150 ease-in-out rounded bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 hover:bg-amber-600"
            >
              Добавить
            </CustomButton>
            <CustomButton
              class="px-8 py-2 ml-3 text-sm text-gray-600 transition duration-150 ease-in-out bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:border-gray-400 hover:bg-gray-300"
              @click="close"
            >
              Отмена
            </CustomButton>
          </div>
          <button
            class="absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out rounded cursor-pointer hover:text-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-600"
            @click="close"
            aria-label="close modal"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./Button.vue";
import CustomInput from "./Input.vue";
import CustomTextArea from "./TextArea.vue";

// import { TerminalIcon }  from '@heroicons/vue/solid'

export default {

  components: {
    CustomButton,
    CustomInput,
    CustomTextArea,
    // TerminalIcon,
  },
  methods: {
    close() {
      this.$emit("close");
    },

  },
};
</script>

<style lang="scss" scoped>
</style>