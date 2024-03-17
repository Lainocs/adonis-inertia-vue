<script setup lang="ts">
defineProps<{post: any}>()
</script>

<template>
	<h1>this is a single post page</h1>
	<Link href="/posts/create">Create Post</Link>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<hr>
	</div>

</template>
