<template>
  <layout class="page-home">
    <form v-if="!formDone" @submit.prevent="sendForm">
      <InputUrl v-model.trim="url" :placeholder="url" @change="onInputChange" />

      <div class="flex justify-center mt-6">
        <div>
          <CustomButton @click="onButtonClick" :disabled="!formReady"
            >Сгененировать</CustomButton
          >
        </div>
      </div>

      <div class="flex justify-center mt-6 space-y-16">
        <div>
          <CustomButton @click="showModal">Open modal</CustomButton>
          <CustomModal v-show="isModalVisible" @close="closeModal" />
        </div>
      </div>
      <div class="space-y-8"></div>

      <!-- <ManualTest /> -->
      <!-- Начало компонента мануал тест-->
      <!-- <div class="flex justify-center mt-6">
        <div class="form-group">
          <label>Добавить ручной тест</label>
          <CustomButton @click="addTest">ADD</CustomButton>
        </div>
      </div>

      <div class="flex flex-col">
        <div
          class="form-group"
          v-for="(manualTest, i) in options.manualTests"
          :key="manualTest.id"
        >
          <label @dblclick="removeTest(i)">Manual Test {{ i + 1 }}</label>

          <input
            v-model.trim="manualTest.title"
            type="text"
            class="flex-wrap flex-auto block w-full min-w-0 px-3 py-2 mt-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 md:text-md"
          />

          <textarea
            v-model.trim="manualTest.steps"
            class="flex-wrap flex-auto block w-full min-w-0 px-3 py-2 mt-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 md:text-md"
          ></textarea>

          <div class="flex justify-center mt-6">
            <CustomButton @click="removeTest(i)">DEL</CustomButton>
          </div>
        </div>
      </div> -->
      <!-- Конец компонента мануал тест -->
      <Card
        :headerIcons="{}"
        :manualTests="[]"
        :options="{}"
        :testForm="{ id: 1 }"
      />
      <Divider />
    </form>

    <div><ManualTestParent/> </div>

    <div>
      <!-- <pre>{{ options }}</pre> -->
    </div>
  </layout>
</template>

<page-query>
query {
  metadata {
    siteName,
  }
}
</page-query>

<script>
import InputUrl from "../components/InputUrl.vue";

import CustomButton from "../components/Button.vue";
import CheckBoxesTree from "../components/CheckBoxesTree.vue";

import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Log from "../backend/api.js";
import CustomModal from "../components/Modal.vue";
import ManualTestParent from "../components/ManualTestParent.vue";

export default {
  components: {
    InputUrl,
    CustomButton,
    CheckBoxesTree,
    Card,
    Divider,
    CustomModal,
    ManualTestParent,

  },
  data() {
    return {
      url: "qa.guru",
      uuid: "f9298b1c-cbd5-11ec-9d64-0242ac120002",
      captcha: "",
      // manualTestsAutoIncrement: 0,
      formDone: false,
      formReady: false,
      isModalVisible: false,
      options: {
        // manualTests: [
        //   {
        //     title: "Login test",
        //     steps: "step1\nstep2",
        //   },
        //   {
        //     title: "Registration test",
        //     steps: "step1\nstep2",
        //   },
        //   {
        //     title: "Console.log test3",
        //     steps: "ERROR1\nERROR2",
        //   },
        // ],
        //TODO: подумать как изменить стуктуру данных, чтобы запихать туда labels\описание которое булем рендерить в опциях шаблона
        code: {
          type: "github",
          label: "Сгенерировать репозиторий в GitHub",
          organization: "autotests-cloud",
          repositoryName: "generated",
          isGenerateBaseTests: true,
        },
        infrastructure: {
          type: "jenkins",
          isGeneratingTaskRequired: true,
          isRunningTaskRequired: true,
        },
        reporting: {
          type: "allure",
          attachments: {
            areScreenshotsRequired: true,
            isVideoRequired: true,
            isConsoleLogRequired: true,
            isPageSourceRequired: true,
          },
        },
        notifications: {
          type: "telegram",
          chat: "build_in",
          bot: "build_in",
          required: true,
        },
        testManagementSystem: {
          type: "allure_testops",
          project_name: "generated",
          required: true,
        },
        issueTracker: {
          type: "jira",
          project_name: "generated",
          required: true,
        },
      },
    };
  },
  computed: {
    formReady() {
      return Object.values(this.user).every((val) => val.length > 0);
    },
  },

  methods: {
    // addTest() {
    //   this.options.manualTests.push({
    //     id: ++this.manualTestsAutoIncrement,
    //     value: "",
    //   });
    // },

    // removeTest(id) {
    //   // this.options.manualTests = this.options.manualTests.filter(item => item.id !== id);
    //   this.options.manualTests.splice(id, 1);
    // },
    sendForm() {
      if (this.formReady) {
        this.formDone = true;
        this.options.manualTests = this.options.manualTests.filter(
          (test) => test.value.length > 0
        );
      }
    },
    onInputChange(value) {
      // this.formData.url = value;
    },
    onButtonClick() {
      // console.log("about to submit form with", this.formData);
    },
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {},

  mounted() {
    // Log.info("Page mounted");
  },
};
</script>

<style>
body {
  background: #f5f5f5;
}
</style>
