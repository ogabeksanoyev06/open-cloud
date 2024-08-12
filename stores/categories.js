import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useCategoriesStore = defineStore('categories', () => {
	const categories = ref([]);
	const categoriesInner = ref([]);

	const getCategories = async () => {
		try {
			let res = await useAxios().getRequest('/categories');
			categories.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getCategoriesInner = async (slug) => {
		try {
			let res = await useAxios().getRequest(`/categories/${slug}`);
			categoriesInner.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getCategories,
		getCategoriesInner,
		categories,
		categoriesInner
	};
});
