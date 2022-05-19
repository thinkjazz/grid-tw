<template>
  <layout class="page-home">
    <form v-if="!formDone" @submit.prevent="sendForm">
      <CustomInput v-model.trim="user.url" placeholder="https://" @change="onInputChange" />
      <div class="space-y-4">
        <div class="form-group">
          <label>----------------addTest</label>
          <CustomButton @click="addTest">+</CustomButton>
        </div>
        <transition-group name="fade">
          <div class="form-group" v-for="(manualTest, i) in manualTests" :key="manualTest.id">
            <label @dblclick="removeGuest(i)">Manual Test {{ i + 1 }}</label>
            <input v-model.trim="manualTest.value" type="text" class="form-control">
          </div>
        </transition-group>
      </div>

      <div class="flex justify-center">
        <div>
          <CustomButton @click="onButtonClick" :disabled="!formReady">Сгененировать</CustomButton>
        </div>
      </div>

      <div class="space-y-8">
        <pre> {{ uuid }}</pre>

      </div>

      <Card :cardDescription="saddasd" :headerIcons={} :manualTests=[] :options={} :testForm={id:1}  />
      <Divider />
       <Card :cardDescription="dasdas" :headerIcons={} :manualTests=[] :options={} :testForm={id:1}  />
      <Divider />
       <Card :cardDescription="sd" :headerIcons={} :manualTests=[] :options={} :testForm={id:1}  />
      <Divider />
      <Card :cardDescription="ddasdasasd" :headerIcons={} :manualTests=[] :options={} :testForm={id:1}  />


    </form>

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
import CustomInput from "../components/Input.vue";
import CustomButton from "../components/Button.vue";
import CheckBoxesTree from "../components/CheckBoxesTree.vue";
import Modal from "../components/Modal.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Log from "../backend/api.js";

export default {
  components: {
    CustomInput,
    CustomButton,
    CheckBoxesTree,
    Modal,
    Card,
    Divider,
  },
  data() {
    return {
      user: {
        url: 'https://qa.guru',
        uuid: 'f9298b1c-cbd5-11ec-9d64-0242ac120002',
        captcha: '',

      },
      manualTests: [],
      manualTestsAutoIncrement: 0,
      formDone: false,
      options: {
        manualTests: [
          {
            title: "Login test",
            steps: "step1\nstep2",
          },
          {
            title: "Registration test",
            steps: "step1\nstep2",
          },
        ],
        code: {
          type: "github",
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


    }
  },
  computed: {
    formReady() {
      return Object.values(this.user).every(val => val.length > 0);
    }
  },

  methods: {
    addTest() {
      this.manualTests.push({
        id: ++this.manualTestsAutoIncrement, value: '',
      });
    },
    removeTest(id) {
      // this.manualTests = this.manualTests.filter(item => item.id !== id);
      this.manualTests.splice(id, 1);
    },
    sendForm() {
      if (this.formReady) {
        this.formDone = true;
        this.manualTests = this.manualTests.filter(t => t.value.length > 0);

      }
    },
    onInputChange(value) {
      // this.formData.url = value;
    },
    onButtonClick() {
      // console.log("about to submit form with", this.formData);
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
