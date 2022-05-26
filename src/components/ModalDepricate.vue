<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Модалка!
          </slot>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <custom-button @click="close">
            Закрыть модалку
          </custom-button>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
import CustomButton from './Button.vue';
export default {
  name: 'Modal',
  components: {
    CustomButton,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
</style>