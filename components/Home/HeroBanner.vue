<template>
	<section
		class="sm:min-h-[calc(100vh-100px)] min-h-[calc(100vh-64px)] overflow-hidden bg-black bg-[url('~/assets/images/custom_black_bg.png')] bg-cover bg-no-repeat bg-center flex md:items-center relative py-4"
	>
		<div class="container relative">
			<div class="flex flex-col gap-6 md:gap-20 relative z-10 max-w-[700px] mb-6">
				<div>
					<h1 class="text-white text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium">{{ translations['home.hero-title1'] }} <span class="text-green">{{ translations['home.hero-title2'] }}</span> {{ translations['home.hero-title3'] }}</h1>
					<p class="text-base sm:text-xl mt-5 text-white">{{translations['home.hero-desc']}}</p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4 md:gap-6">
					<Button>
						{{translations['home.more-btn']}}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M5.8335 14.1666L9.16683 9.99996L5.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M10.8335 14.1666L14.1668 9.99996L10.8335 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</Button>
					<ModalConsultationForm />
				</div>
			</div>
		</div>
		<img class="right-0 absolute w-[378px] sm:w-[800px] -bottom-[40px] object-contain z-0" src="~/assets/images/server.png" alt="server img" />
	</section>
</template>

<script setup>
import { useTranslationsStore } from "~/stores/translations.js"
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore)
</script>

<style></style>
