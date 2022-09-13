import { ref, readonly } from 'vue';
const degree = ref(0);
const start = ref(false);
const updateStartState = () => (start.value = !start.value);
const updateDegree = value => (degree.value += value);

export default {
  degree: readonly(degree),
  start: readonly(start),
  updateStartState,
  updateDegree
};
