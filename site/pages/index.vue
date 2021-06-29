<template>
	<div>
		<h1>Photography Lounge</h1>

		<p>
			Discord Partnered Community striving to create a welcoming and inclusive
			space for Photographers to share their work, get critiqued, and have a good
			time!
		</p>

		<div id="icon-container">
						
						<a href="https://discord.gg/photography" target="_self" rel="noreferrer">
				<i class="fab fa-discord fa-lg"></i>
			</a>

			<a
				href="https://twitter.com/photographydisc"
				target="_self"
				rel="noreferrer"
			>
				<i class="fab fa-twitter fa-lg"></i>
			</a>

			<a
				href="https://reddit.com/r/photographerslounge"
				target="_self"
				rel="noreferrer"
			>
				<i class="fab fa-reddit fa-lg"></i>
			</a>

			<a href="https://vagabondit.surge.sh" target="_self" rel="noreferrer">
				<i class="fas fa-crown fa-lg"></i>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
h1,
p {
	margin: 3rem 0;
}

h1 {
	font-size: 3rem;
	font-weight: 700;
}

p {
	font-size: 1.3rem;
	font-weight: 400;
	max-width: 62ch;
}

#icon-container {
	display: flex;
	justify-content: space-between;
	width: 8rem;
}
</style>
