<template>
	<div>
		<!-- <section class="border-x border-b pt-4 pb-10 flex flex-col items-center p gap-10">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/')"> {{ translations['mian.page-url-home'] }} </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{{ translations['header.link4'] }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">{{ translations['header.link4'] }}</h1>
		</section> -->
		<div class="flex flex-col w-full gap-6 container max-w-[900px] py-6">
			<div class="relative w-full">
				<Input id="search" type="text" placeholder="Поиск продукты" class="pl-6 pr-12 py-4" v-model="searchValue" />
				<span class="cursor-pointer absolute end-0 inset-y-0 flex items-center justify-center pr-6">
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
			<div class="bg-white rounded-[40px] px-4 sm:px-10 w-full">
				<div class="py-6 sm:py-10 flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-6 border-b">
					<h3 class="text-xl sm:text-2xl font-medium">
						{{ translations['search.result-text'] }}

						<span class="text-xl">{{ '`' + searchValue + '`' }} </span>
					</h3>
					<p class="text-base text-grey text-nowrap">
						{{ translations['search.result-count'] }} <span class="font-medium text-black">{{ data.results?.length }}</span>
					</p>
				</div>
				<nav class="mt-4 sm:mt-6 flex flex-col gap-6" v-if="data.results.length > 0">
					<NuxtLink v-for="(item, i) in data?.results" :key="i" :to="localePath(`/documentation/${item.parent_slug}/${item.slug}`)" class="border-b pb-6 text-xl font-medium">
						{{ item.title }}
					</NuxtLink>
				</nav>
				<div class="flex flex-col items-center gap-6 mx-auto max-w-[340px] py-10 sm:py-20">
					<img src="/assets/svg/nodata.svg" alt="" class="max-w-[120px] object-contain" />
					<p class="text-base">{{ translations['search.result-des'] }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTranslationsStore } from '~/stores/translations.js';
import { useDocumentsStore } from '~/stores/documents.js';

const localePath = useLocalePath();

const translationsStore = useTranslationsStore();
const documentStore = useDocumentsStore();

const { translations } = storeToRefs(translationsStore);
const { searchProduct } = documentStore;

const route = useRoute();
const router = useRouter();

const searchValue = ref(route.query.search || '');

watch(
	searchValue,
	(newValue) => {
		router.push({ query: { ...route.query, search: newValue } });
	},
	{ immediate: true }
);

const { data } = await useAsyncData(
	'searchData',
	async () => {
		return await searchProduct({
			search: searchValue.value
		});
	},
	{
		watch: [() => route.query.search]
	}
);
</script>
