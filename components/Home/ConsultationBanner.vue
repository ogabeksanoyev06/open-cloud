<template>
	<div class=" overflow-hidden bg-[url(~/assets/images/custom_green_bg.png)] bg-no-repeat bg-cover bg-top relative">
		<div class="container mt-[150px] lg:mt-0 lg:pl-[300px] relative z-10">
			<div class="flex py-6 items-center justify-between flex-col gap-6 md:flex-row">
				<div class="flex flex-col gap-2 max-w-[600px]">
					<h4 class="text-lg sm:text-2xl">{{ translations['home.consultation-title'] }}</h4>
					<p class="text-base">{{ translations['home.consultation-banner'] }}</p>
				</div>
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
			<img src="/assets/svg/as.svg" alt="" class="absolute -top-[150px] lg:top-0 sm:left-[0px]" />
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);
</script>
