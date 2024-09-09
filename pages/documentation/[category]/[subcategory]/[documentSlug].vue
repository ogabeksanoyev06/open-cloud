<template>
	<div class="bg-white rounded-2xl py-6 px-10">
		<div class="flex flex-col gap-6">
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
						<BreadcrumbLink as-child>
							<NuxtLink class="capitalize" :to="localePath(`/documentation/${route.params.category}/${route.params.subcategory}`)"> {{ route.params.subcategory }} </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage> {{ route.params.documentSlug  }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h3 class="text-xl sm:text-2xl font-medium">
				{{ data.title }}
			</h3>
			<p class="text-base text-grey">{{ data.subtitle }}</p>
			<div v-html="data.text"></div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';

definePageMeta({
	layout: 'documents'
});

const route = useRoute();
const router = useRouter();

const { data } = await useAsyncData('document', async () => {
	return await useDocumentsStore().getDocumentsInner(route.params.documentSlug);
});
</script>

<style lang="scss" scoped></style>
