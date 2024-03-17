<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';

defineProps<{user: any}>()

const logout = () => {
	router.post('/logout')
}

const deletePost = (postId: number) => {
	router.delete('/posts/' + postId)
}
</script>

<template>
	<h1>Hello, {{ user.fullName }}</h1>

	<h2>Your posts:</h2>
	<div  v-for="post in user.posts" :key="post.id">
		<Link :href="'/posts/' + post.id">
			<h2>{{ post.title }}</h2>
			<p>{{ post.content }}</p>
		</Link>
		<button @click="deletePost(post.id)">Delete</button>
	</div>

	<button @click="logout">Logout</button>
</template>

<style>
a {
	text-decoration: none;
	color: black;
}	
</style>
