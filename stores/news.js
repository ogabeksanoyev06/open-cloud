import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useNewsStore = defineStore('news', () => {
	const getNews = async (type) => {
		try {
			let res = await useAxios().getRequest('/news', { type });
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getNewsId = async (slug) => {
		try {
			let res = await useAxios().getRequest(`/news/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getNews,
		getNewsId
	};
});
