<template>
	<div class="relative">
		<section class="min-h-[613px] overflow-hidden flex md:items-center relative py-4">
			<div class="container relative">
				<div class="flex flex-col gap-6 md:gap-20 relative z-10 max-w-[700px] mb-6">
					<div>
						<h1 class="text-white text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium">
							{{ translations['home.hero-title1'] }} <span class="text-green">{{ translations['home.hero-title2'] }}</span> {{ translations['home.hero-title3'] }}
						</h1>
						<p class="text-base sm:text-xl mt-5 text-white">{{ translations['home.hero-desc'] }}</p>
					</div>
					<div class="flex flex-col sm:flex-row gap-4 md:gap-6">
						<NuxtLink :to="localePath('/about-us')">
							<Button class="w-full sm:w-auto">
								Подробнее
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.8335 14.1666L9.16683 9.99996L5.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8335 14.1666L14.1668 9.99996L10.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</NuxtLink>

						<ModalConsultationForm>
							<Button class="text-primary !bg-transparent border !border-grey w-full sm:w-auto">
								Получить консультацию
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.8335 14.1666L9.16683 9.99996L5.8335 5.83329" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8335 14.1666L14.1668 9.99996L10.8335 5.83329" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</ModalConsultationForm>
					</div>
				</div>
				<div class="!right-0 !absolute w-[500px] sm:left-[calc(50%+100px)] sm:w-[800px] sm:-bottom-[150px] !object-contain z-0">
					<nuxt-img class="w-[90%] ml-auto" :src="banners.results[0]?.image" alt="server img" />
				</div>
			</div>
			<nuxt-img src="images/custom_black_bg.png" class="absolute inset-0 z-[-1] object-cover w-full h-full" alt="Background" />
		</section>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { useBannerStore } from '~/stores/banners.js';

const localePath = useLocalePath();

const { getBanners } = useBannerStore();
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const { data: banners } = await useAsyncData('banners', async () => {
	return await getBanners(0);
});
</script>

<style></style>
