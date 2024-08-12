import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useStatic = defineStore('static', () => {
	const staticInfos = ref(null);

	const getStaticInfos = async () => {
		try {
			let res = await useAxios().getRequest('/static_infos');
			staticInfos.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	return {
		getStaticInfos,
		staticInfos
	};
});
