<template>
	<div>
		<h1>Staff</h1>
		<p>Our fantastic team members</p>

		<div class="container" id="staff">
			<article v-for="member in staff" v-bind:key="member.slug">
				<a
					class="profile"
					:href="'https://discord.com/users/' + member.id"
					target="_blank"
					rel="noreferrer"
				>
					<i
						v-for="badge in member.badges"
						:key="badge"
						class="badge"
						:class="
							badge === 'moderator'
								? 'fas fa-shield-alt'
								: badge === 'developer'
								? 'fas fa-terminal'
								: ''
						"
					/>
					{{ member.name }}
				</a>
				<p class="bio">{{ member.bio }}</p>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const staff = await $content('staff')
			.sortBy('slug')
			.fetch();

		return {
			staff,
		};
	},
};
</script>

<style lang="scss" scoped>
.profile {
	font-size: 1.2rem;
}

.bio {
	color: var(--hover-color);
	margin: 0.8rem 0 0 0;
	font-size: 1.1rem;
	text-align: left;
}

.container {
	display: grid;
	gap: 1rem;

	grid-auto-rows: min-content;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.badge {
	margin: 0.2rem;
}

article {
	border-style: solid;
	border-radius: 15px;
	border-width: 0px;
	padding: 2rem;
	background-color: var(--highlight-color);
}
</style>
