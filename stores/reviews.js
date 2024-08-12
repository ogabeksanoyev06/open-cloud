import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useReviewsStore = defineStore('reviews', () => {
	const getReviews = async () => {
		try {
			let res = await useAxios().getRequest('/reviews');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getReviews
	};
});
