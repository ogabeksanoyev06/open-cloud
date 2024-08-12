import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useApplication = defineStore('application', () => {
	const loading = ref(false);

	async function consultationForm(form) {
		loading.value = true;
		try {
			let res = await useAxios().postRequest('/application/create', form);
			return res.data;
		} catch (error) {
			console.error('Error in getCases:', error);
		} finally {
			loading.value = false;
		}
	}

	async function orderCreate(form) {
		loading.value = true;
		try {
			let res = await useAxios().postRequest('/calculator/order/create', form);
			return res.data;
		} catch (error) {
			console.error('Error in getCases:', error);
		} finally {
			loading.value = false;
		}
	}
	return {
		loading,
		consultationForm,
		orderCreate
	};
});
