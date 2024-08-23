import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig(); // Runtime config ni olish

	const axiosInstance = axios.create({
		baseURL: config.public.apiBaseUrl || 'https://opencloudapi.pythonanywhere.com/api' // baseURL ni configdan olish
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			config.headers['Language'] = nuxtApp.$i18n.locale.value;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	// axiosInstance ni Nuxt ilovasi kontekstiga qo'shish
	nuxtApp.provide('axios', axiosInstance);
});
