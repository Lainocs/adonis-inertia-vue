<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';

defineProps<{
	posts: { id: number; title: string; content: string, userId: number }[];
	user: { id: number; name: string };
}>()

const deletePost = (postId: number) => {
	router.delete('/posts/' + postId)
}
</script>

<template>
	{{ user }}
	<h1>this is a posts page</h1>
	<Link href="/posts/create">Create Post</Link> |
	<Link href="/profile">Profile</Link>

	<div  v-for="post in posts" :key="post.id">
		<Link :href="'/posts/' + post.id">
			<h2>{{ post.title }}</h2>
			<p>{{ post.content }}</p>
		</Link>
		<button @click="deletePost(post.id)" v-if="user?.id == post.userId">Delete</button>
	</div>

</template>

<style>
	a {
		text-decoration: none;
		color: black;
	}
</style>
