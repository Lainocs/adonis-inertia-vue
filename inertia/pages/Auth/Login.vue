<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { router } from '@inertiajs/vue3';

defineProps<{}>()

const email = ref('');
const password = ref('');

const submit = () => {
	router.post('/login', {
		email: email.value,
		password: password.value,
	})
}

</script>

<template>
  <h1>this is a login page</h1>

	<form @submit.prevent="submit">
		<input type="email" v-model="email" />
		<input type="password" v-model="password" />
		<button type="submit">Submit</button>
	</form>
</template>
