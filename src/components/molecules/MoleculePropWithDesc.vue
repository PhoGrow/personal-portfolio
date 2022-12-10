<template>
  <p>
    <AtomProperty :property="property" :class="propClass" />
    <span v-if="icon" :class="{ 'icon-text': icon }">
      <AtomDescription :description="description" />
      <AtomIcon v-if="icon" :icon="icon" />
    </span>
    <AtomDescription v-else :description="description" :class="descClass" />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomProperty, AtomDescription, AtomIcon } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculePropWithDesc',
  components: {
    AtomProperty,
    AtomDescription,
    AtomIcon,
  },
  props: {
    property: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    propClass: {
      type: String,
      default: '',
    },
    descClass: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped></style>
