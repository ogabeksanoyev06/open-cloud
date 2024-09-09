<template>
	<div class="bg-white rounded-2xl py-6 px-10">
		<div class="flex flex-col gap-4">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/')"> Главный </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/documentation')"> Документация </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage> {{ categories?.title }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h3 class="text-xl sm:text-2xl font-medium">
				{{ categories?.title }}
			</h3>
			<p class="text-xl">
				{{ categories?.subtitle }}
			</p>
			<div class="text-sm" v-html="categories.text" />

			<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
				<NuxtLink
					v-for="item in categories?.documentations"
					:to="localePath(`/documentation/${route.params.category}/${route.params.subcategory}/${item?.slug}`)"
					class="flex flex-col gap-4 bg-grey-0 p-6 rounded-2xl"
				>
					<h4 class="text-lg sm:text-xl font-medium">
						{{ item?.title }}
					</h4>
					<p class="text-base">
						{{ item?.subtitle }}
					</p>
				</NuxtLink>
			</div> -->
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';

definePageMeta({
	layout: 'documents'
});

const route = useRoute();
const localePath = useLocalePath();

const documentStore = useDocumentsStore();
const { getDocumentsInner } = documentStore;

const { data: categories } = await useAsyncData('categories', async () => {
	return await getDocumentsInner(route.params.subcategory);
});
</script>
