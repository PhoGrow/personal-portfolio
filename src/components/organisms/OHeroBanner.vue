<!-- eslint-disable vue/no-v-html -->
<template>
  <MHero is-fullheight-with-navbar>
    <AColumns class="is-vcentered is-flex-direction-row-reverse">
      <AColumn>
        <AImage :src="profile.image.src" :alt="profile.image.alt" />
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <AColumn class="content is-medium">
        <h1>Hi, I'm {{ profile.fullName }}.</h1>
        <div class="block">
          <div
            :class="
              !(isProfileExpanded || isCvVisible)
                ? `has-line-clamp-${isMounted && isMobile ? 5 : 3}`
                : ''
            "
            v-html="summaryInHtml"
          ></div>
          <MButtonWithIcon
            v-if="!(isProfileExpanded || isCvVisible)"
            icon="expand_circle_down"
            :variant="isDark ? 'secondary' : 'dark'"
            is-pulled-right
            @click.once="isProfileExpanded = true"
          />
        </div>
        <AButton :href="`#${cvId}`" @click.once="showCv">
          Get to know me
        </AButton>
      </AColumn>
    </AColumns>
  </MHero>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ONotification from '@organisms/ONotification.vue';
import MHero from '@molecules/MHero.vue';
import MButtonWithIcon from '@molecules/MButtonWithIcon.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AButton from '@atoms/AButton.vue';
import AImage from '@atoms/AImage.vue';
import { useProfileStore, useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import confetti from 'canvas-confetti';

defineProps<{
  cvId: string;
}>();

const { profile, summaryInHtml } = useProfileStore(store);
const { isCvVisible, isDark, isMobile } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();

const isProfileExpanded = ref(false);

async function showCv() {
  const useToast = () => {
    const { oruga } = useProgrammatic();
    oruga.notification.open({
      duration: 4000,
      component: ONotification,
      position: 'bottom',
      variant: isDark.value ? 'secondary' : 'dark',
    });
  };

  isCvVisible.value = true;
  useToast();
  await confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.8 },
    disableForReducedMotion: true,
  });
}
</script>

<style scoped></style>
