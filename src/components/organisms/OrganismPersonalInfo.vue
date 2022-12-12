<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns class="is-gapless">
      <AtomColumn v-for="i in 2" :key="i">
        <AtomHeading
          v-for="([prop, desc], j) of getHalfInfo(i - 1)"
          :key="prop"
          :text="normalizeProperty(prop)"
          :class="{ 'mb-3': hasMarginBottom(i, j) }"
        >
          <MoleculeTextWithIcon
            v-if="desc === descWithIcon"
            :text="desc"
            :icon="icon"
          />
          <AtomLink v-else-if="isLink(desc)" v-bind="linkage(desc)" />
          <span v-else>{{ desc }}</span>
        </AtomHeading>
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculeTextWithIcon,
} from '@/components/molecules';
import {
  AtomColumns,
  AtomColumn,
  AtomHeading,
  AtomLink,
} from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';
import type { PersonalInfo, Linkage } from '@/types';

export default defineComponent({
  name: 'OrganismPersonalInfo',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    AtomHeading,
    MoleculeTextWithIcon,
    AtomLink,
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
    normalizeProperty(property: string): string {
      const upperCaseLetters = property.substring(1).match(/[A-Z]/g);
      property = property[0]?.toUpperCase() + property.substring(1);
      if (property === 'LinkedIn' || !upperCaseLetters?.length) {
        return property;
      }
      return property.replace(
        upperCaseLetters[0],
        ' ' + upperCaseLetters[0].toLowerCase()
      );
    },
    hasMarginBottom(outerIndex: number, innerIndex: number): boolean {
      return (
        innerIndex !== this.getHalfInfo(outerIndex - 1).length - 1 ||
        (this.isMobileScreen && outerIndex === 1)
      );
    },
    isLink(description: string): boolean {
      return description.includes('www');
    },
    linkage(description: string): Linkage {
      return {
        title: description.replace('www.', ''),
        href: 'https://' + description,
      };
    },
  },
});
</script>

<style scoped></style>
