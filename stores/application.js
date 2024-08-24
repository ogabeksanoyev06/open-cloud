import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';
import { useCustomToast } from '~/composables/useCustomToast.js';

export const useApplication = defineStore('application', () => {
	const loading = ref(false);
	const { showToast } = useCustomToast();
	const dataPdf = ref({});

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
			showToast('Mahsulotlar muvaffaqiyatli yuborildi!', 'success');
			return res.data;
		} catch (error) {
			if (error.response && error.response.data && error.response.data.message) {
				const errorMessage = Array.isArray(error.response.data.message) ? error.response.data.message.map((msg) => msg.message).join(', ') : error.response.data.message;
				showToast(`Xatolik: ${errorMessage}`, 'error');
			} else {
				showToast('Mahsulotlar yuborishda xatolik yuz berdi!', 'error');
			}
		} finally {
			loading.value = false;
		}
	}



	return {
		loading,
		consultationForm,
		orderCreate,
		dataPdf
	};
});
