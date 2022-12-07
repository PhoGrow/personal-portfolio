<template>
  <AtomBox>
    <AtomTitle>Personal info</AtomTitle>
    <AtomColumns class="is-gapless">
      <AtomColumn v-for="i in 2" :key="i">
        <MoleculePersonalInfo
          v-for="{ property, description } of getHalfArray(i - 1)"
          :key="property"
          :property="property"
          :description="description"
        />
      </AtomColumn>
    </AtomColumns>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  AtomBox,
  AtomTitle,
  AtomColumns,
  AtomColumn,
  MoleculePersonalInfo,
} from '@/components';
import type { PersonalInfo } from '@/types';

export default defineComponent({
  name: 'OrganismPersonalInfo',
  components: {
    AtomBox,
    AtomTitle,
    AtomColumns,
    AtomColumn,
    MoleculePersonalInfo,
  },
  props: {
    info: {
      type: Array as PropType<PersonalInfo[]>,
      required: true,
    },
  },
  methods: {
    getHalfArray(index: number) {
      return this.info.slice(
        !index ? 0 : this.info.length / 2,
        !index ? this.info.length / 2 : undefined
      );
    },
  },
});
</script>

<style scoped></style>
