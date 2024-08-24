import VueHtml2pdf from 'vue3-html2pdf';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueHtml2pdf);
});
