<script setup lang="ts">
import { onMounted, ref } from "vue";

import type { RouletteButtonProps } from "./types";

const { isStart, degree = 0 } = defineProps<RouletteButtonProps>();

const emits = defineEmits(["on-start", "on-transition-end"]);

const roulettePointerRef = ref<HTMLElement | null>(null);

const onStart = (): void => {
  if (isStart) return;
  emits("on-start");
};

onMounted(() => {
  if (!roulettePointerRef.value) return;
  roulettePointerRef.value.addEventListener("transitionend", () => {
    emits("on-transition-end");
  });
});
</script>

<template>
  <div class="roulette-btn">
    <div ref="roulettePointerRef" class="roulette-btn__pointer" :style="{ transform: `rotate(${-degree}deg)` }"></div>
    <div class="roulette-btn__text" @click="onStart">GO</div>
  </div>
</template>

<style lang="scss" scoped>
.roulette-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);

  &__pointer {
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: $secondary;
    transition: transform 6s cubic-bezier(0.25, 0, 0, 1);
    filter: drop-shadow(0 0 1.5px $dark);

    @include breakpoint(md) {
      height: 70px;
      width: 70px;
    }

    @include breakpoint(sm) {
      height: 60px;
      width: 60px;
    }

    @include breakpoint(xs) {
      height: 55px;
      width: 55px;
    }

    &:before {
      content: "";
      position: absolute;
      top: -80px;
      border-radius: 50%;
      border: 40px solid transparent;
      border-bottom: 72px solid $secondary;

      @include breakpoint(md) {
        top: -70px;
        border-width: 35px;
        border-bottom-width: 62px;
      }

      @include breakpoint(sm) {
        top: -60px;
        border-width: 30px;
        border-bottom-width: 54px;
      }

      @include breakpoint(xs) {
        top: -54px;
        border-width: 28px;
        border-bottom-width: 50px;
      }
    }
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 4px $dark;
    background-color: $primary;
    border-radius: 50%;
    padding: 6px;
    font-size: 28px;
    color: $light;
    cursor: pointer;

    @include breakpoint(md) {
      font-size: 24px;
    }

    @include breakpoint(sm) {
      font-size: 20px;
    }

    @include breakpoint(xs) {
      font-size: 16px;
    }
  }
}
</style>
