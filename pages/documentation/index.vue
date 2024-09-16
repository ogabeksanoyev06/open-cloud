<template>
	<div>
		<div class="container">
			<section class="border-x border-b pt-4 pb-10 flex flex-col items-center p gap-10">
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
			</section>
			<section class="border-x sm:pl-10 pt-10">
				<div class="relative lg:grid lg:grid-cols-[minmax(0,1fr)_240px] md:gap-6 xl:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
					<div>
						<div class="mb-6">
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
						<div class="flex flex-col gap-6 sm:gap-10">
							<div class="" v-for="item in documents.results" :key="item.id" :id="`documents-${item.slug}`">
								<div class="relative flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[40px]" v-if="item.subcategories?.length > 0">
									<h3 class="text-xl sm:text-2xl font-medium">
										{{ item.title }}
									</h3>

									<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
										<NuxtLink
											class="flex flex-col gap-4 p-4 sm:p-6 bg-grey-0 rounded-2xl border border-transparent hover:bg-white hover:border-primary cursor-pointer transition-300"
											v-for="subCategory in item.subcategories"
											:to="localePath(`/documentation/${item.slug}/${subCategory.slug}`)"
											:key="subCategory.id"
										>
											<h2 class="text-base sm:text-xl font-medium">
												{{ subCategory.title }}
											</h2>
											<p class="text-base">
												{{ subCategory.subtitle }}
											</p>
										</NuxtLink>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="md:block hidden sticky top-28 left-0 h-fit">
						<nav class="border-l border-grey-1 flex flex-col gap-1">
							<NuxtLink
								v-for="item in documents.results"
								:to="localePath(`/documentation#documents-${item.slug}`)"
								class="h-9 flex items-center relative pl-6 before:absolute before:w-[0px] before:left-0 before:bg-primary before:h-full"
								:class="route.hash === `#documents-${item.slug}` ? 'font-medium text-black before:!w-[4px]' : 'font-normal text-grey '"
							>
								{{ item.title }}
							</NuxtLink>
						</nav>
					</div>
				</div>
			</section>
		</div>
		<div class="container">
			<div class="border-x py-10"></div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

const search = ref('');

const searchProducts = () => {
	if (search.value.trim()) {
		router.push({ path: localePath('/search'), query: { search: search.value } });
	}
};

const { data: documents } = await useAsyncData('documents', async () => {
	return await useDocumentsStore().getDocuments();
});
</script>
