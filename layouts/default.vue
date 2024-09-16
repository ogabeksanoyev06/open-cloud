<template>
	<div class="flex min-h-screen flex-col">
		<LayoutHeader />
		<div class="flex-1">
			<slot />
		</div>
		<HomeConsultationBanner />
		<LayoutFooter />
	</div>
</template>

<script setup>
import { useContactStore } from '~/stores/contact.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationsStore } from '~/stores/translations.js';
import { useProductsStore } from '~/stores/products.js';

const contactStore = useContactStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationsStore();
const productsStore = useProductsStore();

const { locale } = useI18n();


const { data } = await useAsyncData(
	'layout',
	async () => {
		const [contacts, categories, products, translations] = await Promise.all([contactStore.getContact(), categoriesStore.getCategories(), productsStore.getTopProducts(), translationsStore.getTranslations()]);
		return { contacts, categories, products, translations };
	},
	{ watch: [locale] }
);
</script>
