import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useProductsStore = defineStore('products', () => {
	const getTopProducts = async () => {
		try {
			let res = await useAxios().getRequest('/top_products');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getProductsInner = async (slug) => {
		try {
			let res = await useAxios().getRequest(`/products/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getTarifs = async (slug, type) => {
		try {
			let res = await useAxios().getRequest(`/tarifs`, { product__slug: slug, type });
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getTopProducts,
		getProductsInner,
		getTarifs
	};
});
