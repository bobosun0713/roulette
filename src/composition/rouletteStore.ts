import { ref, readonly } from "vue";
const degree = ref<number>(0);
const start = ref<boolean>(false);
const updateStartState = () => (start.value = !start.value);
const updateDegree = (value: number) => (degree.value += value);

export default {
  degree: readonly(degree),
  start: readonly(start),
  updateStartState,
  updateDegree
};

