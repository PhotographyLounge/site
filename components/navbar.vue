<template>
	<nav>
		<li><NuxtLink to="/">Home</NuxtLink></li>
		<li><NuxtLink to="/updates">Updates</NuxtLink></li>
		<li><NuxtLink to="/portfolios">Portfolios</NuxtLink></li>
		<li><NuxtLink to="/staff">Staff</NuxtLink></li>
		<li><ThemeSwitcher /></li>
	</nav>
</template>

<style lang="scss">
#theme {
	cursor: pointer;
	color: var(--primary-color);
	background: transparent;
	border: none;
}
</style>
