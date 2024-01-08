<template>
  <div>
    <!-- Accessibility concern: no label used -->
    <o-field class="mb-0">
      <o-autocomplete
        :data="data"
        :field="field"
        :debounce-typing="debounceTimeInMs"
        :placeholder="placeholder"
        :size="size"
        :rounded="isRounded"
        @typing="(input: string) => $emit('input', input)"
        @select="emitSelected"
      >
        <template #default="{ option }: { option: T }">
          <slot v-bind="option"></slot>
        </template>
        <!-- Empty state is displayed during search due to debounce -->
        <template #empty>
          <slot name="empty"></slot>
        </template>
        <template #footer>
          <slot name="footer"></slot>
        </template>
      </o-autocomplete>
    </o-field>
    <a-icon
      :icon="icon!"
      size="medium"
      :variant="isFetching ? 'transparent' : ''"
      :class="['is-absolute', { loader: isFetching }]"
    />
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import { OField, OAutocomplete } from '@oruga-ui/oruga-next';
import AIcon from '@atoms/AIcon.vue';

withDefaults(
  defineProps<{
    isFetching: boolean;
    data: Array<T>;
    field: keyof T;
    debounceTimeInMs?: number;
    placeholder: string;
    size?: string;
    isRounded?: boolean;
    icon?: string;
  }>(),
  {
    debounceTimeInMs: 400,
    size: 'medium',
    isRounded: true,
    icon: 'search',
  },
);

const emit = defineEmits<{
  input: [input: string];
  select: [option: T];
}>();

function emitSelected(option: T) {
  // @select event is triggered after clearing autocomplete
  if (option) {
    emit('select', option);
  }
}
</script>

<style scoped>
.icon {
  translate: 1rem -2.5rem;
}

:deep(input.is-rounded) {
  padding-left: 3.5rem;
}

:deep(.dropdown-item:last-child) {
  cursor: unset;
}

:deep(.dropdown-item:last-child:hover) {
  background-color: unset;
  color: unset;
}

:deep(.dropdown-menu) {
  left: 1rem;
}

:deep(.autocomplete .dropdown-menu) {
  width: calc(100% - 2rem);
}
</style>
