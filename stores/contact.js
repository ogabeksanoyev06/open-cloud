import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useContactStore = defineStore('contact', () => {
	const contacts = ref([]);
	async function getContact() {
		try {
			let res = await useAxios().getRequest('/static_infos');
			contacts.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getContact,
		contacts
	};
});
