<template>
	<div class="flex min-h-screen flex-col">
		<LayoutHeader />
		<div class="flex-1">
			<slot />
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup>
import { useContactStore } from '~/stores/contact.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationsStore } from '~/stores/translations.js';

const contactStore = useContactStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationsStore();

const { locale } = useI18n();

const { data } = await useAsyncData(
	'layout',
	async () => {
		const [contacts, categories, translations] = await Promise.all([contactStore.getContact(), categoriesStore.getCategories(), translationsStore.getTranslations()]);
		return { contacts, categories, translations };
	},
	{ watch: [locale] }
);
</script>
