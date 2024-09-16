<template>
	<div class="flex min-h-screen flex-col">
		<LayoutHeader />
		<div class="container flex-1 flex flex-col gap-10 items-center justify-center w-full">
			<div class="max-w-[728px] w-full">
				<img src="/assets/svg/404.svg" alt="" class="w-full object-contain" />
			</div>
			<p>
				{{ translations['404.page-title'] || 'Page not found' }}
			</p>
			<NuxtLink :to="localePath('/')">
				<Button>{{ translations['404.button-text'] || 'Go to Home' }}</Button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useContactStore } from '~/stores/contact.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationsStore } from '~/stores/translations.js';
import { useProductsStore } from '~/stores/products.js';

const contactStore = useContactStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationsStore();
const productsStore = useProductsStore();

const translations = ref({});
const { locale } = useI18n();
const localePath = useLocalePath();

onMounted(async () => {
	try {
		const [contacts, categories, products, loadedTranslations] = await Promise.all([contactStore.getContact(), categoriesStore.getCategories(), productsStore.getTopProducts(), translationsStore.getTranslations()]);
		translations.value = loadedTranslations;
	} catch (error) {
		console.error('Error loading data:', error);
	}
});
</script>
