// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/svg',
					href: ''
				}
			]
		},
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: ['@/assets/styles/main.css'],
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-swiper', '@pinia-plugin-persistedstate/nuxt', 'nuxt-easy-lightbox'],
	i18n: {
		strategy: 'prefix_except_default',
		locales: ['en', 'uz', 'ru'],
		defaultLocale: 'ru',
		vueI18n: './i18n.config.ts'
	},
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.API_BASE_URL || 'https://opencloudapi.pythonanywhere.com/api'
		}
	},
	build: {
		transpile: ['vue-toastification']
	}
});
