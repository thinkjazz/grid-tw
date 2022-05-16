<template>
  <layout class="page-home">
    <CustomInput placeholder="https://" @change="onInputChange" />
    <div class="space-y-4">
      <div></div>
      <div></div>
    </div>

    <div class="flex justify-center">
      <div>
        <CustomButton @click="onButtonClick">Сгененировать</CustomButton>
      </div>
    </div>

    <div class="space-y-8">
      <div>6565</div>
      <div>656565</div>
    </div>

    <Card />
    <Divider />
    <Card />
    <Divider />
    <Card />

    <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>

    <Modal v-show="isModalVisible" @close="closeModal" />
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
      uuid: "f9298b1c-cbd5-11ec-9d64-0242ac120002",
      captcha: "",
      url: "https://qa.guru",
      options: {
        manual_tests: [
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
          repository_name: "generated",
          generate_base_tests: true,
        },
        infrastructure: {
          type: "jenkins",
          create_job: true,
          launch_job: true,
        },
        reporting: {
          type: "allure",
          attachments: {
            screenshots: true,
            video: true,
            console_log: true,
            page_source: true,
          },
        },
        notifications: {
          type: "telegram",
          chat: "build_in",
          bot: "build_in",
          enabled: true,
        },
        test_management_system: {
          type: "allure_testops",
          project_name: "generated",
          enabled: true,
        },
        issue_tracker: {
          type: "jira",
          project_name: "generated",
          enabled: true,
        },
      },
      formData: {
        url: null,
      },
      isModalVisible: false,
    }
  },
  methods: {
    onInputChange(value) {
      this.formData.url = value;
    },
    onButtonClick() {
      console.log("about to submit form with", this.formData);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
body {
  background: #f5f5f5;
}
</style>
