import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useWorkersStore = defineStore('workers', () => {
	const getWorkers = async () => {
		try {
			let res = await useAxios().getRequest('/workers');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getWorkers
	};
});
