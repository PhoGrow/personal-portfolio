<template>
  <Transition name="fade" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
