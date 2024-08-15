import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useSertificateStore = defineStore('certificates', () => {
	const getSertificate = async () => {
		try {
			let res = await useAxios().getRequest('/certificates');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getSertificate
	};
});
