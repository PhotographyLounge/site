<template>
	<NuxtContent :document="page" />
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const page = await $content('updates', params.slug).fetch();

		return {
			page,
		};
	},
};
</script>
