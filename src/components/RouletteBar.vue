<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div
    class="absolute lg:w-[70px] lg:h-[100vh] xxxs:w-[100vw] xxxs:h-[70px] lg:top-0 xxxs:bottom-0 xxxs:left-0 flex items-center justify-center bg-[#4e4376]"
  >
    <button class="w-[50px] h-[50px] bg-[#4e4376] border rounded-[50%] text-center cursor-pointer" @click="emit('update:modelValue', !modelValue)">
      <svg class="m-auto w-[2.4rem] h-[2.4rem] stroke-[white] fill-transparent stroke-[1px] icon" viewBox="0 0 24 24">
        <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
        <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
      </svg>
    </button>
  </div>
</template>

<style>
.icon {
  stroke-dasharray: 400;
}
.icon:hover {
  animation: strok 1s reverse;
}
@keyframes strok {
  100% {
    stroke-dashoffset: 400;
  }
}
</style>
