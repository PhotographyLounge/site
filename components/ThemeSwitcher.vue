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
		<!-- <transition name="from-bottom-to-bottom" mode="out-in">
			<span v-if="$colorMode.preference === 'dark'" key="dark">
				Dark
			</span>
			<span v-if="$colorMode.preference === 'system'" key="system">
				System
			</span>
			<span v-else-if="$colorMode.preference === 'light'" key="light">
				Light
			</span>
		</transition> -->
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
				this.$colorMode.preference === 'system'
					? 'light'
					: this.$colorMode.preference === 'light'
					? 'dark'
					: 'system';
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
	animation: 200ms show-icon 300ms forwards;
}

.hide {
	animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes hide-icon {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>
