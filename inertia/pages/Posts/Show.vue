<script setup lang="ts">
import { router } from '@inertiajs/vue3';

defineProps<{
	post: { id: number; title: string; content: string, userId: number };
	user: { id: number; name: string };
}>()

const deletePost = (postId: number) => {
	router.delete('/posts/' + postId)
}

</script>

<template>
	<h1>this is a single post page</h1>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<button @click="deletePost(post.id)" v-if="post.userId == user?.id">Delete</button>
		<hr>
	</div>

</template>
