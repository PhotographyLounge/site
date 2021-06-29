<template>
	<div>
		<h1>Staff</h1>
		<p>Our fantastic team members</p>

		<div class="container" id="staff">
			<article id="Aimbot">
				<a
					class="profile"
					href="https://discordapp.com/users/354249753158221836/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-shield-alt" />
					Aimbot
				</a>
				<p class="bio">He needs to write his bio.</p>
			</article>
			<article id="Dad">
				<a
					class="profile"
					href="https://discordapp.com/users/331131824052895746/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-shield-alt" />
					dadofmanyhobbies
				</a>
				<p class="bio">He needs to write his bio.</p>
			</article>
			<article id="Dessy">
				<a
					class="profile"
					href="https://discordapp.com/users/345276559038611466/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-terminal" />
					<i class="fas fa-shield-alt" />
					Dessyboy
				</a>
				<p class="bio">IT Student from Europe which is always way too busy.</p>
			</article>
			<article id="Hyuno">
				<a
					class="profile"
					href="https://discordapp.com/users/345276559038611466/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-shield-alt" />
					Hyuno
				</a>
				<p class="bio">He needs to write his bio.</p>
			</article>
			<article id="Jake">
				<a
					class="profile"
					href="https://discordapp.com/users/354249753158221836/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-shield-alt" />
					Jake
				</a>
				<p class="bio">
					Hailing from Poland Jake is a great moderator, content creator, and
					photographer. Also has an adorable doge emote collection.
				</p>
			</article>
			<article id="lost">
				<a
					class="profile"
					href="https://discordapp.com/users/126251022002814976/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-terminal" />
					Lost
				</a>
				<p class="bio">Developer, Photographer, and Coding Community Owner.</p>
			</article>
			<article id="MattA">
				<a
					class="profile"
					href="https://discordapp.com/users/366652352125599744/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-terminal" />
					MattA
				</a>
				<p class="bio">
					Student web developer from the UK that spends way too long on Discord.
					Loves creating bots to help manage communities.
				</p>
			</article>
			<article id="Rey">
				<a
					class="profile"
					href="https://discordapp.com/users/345276559038611466/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fas fa-shield-alt" />
					Rey
				</a>
				<p class="bio">He needs to write his bio.</p>
			</article>
		</div>
	</div>
</template>

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

article {
	border-style: solid;
	border-radius: 15px;
	border-width: 0px;
	padding: 2rem;
	background-color: var(--highlight-color);
}
</style>
