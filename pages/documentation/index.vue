<template>
	<div>
		<div class="container pt-4">
			<section class="flex flex-col items-center gap-10">
				<div></div>
				<h1 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">Документация</h1>
				<div class="shrink-0 bg-grey-1 relative h-px w-full"></div>
			</section>

			<section class="mt-6 sm:mt-10">
				<div class="flex flex-col gap-6 sm:gap-10">
					<div class="flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[40px]" v-for="item in documents.results" :key="item.id">
						<h3 class="text-xl sm:text-2xl font-medium">
							{{ item.title }}
						</h3>
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							<NuxtLink
								class="flex flex-col gap-4 p-4 sm:p-6 bg-grey-0 rounded-2xl border border-transparent hover:bg-white hover:border-primary cursor-pointer transition-300"
								v-for="subCategory in item.subcategories"
								:to="`documentation/${item.slug}/${subCategory.slug}`"
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
				<!-- <div class="md:block hidden sticky top-28 left-0 h-fit">
					<nav class="border-l border-grey-1 flex flex-col">
						<NuxtLink
							v-for="item in documents.results"
							:to="`/documentation#documents-${item.slug}`"
							:class="route.hash === `#documents-${item.slug}` ? ' font-medium text-black' : ' font-normal text-grey'"
							class="h-9 flex items-center pl-6 border-l-4 hover:border-primary"
						>
							{{ item.title }}
						</NuxtLink>
					</nav>
				</div> -->
				<!-- <div class="md:grid md:grid-cols-[minmax(0,1fr)_240px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10"></div> -->
			</section>
		</div>
		<section class="sm:mt-20 mt-10">
			<HomeConsultationBanner />
		</section>
	</div>
</template>

<script setup>
import { useDocumentsStore } from '~/stores/documents.js';

const route = useRoute();

const { data: documents } = await useAsyncData('documents', async () => {
	return await useDocumentsStore().getDocuments();
});
</script>





