<script setup lang="ts">
import RouletteButton from "@/components/RouletteButton.vue";
import RouletteContent from "@/components/RouletteContent.vue";
import useRoulette from "@/composables/useRoulette";

import type { RouletteProps } from "./types";

const { items = [] } = defineProps<RouletteProps>();

const { degree, start, updateStartState, updateDegree } = useRoulette();

const randomNumbers = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

const handleStart = (): void => {
  const idx = items.length - 1;
  const { deg } = items[randomNumbers(0, idx)];
  updateStartState();
  updateDegree(2880 + deg - (degree.value % 360));
};
</script>

<template>
  <div :class="['roulette-wrap', !start ? 'roulette-wrap--stop' : undefined]">
    <RouletteButton
      :degree="degree"
      :is-start="start"
      @on-start="handleStart"
      @on-transition-end="updateStartState"
    ></RouletteButton>

    <RouletteContent :items></RouletteContent>

    <div style="--lamp: 1" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 2" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 3" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 4" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 5" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 6" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 7" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 8" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 9" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 10" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 11" class="lamp">
      <div class="lamp__content"></div>
    </div>
    <div style="--lamp: 12" class="lamp">
      <div class="lamp__content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roulette-wrap {
  flex-shrink: 0;
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #490038;
  box-shadow: inset 0 0 15px $dark;

  @include breakpoint(md) {
    width: 500px;
    height: 500px;
    box-shadow: inset 0 0 10px $dark;
  }

  @include breakpoint(sm) {
    width: 400px;
    height: 400px;
    box-shadow: inset 0 0 5px $dark;
  }

  @include breakpoint(xs) {
    width: 350px;
    height: 350px;
    box-shadow: inset 0 0 5px $dark;
  }

  &:after {
    content: "";
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border: 5px solid #debe52;
    border-radius: 50%;

    @include breakpoint(md) {
      border-width: 4px;
    }

    @include breakpoint(sm) {
      border-width: 3px;
      width: calc(100% + 5px);
      height: calc(100% + 5px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    border: 5px solid #debe52;
    border-radius: 50%;
    box-shadow: 0 0 15px $dark;

    @include breakpoint(md) {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      border-width: 4px;
      box-shadow: 0 0 10px $dark;
    }

    @include breakpoint(sm) {
      width: calc(100% - 50px);
      height: calc(100% - 50px);
      border-width: 3px;
      box-shadow: 0 0 5px $dark;
    }
  }
}

.lamp {
  height: 20px;
  width: 20px;
  position: absolute;
  transform-origin: 290px;
  transform: translateX(-280px) rotate(calc(var(--lamp) * 30deg));

  @include breakpoint(md) {
    height: 16px;
    width: 16px;
    transform-origin: 244px;
    transform: translateX(-236px) rotate(calc(var(--lamp) * 30deg));
  }

  @include breakpoint(sm) {
    height: 14px;
    width: 14px;
    transform-origin: 194px;
    transform: translateX(-187px) rotate(calc(var(--lamp) * 30deg));
  }

  @include breakpoint(xs) {
    height: 12px;
    width: 12px;
    transform-origin: 168px;
    transform: translateX(-161px) rotate(calc(var(--lamp) * 30deg));
  }

  &__content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: yellow;
    filter: drop-shadow(0 0 1px #debe52);
    box-shadow: inset 0 0 5px #debe52;
    animation: start 1.2s linear infinite;
    animation-delay: calc(var(--lamp) * -0.1s);
  }
}

.roulette-wrap--stop .lamp__content {
  animation: stop 1s linear infinite;
}

@keyframes start {
  0% {
    background-color: #debe52;
  }
  25% {
    background-color: transparent;
    filter: unset;
  }
  50% {
    background-color: transparent;
    filter: unset;
  }
  75% {
    background-color: transparent;
    filter: unset;
  }
  100% {
    background-color: transparent;
    filter: unset;
  }
}

@keyframes stop {
  0% {
    background-color: yellow;
    filter: drop-shadow(0 0 1px #debe52);
    box-shadow: inset 0 0 5px #debe52;
  }
  50% {
    background-color: transparent;
    filter: unset;
  }
  100% {
    background-color: transparent;
    filter: unset;
  }
}
</style>
