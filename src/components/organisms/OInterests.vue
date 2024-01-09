<template>
  <MBoxWithTag title="My interests">
    <AColumns>
      <template
        v-for="({ icon, topic, title, description }, i) of interests"
        :key="topic"
      >
        <AColumn>
          <MIconWithTitle :icon="icon" :title="topic" />
          <p class="subtitle has-text-weight-medium">{{ title }}</p>
          <p>{{ description }}</p>
        </AColumn>
        <AColumn v-if="i !== interests.length - 1" class="is-narrow"></AColumn>
      </template>
    </AColumns>
  </MBoxWithTag>
</template>

<script setup lang="ts">
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import { useInterestsStore, store } from '@stores';

const { interests } = useInterestsStore(store);
</script>

<style scoped></style>
