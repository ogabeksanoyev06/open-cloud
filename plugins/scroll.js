export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		} else if (to.hash) {
			return {
				el: to.hash,
				top: 200, // Adjust this value to your preference
				behavior: 'smooth'
			};
		} else {
			return { top: 0, left: 0, behavior: 'smooth' };
		}
	};
});
