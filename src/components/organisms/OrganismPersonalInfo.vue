<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns class="is-gapless">
      <AtomColumn v-for="i in 2" :key="i">
        <MoleculePropWithDesc
          v-for="([property, description], j) of getHalfInfo(i - 1)"
          :key="property"
          :property="property"
          :description="description"
          :icon="description === descWithIcon ? icon : ''"
          :class="{
            'mb-3':
              j !== getHalfInfo(i - 1).length - 1 ||
              (isMobileScreen && i === 1),
          }"
        />
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculePropWithDesc,
} from '@/components/molecules';
import { AtomColumns, AtomColumn } from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';
import type { PersonalInfo } from '@/types';

export default defineComponent({
  name: 'OrganismPersonalInfo',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    MoleculePropWithDesc,
  },
  props: {
    title: {
      type: String,
      default: 'Personal info',
    },
    info: {
      type: Object as PropType<PersonalInfo>,
      required: true,
    },
    descWithIcon: {
      type: String,
      default: 'Locked',
    },
    icon: {
      type: String,
      default: 'lock',
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    return { isMobileScreen };
  },
  methods: {
    getHalfInfo(index: number): [string, string][] {
      const info = Object.entries(this.info);
      return info.slice(
        !index ? 0 : info.length / 2,
        !index ? info.length / 2 : undefined
      );
    },
  },
});
</script>

<style scoped></style>
