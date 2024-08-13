<template>
	<section
		class="sm:min-h-[calc(100vh-100px)] min-h-[calc(100vh-64px)] overflow-hidden bg-black bg-[url('~/assets/images/custom_black_bg.png')] bg-cover bg-no-repeat bg-center flex md:items-center relative py-4"
	>
		<div class="container relative md:pl-5">
			<div class="flex flex-col gap-6 md:gap-20 relative z-10 max-w-[700px] mb-6">
				<div>
					<h1 class="text-white text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium">Облачные решения и <span class="text-green">IT инфраструктура</span> для бизнеса</h1>
					<p class="text-base sm:text-xl mt-5 text-white">Строим и поддерживаем IT-инфраструктуру компаний, которые создают и развивают цифровые продукты.</p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4 md:gap-6">
					<NuxtLink to="/about-us">
						<Button>
							Подробнее
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M5.8335 14.1666L9.16683 9.99996L5.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.8335 14.1666L14.1668 9.99996L10.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</NuxtLink>
					<ModalConsultationForm>
						<Button class="bg-black text-white hover:bg-black/90 w-full" :disabled="loading">
							Получить консультацию
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M5.83325 14.1665L9.16659 9.99984L5.83325 5.83317" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.8333 14.1665L14.1666 9.99984L10.8333 5.83317" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</ModalConsultationForm>
				</div>
			</div>
		</div>
		<Swiper
			class="!right-0 !absolute w-[378px] sm:w-[800px] -bottom-[40px] !object-contain z-0"
			:modules="[SwiperAutoplay]"
			:space-between="6"
			:slides-per-view="1"
			:loop="true"
			:speed="2000"
			:autoplay="{
				delay: 2000,
				disableOnInteraction: false
			}"
		>
			<SwiperSlide v-for="(item, i) in data?.results" :key="i" class="rela">
				<img class="" :src="item.image" alt="server img" />
			</SwiperSlide>
		</Swiper>
	</section>
</template>

<script setup>
import { useBannerStore } from '~/stores/banners.js';

const bannerStore = useBannerStore();

const { getBanners } = bannerStore;
const { data } = await useAsyncData('news', async () => {
	return await getBanners(0);
});
</script>

<style></style>
