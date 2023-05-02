<script setup lang="ts">
import { ref, inject } from "vue";
import { RouletteStoreKey } from "@/symbols";
import RouletteContent from "@/components/RouletteContent.vue";
import RouletteButton from "@/components/RouletteButton.vue";

interface RouletteDataInfo {
  id: string;
  price: string;
  deg: number;
  background: string;
  color: string;
}
const props = withDefaults(defineProps<{ data: Array<RouletteDataInfo> }>(), {
  data: () => []
});

const { degree, start, updateStartState, updateDegree } = inject(RouletteStoreKey)!;
const wrapRouletteContentRef = ref<HTMLElement | null>(null);


const startHandler = () => {
  const idx = props.data.length - 1;
  const deg = props.data[randomNumbers(0, idx)].deg;
  updateStartState();
  updateDegree(2880 + deg - (degree.value % 360));
};



const randomNumbers = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
</script>

<template>
  <div
    class="relative md:w-[605px] md:h-[605px] sm:w-[515px] sm:h-[515px] xs:w-[415px] xs:h-[415px] xxs:w-[350px] xxs:h-[350px] flex items-center justify-center overflow-hidden bg-[url('/src/assets/image/roulette.gif')] bg-cover"
  >
    <RouletteButton :is-start="start" @on-start-handler="startHandler"></RouletteButton>

    <RouletteContent
      ref="wrapRouletteContentRef"
      :data="data"
      :style="{ transform: `rotate(${degree}deg)` }"
      @transition-end="updateStartState"
    ></RouletteContent>
  </div>
</template>
