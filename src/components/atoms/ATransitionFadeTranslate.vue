<template>
  <Transition name="fade-translate" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
.fade-translate-enter-active,
.fade-translate-leave-active {
  transition-property: opacity, transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-translate-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}
.fade-translate-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
