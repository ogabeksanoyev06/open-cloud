import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useDocumentsStore = defineStore('documents', () => {
	const documents = ref([]);
	const getDocuments = async () => {
		try {
			let res = await useAxios().getRequest('/documentation_categories');
			documents.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const getDocumentsInner = async (slug) => {
		try {
			let res = await useAxios().getRequest(`/documentation_subcategory/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	async function getDocumentationCategories(slug) {
		try {
			let res = await useAxios().getRequest(`/documentation_categories/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	async function getDocumentationContent(slug) {
		try {
			let res = await useAxios().getRequest(`/documentation/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getDocuments,
		getDocumentsInner,
		getDocumentationCategories,
		getDocumentationContent
	};
});
