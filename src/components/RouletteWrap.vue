<script setup>
import { ref } from 'vue';
import RouletteContent from '@/components/RouletteContent.vue';
import RouletteButton from '@/components/RouletteButton.vue';

const degree = ref(0);

const rouletteData = ref([
  {
    id: '1',
    price: '200',
    deg: 0,
    background: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
    fontColor: '#ffffff'
  },
  {
    id: '2',
    price: '250',
    deg: 0,
    background: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%',
    fontColor: '#ffffff'
  },
  {
    id: '3',
    price: '300',
    deg: 0,
    background: 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
    fontColor: '#ffffff'
  }
]);

const startHandler = () => {
  const idx = rouletteData.value.length - 1;
  const deg = rouletteData.value[randomNumbers(0, idx)].deg;
  degree.value += 2880 + deg - (degree.value % 360);
};

const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
</script>

<template>
  <div
    class="relative md:w-[605px] md:h-[605px] sm:w-[515px] sm:h-[515px] xs:w-[415px] xs:h-[415px] xxs:w-[355px] xxs:h-[355px] flex items-center justify-center overflow-hidden bg-[url('/src/assets/image/roulette.gif')] bg-cover"
  >
    <RouletteButton @on-start-handler="startHandler"></RouletteButton>

    <RouletteContent :data="rouletteData" :style="{ transform: `rotate(${degree}deg)` }"></RouletteContent>
  </div>
</template>
