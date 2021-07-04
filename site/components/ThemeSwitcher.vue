<template>
	<button @click="setCurrentTheme">
		<span>
			<MoonIcon
				class="icon"
				:class="$colorMode.preference === 'dark' ? 'show' : 'hide'"
			/>
			<SystemIcon
				class="icon"
				:class="$colorMode.preference === 'system' ? 'show' : 'hide'"
			/>
			<SunIcon
				class="icon"
				:class="$colorMode.preference === 'light' ? 'show' : 'hide'"
			/>
		</span>
	</button>
</template>

<script>
import SunIcon from '@/assets/icons/sun.svg?inline';
import MoonIcon from '@/assets/icons/moon.svg?inline';
import SystemIcon from '@/assets/icons/system.svg?inline';

export default {
	components: {
		SunIcon,
		MoonIcon,
		SystemIcon,
	},
	data() {
		return {};
	},
	methods: {
		setCurrentTheme() {
			this.$colorMode.preference =
				this.$colorMode.value === 'light' ? 'dark' : 'light';
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	border: none;
	justify-items: center;
	background: transparent;
	width: 1.4em;
	height: 1.4em;
	padding: 0;
	display: flex;
	cursor: pointer;
}

.icon {
	display: block;
	position: absolute;
	color: var(--primary-color);
	width: 1.4em;
	height: 1.4em;

	&:hover,
	&:focus {
		color: var(--hover-color);
	}
}

.show {
	opacity: 1;
}

.hide {
	opacity: 0;
}
</style>
