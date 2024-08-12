import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useVacancyStore = defineStore('vacancies', () => {
	const getVacancies = async () => {
		try {
			let res = await useAxios().getRequest('/vacansies');
			return res.data;
		} catch (error) {
			console.log('error', error);
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
		submitVacancy
	};
});
