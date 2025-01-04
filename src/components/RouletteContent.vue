<script setup lang="ts">
import type { RouletteProps } from "./types";

const { items = [] } = defineProps<RouletteProps>();

const calcWheelOutside = (idx: number): string => {
  const deg = (360 / items.length) * idx + 90 / Number((items.length / 2).toFixed(2));
  return `rotate(${deg}deg)`;
};

const calcWheelInside = (): string => {
  const deg = (180 - 360 / items.length).toFixed(2);
  return `rotate(${deg}deg)`;
};

const calcAwardText = (): string => {
  const outDeg = Number((360 / items.length) * 1 + 90 / Number((items.length / 2).toFixed(2)));
  const inDeg = Number((180 - 360 / items.length).toFixed(2));
  return `rotate(-${outDeg + inDeg - 180}deg)`;
};
</script>

<template>
  <div class="roulette-content">
    <div v-for="(item, idx) in items" :key="idx" :style="{ transform: calcWheelOutside(idx) }" class="roulette-wheel">
      <div :style="{ transform: calcWheelInside(), background: item.background }" class="roulette-wheel__item"></div>
      <div :style="{ transform: calcAwardText(), color: item.color }" class="roulette-wheel__text">
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roulette-content {
  position: relative;
  width: 500px;
  height: 500px;

  @include breakpoint(md) {
    width: 425px;
    height: 425px;
  }

  @include breakpoint(sm) {
    width: 340px;
    height: 340px;
  }

  @include breakpoint(xs) {
    width: 290px;
    height: 290px;
  }
}

.roulette-wheel {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  transform-origin: 100% 50%;

  @include breakpoint(md) {
    width: 212.5px;
  }

  @include breakpoint(sm) {
    width: 170.5px;
  }

  @include breakpoint(xs) {
    width: 145px;
  }

  &__item {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: 100% 50%;
    border-radius: 252.5px 0 0 252.5px;
  }

  &__text {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: calc(-50% / 2);
    padding-top: 65px;
    height: 50%;
    width: 50%;
    transform-origin: 50% 100%;
    text-align: center;
    font-weight: bold;
    color: $light;

    font-size: 40px;

    @include breakpoint(md) {
      font-size: 30px;
    }

    @include breakpoint(sm) {
      padding-top: 50px;
      font-size: 20px;
    }

    @include breakpoint(xs) {
      padding-top: 40px;
      font-size: 16px;
    }
  }
}
</style>
