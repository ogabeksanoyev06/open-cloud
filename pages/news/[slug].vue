<template>
	<div>
		<div class="container">
			<div class="flex flex-col gap-6 py-10 border-b">
				<NuxtLink to="/news">
					<Button variant="ghost" class="py-1 px-2 mr-auto hover:bg-background">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M8.33333 13.334L5 10.0007M5 10.0007L8.33333 6.66732M5 10.0007L15 10.0007" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						{{ translations['news.back'] }}
					</Button>
				</NuxtLink>
				<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">
					{{ data?.title }}
				</h1>
				<span class="text-grey text-sm font-normal leading-130 text-center">
					{{ data?.created_at }}
				</span>
			</div>
			<div class="flex flex-col gap-6 mt-10">
				<img :src="data?.image" alt="" class="w-full h-full rounded-2xl mx-auto" />
				<!-- <h4 class="text-lg sm:text-xl font-medium">
					{{ translations['news.title'] }}
				</h4> -->
				<div class="text-base" v-html="data?.text"></div>
			</div>
		</div>
		<div class="container max-w-[1760px] mt-10">
			<div class="bg-background rounded-[40px] py-20">
				<SectionNewsSwiper :title="translations['news.other']" :data="data?.other_news" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from '~/stores/news';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const route = useRoute();

const newsStore = useNewsStore();

const { getNewsId } = newsStore;

const { data } = await useAsyncData('news', async () => {
	return await getNewsId(route.params.slug);
});
</script>
