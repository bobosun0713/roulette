<script setup>
const props = defineProps({ isSearch: { type: Boolean, default: false } });
const emit = defineEmits(['onStartHandler']);

const onStartHandler = () => {
  if (props.isSearch) return;
  emit('onStartHandler');
};
</script>

<template>
  <div
    class="absolute z-[50] w-[100px] h-[130px] md:h-[130px] xxxs:h-[80px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 cursor-pointer bg-[url('/src/assets/image/pointer.svg')] bg-no-repeat bg-center"
    @click="onStartHandler"
  >
    <div
      class="absolute left-[50%] top-[67%] translate-x-[-50%] translate-y-[-50%] text-[#fff] lg:text-[1.8rem] md:text-[1.5rem] xxxs:text-[1rem] xxs:text-[1rem] font-bold"
    >
      GO
    </div>
  </div>
</template>

<style lang="scss"></style>
