<template>
	<p>{{ id }}</p>
</template>

<script>
export default {
	layout: 'no-nav',
	async asyncData({ params }) {
		return {
			id: params.id,
		};
	},
};
</script>
