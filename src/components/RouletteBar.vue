<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false });
</script>

<template>
  <div class="roulette-bar">
    <button type="button" class="roulette-bar__btn" @click="modelValue = !modelValue">
      <svg class="roulette-bar__icon" viewBox="0 0 24 24">
        <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
        <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.roulette-bar {
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70px;
  background-color: $primary-dark;

  @include breakpoint(lg) {
    top: unset;
    bottom: 0;
    height: 70px;
    width: 100vw;
  }

  &__btn {
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: 1px solid $light;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

  &__btn:hover &__icon {
    animation: stork 1s reverse;
  }

  &__icon {
    stroke-dasharray: 400;
    margin: auto;
    height: 32px;
    width: 32px;
    fill: transparent;
    stroke: $light;
    stroke-width: 1px;
  }
}

@keyframes stork {
  100% {
    stroke-dashoffset: 400;
  }
}
</style>
