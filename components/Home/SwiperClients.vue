<template>
	<div class="relative flex items-stretch">
		<div class="container shrink-0 relative z-0">
			<div class="relative">
				<h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl sm:text-center font-medium mb-10">{{translations['home.clients-title']}}</h3>
				<div class="overflow-hidden relative z-0">
					<Swiper
						class="!overflow-visible"
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
							0: {
								slidesPerView: 1.3
							},
							1440: {
								slidesPerView: 2.4
							}
						}"
					>
						<SwiperSlide v-for="(client, i) in data" :key="i">
							<div class="inline-flex items-center flex-col sm:flex-row gap-4 sm:gap-6 border rounded-2xl border-grey-1 group p-2 sm:p-[8px_24px_8px_8px]">
								<div class="max-w-56 max-h-56 flex-shrink-0 overflow-hidden rounded-lg">
									<img :src="client.image" alt="" class="w-full h-full object-cover sm:rounded-[18px_8px_8px_18px]" />
								</div>
								<div class="flex flex-col items-start gap-10 max-w-[290px]">
									<h4 class="text-base sm:text-xl">
										{{ client.title }}
									</h4>
									<a :href="client.url" target="_blank">
										<Button variant="secondary" class="bg-grey-0">
											{{translations['home.more-btn']}}
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
												<path d="M5.8335 14.6665L9.16683 10.4998L5.8335 6.33317" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
												<path d="M10.8335 14.6665L14.1668 10.4998L10.8335 6.33317" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</Button>
									</a>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div class="swiper-overlay hidden sm:block rotate-180 absolute right-0 top-0 bottom-0 w-[228px] z-[1] pointer-events-none"></div>
					<div class="swiper-overlay hidden sm:block absolute left-0 top-0 bottom-0 w-[228px] z-[1] pointer-events-none"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from "~/stores/translations.js"
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore)

defineProps({
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
