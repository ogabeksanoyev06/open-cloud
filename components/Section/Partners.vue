<template>
	<div class="container">
		<div class="sm:py-20 py-10 sm:border-x border-grey-1">
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
					<div class="sm:border sm:border-grey-1 px-6 sm:px-5 flex items-center justify-center min-h-[130px]">
						<img :src="partner.image" alt="" class="object-contain" />
					</div>
				</SwiperSlide>
			</Swiper>
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
