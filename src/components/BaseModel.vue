<script setup>
import {} from 'vue';
const emit = defineEmits(['on-close']);
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <transition name="overlay">
    <div v-show="props.showModal" class="fixed w-[100vw] h-[100vh] z-[50]">
      <transition name="overlay">
        <div v-show="props.showModal" class="absolute z-[-1] w-[100%] h-[100%] bg-[#131e2698]" @click="emit('on-close', false)"></div>
      </transition>
      <transition name="model">
        <div
          v-show="props.showModal"
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden w-[800px] h-[60vh] rounded-[10px] bg-[#1D2A33]"
        >
          <slot name="header"> </slot>
          <slot name="body"></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
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
