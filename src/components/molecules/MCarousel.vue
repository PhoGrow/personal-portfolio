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

<script lang="ts">
import { defineComponent } from 'vue';
import { OCarousel, OCarouselItem } from '@oruga-ui/oruga-next';

export default defineComponent({
  name: 'MCarousel',
  components: {
    OCarousel,
    OCarouselItem,
  },
  props: {
    totalItemNumber: {
      type: Number,
      required: true,
    },
  },
  emits: {
    change(currentItemNumber: number, totalItemNumber: number) {
      return currentItemNumber >= 0 && currentItemNumber < totalItemNumber;
    },
  },
  data() {
    return {
      currentItemNumber: 0,
    };
  },
  watch: {
    currentItemNumber() {
      this.$emit('change', this.currentItemNumber, this.totalItemNumber);
    },
  },
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
