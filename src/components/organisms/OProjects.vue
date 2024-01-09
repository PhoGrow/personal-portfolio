<!-- eslint-disable vue/no-v-html -->
<template>
  <MBoxWithTag title="My projects">
    <!-- Minified and gzipped. Wait, not so fast! -->
    <div class="block" v-html="descriptionInHtml"></div>
    <AColumns>
      <template v-for="({ link, icon, topic }, i) of projects" :key="link">
        <AColumn>
          <ALink :href="link">
            <MIconWithTitle
              :icon="icon"
              :title="topic"
              class="has-border-hover"
            />
          </ALink>
        </AColumn>
        <AColumn v-if="i < projects.length - 1" class="is-narrow"></AColumn>
      </template>
      <template v-if="projects.length < 3">
        <template v-for="_n in 3 - projects.length" :key="_n">
          <AColumn class="is-narrow"></AColumn>
          <AColumn>
            <MIconWithTitle icon="add" title="TBD" class="has-border-dashed" />
          </AColumn>
        </template>
      </template>
    </AColumns>
  </MBoxWithTag>
</template>

<script setup lang="ts">
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import ALink from '@atoms/ALink.vue';
import { useProjectsStore, store } from '@stores';

const {
  projects: { projects },
  descriptionInHtml,
} = useProjectsStore(store);
</script>

<style scoped></style>
