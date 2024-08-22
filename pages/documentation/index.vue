<template>
	<div>
		<div class="container">
			<section class="border-x pt-4 pb-10 flex flex-col items-center gap-10">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink as-child>
								<NuxtLink :to="localePath('/')"> Главный </NuxtLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Документация</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">{{ translations['header.link4'] }}</h1>
			</section>

			<section class="border-x sm:pl-10">
				<div class="relative lg:grid lg:grid-cols-[minmax(0,1fr)_240px] md:gap-6 xl:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
					<div class="flex flex-col gap-6 sm:gap-10">
						<div class="relative flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[40px]" v-for="item in documents.results" :key="item.id" :id="`documents-${item.slug}`">
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
import { useRoute } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const route = useRoute();
const localePath = useLocalePath();

const { data: documents } = await useAsyncData('documents', async () => {
	return await useDocumentsStore().getDocuments();
});
</script>
