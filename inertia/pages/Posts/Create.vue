<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { router } from '@inertiajs/vue3';

defineProps<{}>()

const title = ref('');
const content = ref('');

const submit = () => {
	router.post('/posts', {
		title: title.value,
		content: content.value,
	})
}

</script>

<template>
  <h1>this is a create post page</h1>

	<form @submit.prevent="submit">
		<input type="text" v-model="title" />
		<textarea v-model="content"></textarea>
		<button type="submit">Submit</button>
	</form>
</template>
