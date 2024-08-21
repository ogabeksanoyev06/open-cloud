<template>
	<div class="bg-black bg-[url('~/assets/images/custom_black_bg.png')] bg-cover bg-no-repeat bg-center flex items-center relative">
		<div class="container">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
				<div class="flex flex-col items-center gap-6 justify-between order-2 lg:order-1 py-10">
					<div class="max-w-[530px] w-full">
						<img src="/assets/images/Group.png" alt="" class="w-full" />
					</div>
					<div
						class="grid grid-cols-2 border-t border-x border-[#5D5D5F] rounded-t-3xl sm:grid-cols-3 gap-4 lg:-mt-[150px] backdrop-blur-[20px]"
						style="background: linear-gradient(180deg, #353437 0%, rgba(39, 39, 39, 0.4) 100%)"
					>
						<div class="flex flex-col items-center gap-4 max-w-[180px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number1'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info1'] }}</p>
						</div>
						<div class="flex flex-col items-center gap-4 max-w-[220px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number2'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info2'] }}</p>
						</div>
						<div class="flex flex-col items-center gap-4 max-w-[220px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number3'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info3'] }}</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-6 sm:gap-20 py-6 sm:py-14 order-1 lg:order-2">
					<div class="flex flex-col items-start gap-4">
						<img src="/assets/images/logo-2.png" alt="" class="w-24" />
						<h1 class="text-white text-2xl md:text-3xl xl:text-4xl font-medium">
							<span class="text-primary">{{ translations['home.about-banner-title1'] }}</span> - {{ translations['home.about-banner-title2'] }}
						</h1>
						<p class="text-base sm:text-xl text-white font-normal">
							{{ translations['home.about-banner-desc'] }}
						</p>
						<NuxtLink :to="localePath('/about-us#certificate')" class="sm:mt-20">
							<Button class="!bg-transparent border-grey border text-primary w-full sm:w-auto">
								Лицензия
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.83325 14.1667L9.16659 9.99999L5.83325 5.83332" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8333 14.1667L14.1666 9.99999L10.8333 5.83332" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</NuxtLink>
					</div>
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
</script>
