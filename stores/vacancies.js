import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useVacancyStore = defineStore('vacancies', () => {
	const loading = ref(false);

	const getVacancies = async () => {
		try {
			let res = await useAxios().getRequest('/vacansies');
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getVacanciesId = async (id) => {
		try {
			loading.value = true;
			let res = await useAxios().getRequest(`/vacansies/${id}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			loading.value = false;
		}
	};

	const submitVacancy = async (data) => {
		try {
			let res = await useAxios().postRequest('/vacansies/application/create', data);
			return res;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getVacancies,
		submitVacancy,
		getVacanciesId,
		loading
	};
});
