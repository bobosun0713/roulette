<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false });
</script>

<template>
  <Transition name="overlay">
    <div v-show="modelValue" class="base-modal">
      <Transition name="overlay">
        <div v-show="modelValue" class="base-modal__overlay" @click="modelValue = false"></div>
      </Transition>

      <Transition name="model">
        <div v-show="modelValue" class="base-modal__content">
          <div v-if="$slots.header" class="base-modal__header">
            <slot name="header"></slot>
          </div>

          <div class="base-modal__body">
            <slot name="body"></slot>
          </div>

          <div v-if="$slots.footer" class="base-modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  z-index: 50;
  height: 100vh;
  width: 100vw;
  color: $light;
  letter-spacing: 1px;

  &__overlay {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: $dark;
    opacity: 0.4;
  }

  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60vh;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 10px;
    background: #1d2a33;
    width: 800px;

    display: flex;
    flex-direction: column;

    @include breakpoint(lg) {
      width: 100%;
    }
  }

  &__body {
    flex: 1;
    overflow: hidden;
  }
}

.model-enter-from,
.model-leave-active {
  transition: all 1s ease;
}
.model-enter-from,
.model-leave-to {
  top: 0%;
  opacity: 0;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
