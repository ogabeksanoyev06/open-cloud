import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const usePartnersStore = defineStore('partners', () => {
	const getPartners = async () => {
		try {
			let res = await useAxios().getRequest('/partners');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getPartners
	};
});
