<script setup lang="ts">
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';

defineProps<{}>()

const form = reactive({
	title: '',
	content: '',
})



const submit = () => {
	router.post('/posts', form)
}

</script>

<template>
  <h1>this is a create post page</h1>

	<form @submit.prevent="submit">
		<input type="text" v-model="form.title" />
		<textarea v-model="form.content"></textarea>
		<button type="submit">Submit</button>
	</form>
</template>
