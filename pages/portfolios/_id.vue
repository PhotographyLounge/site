// simple page, shows the url slug

<template>
	<p>{{ id }}</p>
</template>

<script>
export default {
	async asyncData({ params }) {
		return {
			id: params.id,
		};
	},
};
</script>
