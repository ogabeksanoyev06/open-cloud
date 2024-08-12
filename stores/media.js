import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useMediaStore = defineStore('media', () => {
	const getMedia = async () => {
		try {
			let res = await useAxios().getRequest('/media');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getMedia
	};
});
