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
import { defineComponent } from 'vue';
import MoleculeBoxWithTitle from '@/components/molecules/MoleculeBoxWithTitle.vue';
import MoleculeTextWithIcon from '@/components/molecules/MoleculeTextWithIcon.vue';
import AtomColumns from '@/components/atoms/AtomColumns.vue';
import AtomColumn from '@/components/atoms/AtomColumn.vue';
import AtomHeading from '@/components/atoms/AtomHeading.vue';
import AtomLink from '@/components/atoms/AtomLink.vue';
import { usePersonalInfoStore, useMobileBreakpoint } from '@/stores';
import type { Linkage } from '@/types';

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
  setup() {
    const { title, info, descWithIcon, icon } = usePersonalInfoStore();
    const isMobileScreen = useMobileBreakpoint();

    return { title, info, descWithIcon, icon, isMobileScreen };
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
