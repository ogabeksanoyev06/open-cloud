import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useBannerStore = defineStore('banners', () => {
	const getBanners = async (main) => {
		try {
			let res = await useAxios().getRequest('/banners', { main });
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getBanners
	};
});
