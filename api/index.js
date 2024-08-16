export function useAxios() {
	const { $axios } = useNuxtApp();

	async function getRequest(url, params) {
		try {
			let res = await $axios.get(url, { params });
			return res;
		} catch (error) {
			console.log('error', error);
		}
	}

	async function postRequest(url, body) {
		let res = await $axios.post(url, body);
		return res;
	}

	return {
		getRequest,
		postRequest
	};
}
