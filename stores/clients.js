import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useClientsStore = defineStore('clients', () => {
	const getClients = async () => {
		try {
			let res = await useAxios().getRequest('/clients');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getClientsId = async (id) => {
		try {
			let res = await useAxios().getRequest(`/clients/${id}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getClients,
		getClientsId
	};
});
