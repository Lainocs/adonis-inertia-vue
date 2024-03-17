<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
  width: 300px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
}
</style>
