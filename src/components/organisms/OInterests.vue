<template>
  <MBoxWithTag title="My interests">
    <AColumns>
      <template
        v-for="(
          { icon, topic, title, description }, i
        ) of interestsStore.$state"
        :key="topic"
      >
        <AColumn>
          <MIconWithTitle :icon="icon" :title="topic" />
          <p class="subtitle has-text-weight-medium">{{ title }}</p>
          <p>{{ description }}</p>
        </AColumn>
        <AColumn
          v-if="i !== interestsStore.$state.length - 1"
          class="is-narrow"
        ></AColumn>
      </template>
    </AColumns>
  </MBoxWithTag>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import { useInterestsStore, store } from '@stores';

export default defineComponent({
  name: 'OInterests',
  components: {
    MBoxWithTag,
    AColumns,
    AColumn,
    MIconWithTitle,
  },
  setup() {
    const interestsStore = useInterestsStore(store);
    return { interestsStore };
  },
});
</script>

<style scoped></style>
