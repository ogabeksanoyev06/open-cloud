<template>
	<div>
		<HomeHeroBanner />

		<section class="">
			<HomeProductsAndOffers :data="data?.products?.results" />
		</section>

		<section class="">
			<HomeConsultationBanner />
		</section>

		<section>
			<HomeAboutBanner />
		</section>

		<section class="">
			<SectionPartners :data="data?.partners?.results" />
		</section>
		<section class="">
			<div class="container">
				<div class="bg-white px-4 py-10 sm:p-10 flex flex-col gap-6 sm:gap-10">
					<h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
						{{ translations['home.advantages-title'] }}
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
						<div class="flex flex-col gap-4">
							<div class="p-4 sm:p-6 bg-grey-0 rounded-2xl flex flex-col justify-between gap-10">
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
								<img src="/assets/images/graph-1.png" class="max-w-[175px] mx-auto" alt="" />
							</div>

							<div class="flex flex-col gap-6 sm:border sm:border-b-0 max-sm:bg-grey-0 max-sm:rounded-2xl border-grey-1 p-4 sm:p-6 rounded-t-2xl">
								<img src="/assets/images/men.png" alt="" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl" />
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-4">
							<div class="p-4 sm:p-6 bg-grey-0 rounded-2xl flex flex-col justify-between gap-10">
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
								<img src="/assets/images/graph-1.png" class="max-w-[175px] mx-auto" alt="" />
							</div>

							<div class="flex flex-col gap-6 sm:border sm:border-b-0 max-sm:bg-grey-0 max-sm:rounded-2xl border-grey-1 p-4 sm:p-6 rounded-t-2xl">
								<img src="/assets/images/men.png" alt="" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl" />
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-4">
							<div class="p-4 sm:p-6 bg-grey-0 rounded-2xl flex flex-col justify-between gap-10">
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
								<img src="/assets/images/graph-1.png" class="max-w-[175px] mx-auto" alt="" />
							</div>

							<div class="flex flex-col gap-6 sm:border sm:border-b-0 max-sm:bg-grey-0 max-sm:rounded-2xl border-grey-1 p-4 sm:p-6 rounded-t-2xl">
								<img src="/assets/images/men.png" alt="" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl" />
								<div class="flex flex-col gap-4">
									<h3 class="font-medium text-lg sm:text-2xl">{{ translations['home.advantages-card-title'] }}</h3>
									<p class="to-grey text-sm sm:text-base">{{ translations['home.advantages-card-desc'] }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="">
			<HomeSwiperBanner :data="data.banners?.results" />
		</section>
		<section class="">
			<div class="container">
				<div class="sm:py-20 py-10 sm:border-x border-grey-1">
					<HomeClientBanner />
				</div>
			</div>
		</section>
		<section class="">
			<div class="container">
				<div class="sm:border-x border-grey-1 flex flex-col gap-6 sm:gap-10">
					<h3 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold sm:text-center sm:font-medium text-center">
						{{ translations['home.help-title'] }}
					</h3>

					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
						<div class="flex flex-col items-start gap-6 border border-grey-1 sm:gap-10 p-6 sm:py-8 sm:px-10">
							<div class="flex flex-col gap-4">
								<h3 class="text-xl sm:text-2xl font-medium">{{ translations['home.help-card-title'] }}</h3>
								<p class="to-grey text-base">{{ translations['home.help-card-desc'] }}</p>
							</div>

							<Button class="!bg-transparent p-0 shadow-none">
								{{ translations['home.help-card-btn'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
						<div class="flex flex-col items-start gap-6 border border-grey-1 sm:gap-10 p-6 sm:py-8 sm:px-10">
							<div class="flex flex-col gap-4">
								<h3 class="text-xl sm:text-2xl font-medium">{{ translations['home.help-card-title'] }}</h3>
								<p class="to-grey text-base">{{ translations['home.help-card-desc'] }}</p>
							</div>

							<Button class="!bg-transparent p-0 shadow-none">
								{{ translations['home.help-card-btn'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
						<div class="flex flex-col items-start gap-6 border border-grey-1 sm:gap-10 p-6 sm:py-8 sm:px-10">
							<div class="flex flex-col gap-4">
								<h3 class="text-xl sm:text-2xl font-medium">{{ translations['home.help-card-title'] }}</h3>
								<p class="to-grey text-base">{{ translations['home.help-card-desc'] }}</p>
							</div>

							<Button class="!bg-transparent p-0 shadow-none">
								{{ translations['home.help-card-btn'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div>
				<div class="container">
					<div class="sm:border-x border-grey-1 py-10"></div>
				</div>
				<div class="container max-w-[1760px]">
					<div class="bg-white py-20 rounded-[40px]">
						<HomeSwiperClients :data="data?.clients?.results" />
					</div>
				</div>
			</div>
		</section>

		<section>
			<HomeReviewsSwiper :data="data?.reviews?.results" />
		</section>
		<section>
			<div class="container max-w-[1760px]">
				<div class="bg-white py-20 rounded-[40px] z-10 relative">
					<SectionNewsSwiper :title="translations['home.news-title']" :data="data?.news?.results" />
				</div>
			</div>
			<div class="container">
				<div class="sm:py-20 py-10 sm:border-x border-grey-1"></div>
			</div>
		</section>

		<section>
			<HomeConsultationBanner />
		</section>
	</div>
</template>

<script setup>
import { useNewsStore } from '~/stores/news';
import { useClientsStore } from '~/stores/clients';
import { useReviewsStore } from '~/stores/reviews';
import { useBannerStore } from '~/stores/banners';
import { useProductsStore } from '~/stores/products.js';
import { usePartnersStore } from '~/stores/partners.js';
import { useTranslationsStore } from '~/stores/translations.js';

const newsStore = useNewsStore();
const clientsStore = useClientsStore();
const reviewStore = useReviewsStore();
const bannerStore = useBannerStore();
const productsStore = useProductsStore();
const partnerStore = usePartnersStore();
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);
const { getNews } = newsStore;
const { getClients } = clientsStore;
const { getReviews } = reviewStore;
const { getBanners } = bannerStore;
const { getTopProducts } = productsStore;
const { getPartners } = partnerStore;

// const localePath = useLocalePath();

const { data } = await useAsyncData('home', async () => {
	const [news, clients, reviews, banners, products, partners] = await Promise.all([
		getNews({
			type: 0
		}),
		getClients(),
		getReviews(),
		getBanners(0),
		getTopProducts(),
		getPartners()
	]);

	return { news, clients, reviews, banners, products, partners };
});
</script>

<style scoped></style>
