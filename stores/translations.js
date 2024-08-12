import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useTranslationsStore = defineStore('translations', () => {
	const translations = ref(null);

	async function getTranslations() {
		try {
			let res = await useAxios().getRequest('/translations');
			translations.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getTranslations,
		translations
	};
});
