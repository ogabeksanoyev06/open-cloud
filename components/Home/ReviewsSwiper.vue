<template>
	<div>
		<div class="container">
			<div class="sm:py-20 py-10 sm:border-x border-grey-1">
				<h3 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold sm:text-center sm:font-medium mb-10">{{ translations['home.reviews-title'] }}</h3>
				<Swiper
					:modules="[SwiperAutoplay]"
					:space-between="0"
					:slides-per-view="1"
					:loop="true"
					:speed="2000"
					:autoplay="{
						delay: 2000,
						disableOnInteraction: false
					}"
					:breakpoints="{
						0: {
							slidesPerView: 1
						},
						390: {
							slidesPerView: 1.3
						},
						640: {
							slidesPerView: 2.2
						},
						1440: {
							slidesPerView: 3
						}
					}"
				>
					<SwiperSlide v-for="(item, i) in data" :key="i" class="border-y border-r first:border-l">
						<div class="flex flex-col gap-6 p-6 sm:p-8 group  rounded-3xl sm:rounded-none group hover:!bg-background transition-300 min-h-[350px]">
							<div class="text-sm sm:text-base text-grey line-clamp-[8]" v-html="item.text"></div>
							<div class="flex items-center justify-between mt-auto">
								<div class="flex items-center gap-3 flex-1">
									<div class="w-14 h-14 rounded-full relative overflow-hidden shrink-0">
										<img :src="item.image" class="object-cover w-full h-full" />
									</div>
									<div class="h-max flex flex-col justify-center">
										
										<p class="text-base sm:text-lg font-medium !break-all max-w-[400px] line-clamp-1">{{ item.title }}</p>
										<div class="text-sm text-grey text-left" v-html="item.subtitle" />
									</div>
								</div>
								<div class="w-10 h-10 sm:w-14 sm:h-14">
									<img src="/assets/svg/rewi.svg" alt="" class="w-full h-full" />
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	data: {
		type: Array,
		required: true
	}
});

import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);
</script>


