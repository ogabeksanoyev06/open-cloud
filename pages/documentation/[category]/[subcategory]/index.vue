<template>
	<div class="bg-white rounded-2xl py-6 px-10">
		<div class="flex flex-col gap-4">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/')"> {{ translations['mian.page-url-home'] }} </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/documentation')"> {{ translations['header.link4'] }} </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage> {{ categories?.title }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div class="mb-">
				<div class="relative w-full">
					<Input @keydown.enter="searchProducts" id="search" type="text" placeholder="Поиск продукты" class="pl-6 pr-12 py-4" v-model="search" @input="updateSearchQuery" />
					<span @click="searchProducts" class="cursor-pointer absolute end-0 inset-y-0 flex items-center justify-center pr-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<g clip-path="url(#clip0_1692_7078)">
								<path
									d="M18.3334 18.3336L16.6668 16.667M1.66675 9.58366C1.66675 5.2114 5.21116 1.66699 9.58342 1.66699C13.9557 1.66699 17.5001 5.2114 17.5001 9.58366C17.5001 13.9559 13.9557 17.5003 9.58342 17.5003C5.21116 17.5003 1.66675 13.9559 1.66675 9.58366Z"
									stroke="#272727"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1692_7078">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</span>
				</div>
			</div>
			<h3 class="text-xl sm:text-2xl font-medium">
				{{ categories?.title }}
			</h3>
			<p class="text-xl">
				{{ categories?.subtitle }}
			</p>
			<div class="text-sm" v-html="categories.text" />
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';
import { useTranslationsStore } from '~/stores/translations.js';

definePageMeta({
	layout: 'documents'
});

const route = useRoute();
const router = useRouter();

const localePath = useLocalePath();

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const documentStore = useDocumentsStore();
const { getDocumentsInner } = documentStore;

const search = ref('');

const searchProducts = () => {
	if (search.value.trim()) {
		router.push({ path: localePath('/search'), query: { search: search.value } });
	}
};

const { data: categories } = await useAsyncData('categories', async () => {
	return await getDocumentsInner(route.params.subcategory);
});
</script>
