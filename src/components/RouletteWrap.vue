<script setup>
import { ref, onMounted, inject } from 'vue';
import RouletteContent from '@/components/RouletteContent.vue';
import RouletteButton from '@/components/RouletteButton.vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
const wrapRouletteContentRef = ref(null);
const { degree, start, updateStartState, updateDegree } = inject('rouletteStore');

onMounted(() => {
  transitionEvent();
});

const startHandler = () => {
  const idx = props.data.length - 1;
  const deg = props.data[randomNumbers(0, idx)].deg;
  updateStartState();
  updateDegree(2880 + deg - (degree.value % 360));
};
const transitionEvent = () => {
  wrapRouletteContentRef.value.RouletteContentRef.addEventListener('transitionend', () => {
    updateStartState();
  });
};
const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
</script>

<template>
  <div
    class="relative md:w-[605px] md:h-[605px] sm:w-[515px] sm:h-[515px] xs:w-[415px] xs:h-[415px] xxs:w-[350px] xxs:h-[350px] flex items-center justify-center overflow-hidden bg-[url('/src/assets/image/roulette.gif')] bg-cover"
  >
    <RouletteButton :is-start="start" @on-start-handler="startHandler"></RouletteButton>

    <RouletteContent ref="wrapRouletteContentRef" :data="data" :style="{ transform: `rotate(${degree}deg)` }"></RouletteContent>
  </div>
</template>
