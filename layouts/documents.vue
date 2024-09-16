<template>
	<div class="flex min-h-screen flex-col">
		<LayoutHeader />
		<div class="flex-1">
			<div class="container">
				<div class="border-x">
					<div class="grid lg:grid-cols-[340px_minmax(0,1fr)] items-start pt-6">
						<ScrollArea class="lg:h-[calc(100vh-100px)]">
							<h3 class="pl-6 text-base font-bold">{{ data?.documents?.title }}</h3>
							<Accordion v-model="activeItem" type="single" class="w-full flex flex-col gap-6 p-6 border-r-[1px]" collapsible>
								<AccordionItem class="border-b-0" v-for="item in data?.documents?.subcategories" :key="item.id" :value="item.slug">
									<AccordionTrigger
										class="text-base text-left font-medium p-0 before:-translate-y-1/2 before:top-1/2 items-start hover:no-underline relative before:absolute before:h-10 before:w-0 before:bg-primary before:-left-6 before:rounded-e-sm before:transition-all before:duration-300 hover:before:w-1"
										:class="{ 'before:w-1': item.slug === activeItem }"
										:hasSubcategories="item.subcategories?.length > 0 ? true : false"
									>
										<NuxtLink :to="localePath(`/documentation/${route.params.category}/${item.slug}`)">
											{{ item.title }}
										</NuxtLink>
									</AccordionTrigger>
									<AccordionContent class="mt-4 p-0" v-if="item?.subcategories?.length > 0">
										<Accordion v-model="activeItemSubSub" type="single" collapsible>
											<AccordionItem class="border-b-0" v-for="subcategory in item.subcategories" :key="subcategory.id" :value="subcategory.slug">
												<AccordionTrigger
													class="text-base !pl-2 text-left font-normal mb-4 p-0 hover:no-underline relative before:absolute before:h-10 before:w-0 before:bg-primary before:-left-6 before:rounded-e-sm before:transition-all before:duration-300 hover:before:w-1"
													:class="{ 'before:w-1': subcategory.slug === activeItemSubSub }"
													:hasSubcategories="subcategory?.subcategories?.length > 0 ? true : false"
												>
													<NuxtLink :to="localePath(`/documentation/${route.params.category}/${route.params.subcategory}/${subcategory.slug}`)">
														{{ subcategory.title }}
													</NuxtLink>
												</AccordionTrigger>
												<AccordionContent class="mt-4 p-0">
													<nav class="flex flex-col gap-4">
														<NuxtLink
															v-for="subSubcategory in subcategory?.subcategories"
															:key="subSubcategory.id"
															:to="localePath(`/documentation/${route.params.category}/${route.params.subcategory}/${subSubcategory.slug}`)"
															class="text-grey pl-2 text-base"
														>
															{{ subSubcategory.title }}
														</NuxtLink>
													</nav>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</ScrollArea>
						<div class="px-4 lg:px-10">
							<slot />
						</div>
					</div>
				</div>
			</div>
		</div>
		<HomeConsultationBanner />
		<LayoutFooter />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useContactStore } from '~/stores/contact.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationsStore } from '~/stores/translations.js';
import { useDocumentsStore } from '~/stores/documents.js';

const contactStore = useContactStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationsStore();
const documentsStore = useDocumentsStore();

const localePath = useLocalePath();
const { locale } = useI18n();
const route = useRoute();
const activeItem = ref(null);
const activeItemSubSub = ref(null);

watch(
	() => route.params.subcategory,
	(newVal) => {
		activeItem.value = newVal;
	}
);

watch(
	() => route.params.subcategory,
	(newVal) => {
		activeItemSubSub.value = newVal;
	}
);

const { data } = await useAsyncData(
	'layout',
	async () => {
		const [contacts, categories, translations, documents] = await Promise.all([contactStore.getContact(), categoriesStore.getCategories(), translationsStore.getTranslations(), documentsStore.getDocumentationCategories(route.params.category)]);
		return { contacts, categories, translations, documents };
	},
	{ watch: [locale] }
);

onMounted(() => {
	activeItem.value = route.params.subcategory || null;
});
</script>

<style scoped>
.router-link-active {
	color: hsl(var(--primary));
}
</style>
