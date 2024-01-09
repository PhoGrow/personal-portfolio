<template>
  <OCarousel
    v-model="currentItemNumber"
    class="h-full"
    :interval="15000"
    :arrow="false"
    repeat
    autoplay
    indicator-inside
  >
    <OCarouselItem v-for="i of totalItemNumber" :key="i">
      <slot></slot>
    </OCarouselItem>
  </OCarousel>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { OCarousel, OCarouselItem } from '@oruga-ui/oruga-next';

const props = defineProps<{
  totalItemNumber: number;
}>();

const emits = defineEmits<{
  change: [currentItemNumber: number, totalItemNumber: number];
}>();

const currentItemNumber = ref(0);

watch(currentItemNumber, () => {
  emits('change', currentItemNumber.value, props.totalItemNumber);
});
</script>

<style>
.carousel .carousel-scene {
  height: 100%;
}

.carousel .carousel-scene .carousel-items {
  height: 100%;
}
</style>
