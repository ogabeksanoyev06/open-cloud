<template>
	<div class="relative flex items-stretch">
		<div class="container shrink-0 relative z-0">
			<div class="relative">
				<div class="flex items-center justify-between mb-10">
					<h3 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium">{{ title }}</h3>
					<NuxtLink :to="localePath('/news')">
						<Button variant="ghost" class="p-0 hover:bg-transparent font-normal">
							{{ translations['home.news-details'] }}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M5.83325 14.1667L9.16659 10.0001L5.83325 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.8333 14.1667L14.1666 10.0001L10.8333 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</NuxtLink>
				</div>
				<div class="overflow-hidden relative z-0">
					<Swiper
						class=""
						:modules="[SwiperAutoplay]"
						:space-between="24"
						:slides-per-view="1"
						:loop="true"
						:speed="2000"
						:autoplay="{
							delay: 2000,
							disableOnInteraction: false
						}"
						:breakpoints="{
							640: {
								slidesPerView: 2
							},
							1024: {
								slidesPerView: 3
							},
							1440: {
								slidesPerView: 4.4
							}
						}"
					>
						<SwiperSlide v-for="news in data" :key="news.id">
							<NuxtLink :to="`/news/${news?.slug}`" class="space-y-4 group">
								<div class="h-52 rounded-lg overflow-hidden">
									<img :src="news.image" class="h-full w-full object-cover group-hover:scale-105 duration-200" />
								</div>
								<div class="space-y-1">
									<p class="text-grey">{{ news.created_at }}</p>
									<h4 class="text-xl font-medium group-hover:text-green-500 duration-200 line-clamp-3">
										{{ news.title }}
									</h4>
								</div>
							</NuxtLink>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);
const localePath = useLocalePath();

defineProps({
	title: {
		type: String,
		required: true
	},
	data: {
		type: Array,
		required: true
	}
});
</script>

<style>
.swiper-overlay {
	background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}
</style>
