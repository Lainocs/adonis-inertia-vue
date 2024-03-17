<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import card from './components/card.vue'

defineProps<{ name: string }>()
</script>

<template>
  <Head title="Homepage" />

  <div class="container">
    <div class="title">{{ name }} x Inertia x Vue.js</div>
    <card title="Hello" description="hehehaha" />
    <card title="Salut" description="ksksks" />

		<Link href="/about">About</Link>
		<Link href="/posts">Posts</Link>
  </div>
</template>
