<template>
	<div>
		<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center mb-4 sm:mb-10">Наши партнёры</h1>
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
					slidesPerView: 2
				},
				768: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				},
				1440: {
					slidesPerView: 6
				}
			}"
		>
			<SwiperSlide v-for="(partner, i) in data" :key="i">
				<div class="sm:border sm:border-grey-1 px-6 sm:px-5 inline-flex h-20 max-w-[200px] sm:max-w-[245px] sm:h-[136px] w-full">
					<img :src="partner.image" alt="" class="w-full h-full object-contain" />
				</div>
			</SwiperSlide>
		</Swiper>
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
