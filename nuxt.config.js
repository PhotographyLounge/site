export default {
	css: ['@/assets/main.scss'],
	components: true,
	buildModules: ['@nuxtjs/color-mode'],
	head: {
		title: 'Photography Lounge',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Discord Partnered Community striving to create a welcoming and inclusive space for Photographers',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/camera.png' }],
		script: [
			{
				src: 'https://kit.fontawesome.com/22859885a2.js',
				crossorigin: 'anonymous',
			},
		],
	},
};
