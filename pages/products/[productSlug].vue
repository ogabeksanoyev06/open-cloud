<template>
	<div>
		<div class="max-sm:container max-sm:py-4">
			<div
				class="bg-[url('~/assets/images/custom_black_bg.png')] bg-no-repeat bg-top bg-cover max-sm:rounded-2xl relative">
				<div
					class="container flex flex-col sm:flex-row items-center justify-between py-6 max-sm:pb-0 sm:py-20 relative overflow-hidden">
					<div class="flex flex-col float-start gap-10 max-w-[720px] w-full max-sm:pb-[200px] relative z-10">
						<div class="flex flex-col gap-5">
							<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-white">{{
								product.title }}</h1>
							<p class="text-white sm:text-grey-2">
								{{ product.subtitle }}
							</p>
						</div>
						<div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
							<Button>
								{{ translations['product.order'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
									fill="none">
									<path d="M5.83301 14.1666L9.16634 9.99996L5.83301 5.83329" stroke="#272727"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.833 14.1666L14.1663 9.99996L10.833 5.83329" stroke="#272727"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
							<Button variant="outline" class="border-grey !bg-transparent !text-primary">
								{{ translations['product.demo'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
									fill="none">
									<path d="M5.83301 14.1666L9.16634 9.99996L5.83301 5.83329" stroke="#B5E275"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.833 14.1666L14.1663 9.99996L10.833 5.83329" stroke="#B5E275"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
					</div>
					<img :src="product.image" alt=""
						class="absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-8 max-sm:bottom-0 max-sm:translate-y-[80px] h-[240px] w-[240px] object-contain" />
				</div>
			</div>
		</div>

		<div class="container">
			<section class="mt-10 sm:mt-20 text">
				<div v-html="product.text"></div>
			</section>
			<section class="mt-10 sm:mt-20">
				<h2 class="text-xl md:text-3xl lg:text-4xl font-medium text-center mb-6 sm:mb-8">
					{{ translations['product.advantages'] }}</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
					<div class="flex flex-col gap-6 bg-grey-0 border border-grey-1 sm:p-6 p-8 hover:bg-white transition-300"
						v-for="item in product?.advantages" :key="item.id">
						<div class="w-14 h-14 sm:w-16 sm:h-16">
							<img :src="item.image" alt="" class="rounded-2xl w-full" />
						</div>
						<div class="flex flex-col gap-4">
							<h3 class="text-lg font-medium">{{ item.title }}</h3>
							<p class="text-base text-grey">
								{{ item.subtitle }}
							</p>
						</div>
					</div>
				</div>
				<HomeConsultationBanner class="rounded-2xl" />
			</section>
			<section class="mt-10 sm:mt-20">
				<div class="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-between sm:items-center mb-6">
					<h3 class="text-xl md:text-3xl font-medium">{{ translations['product.tarrifs'] }}</h3>
					<div class="flex items-center rounded-[8px] p-1 sm:p-2 bg-white">
						<button @click="selectTypeTarif(0)" :class="{ 'bg-primary': tarifsType === 0 }"
							class="text-grey text-base py-2 sm:py-3 px-8 sm:px-10 hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto">
							{{ translations['product.day'] }}
						</button>
						<button @click="selectTypeTarif(1)" :class="{ 'bg-primary': tarifsType === 1 }"
							class="text-grey text-base py-2 sm:py-3 px-8 sm:px-10 hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto">
							{{ translations['product.month'] }}
						</button>
					</div>
				</div>
				<div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<div class="flex flex-col gap-6 border border-grey-1 bg-white p-4 sm:p-6 odd:bg-grey-0"
						v-for="item in tarifs?.results" :key="item.id">
						<div class="flex flex-col">
							<p class="text-base font-medium mb-2">
								{{ item?.subtitle }}
							</p>
							<h4 class="text-xl sm:text-2xl font-medium space-x-2 mb-4">{{ item?.price }} <span
									class="text-grey text-sm font-normal">{{ translations['product.in-month'] }}</span>
							</h4>
							<div v-html="item.desc"></div>
						</div>
						<div class="shrink-0 bg-grey-1 relative h-px w-full"></div>
						<div class="flex flex-col gap-2">
							<p class="text-grey text-base">{{ translations['product.cpu-quantity'] }}</p>
							<p class="text-base font-medium">{{ translations['product.cpu'] }}</p>
						</div>
						<Button class="sm:text-base">
							{{ translations['product.order'] }}
							<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
								fill="none">
								<path d="M6.33301 14.1667L9.66634 9.99999L6.33301 5.83332" stroke="#272727"
									stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M11.333 14.1667L14.6663 9.99999L11.333 5.83332" stroke="#272727"
									stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</div>
				</div>
				<div class="block sm:hidden">
					<Swiper :modules="[SwiperAutoplay]" :space-between="16" :slides-per-view="1" :loop="true"
						:speed="2000" :autoplay="{
							delay: 2000,
							disableOnInteraction: false
						}" :breakpoints="{
							0: {
								slidesPerView: 1
							},
							360: {
								slidesPerView: 1.3
							}
						}">
						<SwiperSlide v-for="item in tarifs?.results" :key="item.id">
							<div class="flex flex-col gap-6 border border-grey-1 p-4 rounded-2xl">
								<div class="flex flex-col">
									<p class="text-base font-medium mb-2">
										{{ item?.subtitle }}
									</p>
									<h4 class="text-xl sm:text-2xl font-medium space-x-2 mb-4">{{ item?.price }} <span
											class="text-grey text-sm font-normal">{{ translations['product.in-month'] }}</span>
									</h4>
									<div v-html="item.desc"></div>
								</div>
								<div class="shrink-0 bg-grey-1 relative h-px w-full"></div>
								<div class="flex flex-col gap-2">
									<p class="text-grey text-base">{{ translations['product.cpu-quantity'] }}</p>
									<p class="text-base font-medium">{{ translations['product.cpu'] }}</p>
								</div>
								<Button class="sm:text-base">
									{{ translations['product.order'] }}
									<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
										fill="none">
										<path d="M6.33301 14.1667L9.66634 9.99999L6.33301 5.83332" stroke="#272727"
											stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M11.333 14.1667L14.6663 9.99999L11.333 5.83332" stroke="#272727"
											stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</Button>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</div>

		<section class="bg-black p-6 sm:p-10 max-sm:mt-6 max-sm:mx-4 max-sm:rounded-2xl">
			<div class="container p-0 flex flex-col sm:flex-row items-center gap-6 sm:justify-between">
				<div class="flex items-center gap-4">
					<div class="sm:px-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M1.43051e-06 36.5L0 4.5C0 2.29086 1.79086 0.500001 4 0.500001L18.3431 0.5C18.3955 0.5 18.4478 0.501028 18.5 0.503073V8.5C18.5 13.7467 22.7533 18 28 18H35.9969C35.999 18.0522 36 18.1045 36 18.1569V36.5C36 38.7091 34.2091 40.5 32 40.5H4C1.79086 40.5 1.66893e-06 38.7091 1.43051e-06 36.5ZM21.5 8.5V2L34.5 15H28C24.4102 15 21.5 12.0899 21.5 8.5ZM6.87305 32.5V23.9102H9.65625C10.7109 23.9102 11.3984 23.9531 11.7188 24.0391C12.2109 24.168 12.623 24.4492 12.9551 24.8828C13.2871 25.3125 13.4531 25.8691 13.4531 26.5527C13.4531 27.0801 13.3574 27.5234 13.166 27.8828C12.9746 28.2422 12.7305 28.5254 12.4336 28.7324C12.1406 28.9355 11.8418 29.0703 11.5371 29.1367C11.123 29.2188 10.5234 29.2598 9.73828 29.2598H8.60742V32.5H6.87305ZM8.60742 25.3633V27.8008H9.55664C10.2402 27.8008 10.6973 27.7559 10.9277 27.666C11.1582 27.5762 11.3379 27.4355 11.4668 27.2441C11.5996 27.0527 11.666 26.8301 11.666 26.5762C11.666 26.2637 11.5742 26.0059 11.3906 25.8027C11.207 25.5996 10.9746 25.4727 10.6934 25.4219C10.4863 25.3828 10.0703 25.3633 9.44531 25.3633H8.60742ZM14.8711 23.9102H18.041C18.7559 23.9102 19.3008 23.9648 19.6758 24.0742C20.1797 24.2227 20.6113 24.4863 20.9707 24.8652C21.3301 25.2441 21.6035 25.709 21.791 26.2598C21.9785 26.8066 22.0723 27.4824 22.0723 28.2871C22.0723 28.9941 21.9844 29.6035 21.8086 30.1152C21.5938 30.7402 21.2871 31.2461 20.8887 31.6328C20.5879 31.9258 20.1816 32.1543 19.6699 32.3184C19.2871 32.4395 18.7754 32.5 18.1348 32.5H14.8711V23.9102ZM16.6055 25.3633V31.0527H17.9004C18.3848 31.0527 18.7344 31.0254 18.9492 30.9707C19.2305 30.9004 19.4629 30.7812 19.6465 30.6133C19.834 30.4453 19.9863 30.1699 20.1035 29.7871C20.2207 29.4004 20.2793 28.875 20.2793 28.2109C20.2793 27.5469 20.2207 27.0371 20.1035 26.6816C19.9863 26.3262 19.8223 26.0488 19.6113 25.8496C19.4004 25.6504 19.1328 25.5156 18.8086 25.4453C18.5664 25.3906 18.0918 25.3633 17.3848 25.3633H16.6055ZM23.5605 23.9102V32.5H25.2949V28.8496H28.8809V27.3965H25.2949V25.3633H29.4492V23.9102H23.5605Z"
								fill="#B5E275" />
						</svg>
					</div>
					<div class="flex flex-col gap-2">
						<h4 class="text-xl sm:text-2xl font-medium text-white">{{ translations['product.download'] }}</h4>
						<p class="text-grey-2 text-base">{{ translations['product.file-size'] }} 26 GB</p>
					</div>
				</div>
				<Button class="max-sm:w-full">
					{{ translations['product.download-file'] }}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M7.5 10L10 12.5M10 12.5L12.5 10M10 12.5L10 2.5" stroke="#272727" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M6.25 7.5V7.5C4.17893 7.5 2.5 9.17893 2.5 11.25L2.5 13.5C2.5 15.7091 4.29086 17.5 6.5 17.5L13.5 17.5C15.7091 17.5 17.5 15.7091 17.5 13.5L17.5 11.25C17.5 9.17893 15.8211 7.5 13.75 7.5V7.5"
							stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</Button>
			</div>
		</section>

		<section class="mt-10 sm:mt-20">
			<SectionCalculator />
		</section>

		<section class="mt-10 sm:mt-20 text">
			<div class="container">
				<div v-html="product.text_second"></div>
			</div>
		</section>

		<section>
			<div class="sm:container sm:max-w-[1760px] mt-10 sm:mt-20">
				<div class="bg-white sm:rounded-[40px] py-10 sm:py-16">
					<div class="container">
						<h3 class="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-10 text-center">
							{{translations['product.faq']}}
						</h3>
						<Accordion type="single" class="grid items-start grid-cols-1 md:grid-cols-2 gap-6" collapsible>
							<AccordionItem class="bg-grey-0 rounded-[12px] p-3 sm:py-4 sm:px-6"
								v-for="item in accordionItems" :key="item.value" :value="item.value">
								<AccordionTrigger class="text-base sm:text-xl font-medium hover:no-underline p-0">{{
									item.title }}</AccordionTrigger>
								<AccordionContent class="text-grey text-sm sm:text-base pb-0 mt-4 sm:mt-6">
									{{ item.content }}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
		<HomeConsultationBanner class="mt-10 sm:mt-20" />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products.js';
import { useTranslationsStore } from "~/stores/translations.js"
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore)

const accordionItems = [
	{ value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
	{ value: 'item-2', title: 'Is it unstyled?', content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
	{ value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' }
];

const route = useRoute();

const tarifsType = ref(0);

const selectTypeTarif = (type) => {
	tarifsType.value = type;
};

const { data: product } = await useAsyncData('product', async () => {
	return await useProductsStore().getProductsInner(route.params.productSlug);
});

const { data: tarifs } = await useAsyncData(
	'tarifs',
	async () => {
		return await useProductsStore().getTarifs(route.params.productSlug, tarifsType.value);
	},
	{ watch: () => tarifsType.value }
);
</script>

<style>
.text h1 {
	@apply text-xl sm:text-3xl lg:text-4xl font-medium mb-4;
}

.text p {
	@apply text-sm sm:text-base text-grey;
}
</style>
