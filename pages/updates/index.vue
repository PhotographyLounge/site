<template>
	<div>
		<h1>📸 Photography Lounge Updates</h1>
		<li v-for="article in articles" v-bind:key="article.slug">
			<NuxtLink :to="{ path: article.slug }" append>
				v{{ article.version }} {{ article.title }}
			</NuxtLink>
			- {{ article.type }}
		</li>
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const articles = await $content('updates')
			.sortBy('created')
			.fetch();

		return {
			articles,
		};
	},
};
</script>

<style lang="scss" scoped>
li {
	list-style: none;
	line-height: 200%;
}
</style>
