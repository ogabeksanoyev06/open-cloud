<template>
	<div>
		<section class="bg-black bg-[url('@/assets/images/custom_black_bg.png')] bg-no-repeat bg-top bg-cover relative">
			<div class="container relative">
				<Breadcrumb class="pt-4">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink as-child>
								<NuxtLink class="!text-[#C2C2C3]" :to="localePath('/')"> Главный </NuxtLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage class="!text-[#C2C2C3]">Облачные решения и IT‑инфраструктура для бизнеса </BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div class="py-10 sm:py-[120px] flex flex-col gap-6">
					<h1 class="font-medium text-xl sm:text-4xl text-white max-w-[1200px]">{{ translations['about.hero-title'] }}</h1>
					<p class="text-grey-2 max-w-[900px]">{{ translations['about.hero-desc'] }}</p>
					<ModalConsultationForm>
						<Button class="sm:mr-auto sm:w-auto w-full">
							{{ translations['about.hero-btn'] }}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M5.83337 14.1666L9.16671 9.99996L5.83337 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.8334 14.1666L14.1667 9.99996L10.8334 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</ModalConsultationForm>
				</div>
			</div>
		</section>
		<section class="container max-w-[1200px] mt-20 flex flex-col gap-10">
			<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl sm:text-center font-medium">{{ translations['about.title'] }}</h2>
			<img src="/assets/images/about.png" alt="" class="rounded-2xl w-full h-full" />
			<p class="text-grey text-sm sm:text-lg">
				{{ translations['about.desc'] }}
			</p>
		</section>
		<section class="mt-20 bg-green bg-[url('~/assets/images/custom_green_bg.png')] bg-no-repeat bg-cover bg-top py-6">
			<div class="container max-w-[1200px] flex items-center justify-between sm:flex-row flex-col gap-10">
				<div class="sm:flex-1">
					<h5 class="text-xl sm:text-2xl font-medium">{{ translations['about.license-title'] }}</h5>
					<p class="mt-2">{{ translations['about.license-desc'] }}</p>
					<!-- <Button variant="link" class="p-0 mt-6 text-black">
						{{ translations['about.license-more'] }}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M5.83337 14.1667L9.16671 10L5.83337 5.83335" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M10.8334 14.1667L14.1667 10L10.8334 5.83335" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</Button> -->
				</div>
				<div id="certificate">
					<Swiper
						@swiper="onSwiper"
						class=" max-w-[300px] sm:max-w-[380px] w-full z-[10]"
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
						<button
							@click="categorySwiper?.slideNext()"
							class="absolute top-1/2 -translate-y-1/2 left-0 hidden sm:flex items-center justify-center w-12 h-12 border border-white rounded-full cursor-pointer z-[9999] bg-white/15"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M14 7.5L10 12.5L14 17.5" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
						<button
							@click="categorySwiper?.slidePrev()"
							class="absolute top-1/2 -translate-y-1/2 right-0 hidden sm:flex items-center justify-center w-12 h-12 border border-white rounded-full cursor-pointer z-[9999] bg-white/15"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M10 17.5L14 12.5L10 7.5" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
						<SwiperSlide v-for="(src, index) in data.certificates?.results" :key="index" @click="() => showImg(index)">
							<div class="max-w-[360px] sm:h-[125px] sm:max-w-[230px] mx-auto">
								<img :src="src.image" class="object-cover h-full w-full" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<VueEasyLightbox class="!z-40" :visible="visibleRef" :imgs="data.certificates?.results.map((item) => item.image)" :index="indexRef" @hide="onHide" />
		</section>
		<section class="bg-white p-4 sm:p-10">
			<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6">{{ translations['about.mission-title'] }}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="flex flex-col gap-4 p-4 sm:p-6 bg-grey-0 rounded-2xl">
					<div class="flex items-center justify-center h-14 w-14 bg-black rounded">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path
								d="M22.4037 13.8766C22.7037 14.3403 23.3228 14.4729 23.7865 14.1729C24.2502 13.8728 24.3828 13.2537 24.0828 12.7901L22.4037 13.8766ZM7.91708 12.7901C7.61704 13.2537 7.74968 13.8728 8.21335 14.1729C8.67702 14.4729 9.29614 14.3403 9.59618 13.8766L7.91708 12.7901ZM20.8575 16.5145C21.1416 16.0409 20.988 15.4267 20.5145 15.1425C20.0409 14.8584 19.4266 15.0119 19.1425 15.4855L20.8575 16.5145ZM7.99996 27.6667H24V25.6667H7.99996V27.6667ZM30.3333 21.3333V18.6667H28.3333V21.3333H30.3333ZM1.66663 18.6667V21.3333H3.66663V18.6667H1.66663ZM16 4.33334C8.08388 4.33334 1.66663 10.7506 1.66663 18.6667H3.66663C3.66663 11.8552 9.18845 6.33334 16 6.33334V4.33334ZM30.3333 18.6667C30.3333 10.7506 23.916 4.33334 16 4.33334V6.33334C22.8115 6.33334 28.3333 11.8552 28.3333 18.6667H30.3333ZM24 27.6667C27.4978 27.6667 30.3333 24.8311 30.3333 21.3333H28.3333C28.3333 23.7266 26.3932 25.6667 24 25.6667V27.6667ZM7.99996 25.6667C5.60673 25.6667 3.66663 23.7266 3.66663 21.3333H1.66663C1.66663 24.8311 4.50216 27.6667 7.99996 27.6667V25.6667ZM13 26.6667C13 25.0098 14.3431 23.6667 16 23.6667V21.6667C13.2385 21.6667 11 23.9053 11 26.6667H13ZM16 23.6667C17.6568 23.6667 19 25.0098 19 26.6667H21C21 23.9053 18.7614 21.6667 16 21.6667V23.6667ZM15.9999 10.3333C19.2533 10.3333 21.1436 11.9295 22.4037 13.8766L24.0828 12.7901C22.5535 10.4268 20.0963 8.33334 15.9999 8.33334V10.3333ZM9.59618 13.8766C10.8562 11.9295 12.7465 10.3333 15.9999 10.3333V8.33334C11.9036 8.33334 9.44635 10.4268 7.91708 12.7901L9.59618 13.8766ZM16.8575 23.1812L20.8575 16.5145L19.1425 15.4855L15.1425 22.1522L16.8575 23.1812Z"
								fill="#B5E275"
							/>
						</svg>
					</div>
					<h3 class="text-lg sm:text-xl">{{ translations['about.mission-card-title'] }}</h3>
					<p class="text-grey">{{ translations['about.mission-card-desc'] }}</p>
				</div>
				<div class="flex flex-col gap-4 p-4 sm:p-6 bg-grey-0 rounded-2xl">
					<div class="flex items-center justify-center h-14 w-14 bg-black rounded">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path
								d="M22.4037 13.8766C22.7037 14.3403 23.3228 14.4729 23.7865 14.1729C24.2502 13.8728 24.3828 13.2537 24.0828 12.7901L22.4037 13.8766ZM7.91708 12.7901C7.61704 13.2537 7.74968 13.8728 8.21335 14.1729C8.67702 14.4729 9.29614 14.3403 9.59618 13.8766L7.91708 12.7901ZM20.8575 16.5145C21.1416 16.0409 20.988 15.4267 20.5145 15.1425C20.0409 14.8584 19.4266 15.0119 19.1425 15.4855L20.8575 16.5145ZM7.99996 27.6667H24V25.6667H7.99996V27.6667ZM30.3333 21.3333V18.6667H28.3333V21.3333H30.3333ZM1.66663 18.6667V21.3333H3.66663V18.6667H1.66663ZM16 4.33334C8.08388 4.33334 1.66663 10.7506 1.66663 18.6667H3.66663C3.66663 11.8552 9.18845 6.33334 16 6.33334V4.33334ZM30.3333 18.6667C30.3333 10.7506 23.916 4.33334 16 4.33334V6.33334C22.8115 6.33334 28.3333 11.8552 28.3333 18.6667H30.3333ZM24 27.6667C27.4978 27.6667 30.3333 24.8311 30.3333 21.3333H28.3333C28.3333 23.7266 26.3932 25.6667 24 25.6667V27.6667ZM7.99996 25.6667C5.60673 25.6667 3.66663 23.7266 3.66663 21.3333H1.66663C1.66663 24.8311 4.50216 27.6667 7.99996 27.6667V25.6667ZM13 26.6667C13 25.0098 14.3431 23.6667 16 23.6667V21.6667C13.2385 21.6667 11 23.9053 11 26.6667H13ZM16 23.6667C17.6568 23.6667 19 25.0098 19 26.6667H21C21 23.9053 18.7614 21.6667 16 21.6667V23.6667ZM15.9999 10.3333C19.2533 10.3333 21.1436 11.9295 22.4037 13.8766L24.0828 12.7901C22.5535 10.4268 20.0963 8.33334 15.9999 8.33334V10.3333ZM9.59618 13.8766C10.8562 11.9295 12.7465 10.3333 15.9999 10.3333V8.33334C11.9036 8.33334 9.44635 10.4268 7.91708 12.7901L9.59618 13.8766ZM16.8575 23.1812L20.8575 16.5145L19.1425 15.4855L15.1425 22.1522L16.8575 23.1812Z"
								fill="#B5E275"
							/>
						</svg>
					</div>
					<h3 class="text-lg sm:text-xl">{{ translations['about.mission-card-title'] }}</h3>
					<p class="text-grey">{{ translations['about.mission-card-desc'] }}</p>
				</div>
				<div class="flex flex-col gap-4 p-4 sm:p-6 bg-grey-0 rounded-2xl">
					<div class="flex items-center justify-center h-14 w-14 bg-black rounded">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path
								d="M22.4037 13.8766C22.7037 14.3403 23.3228 14.4729 23.7865 14.1729C24.2502 13.8728 24.3828 13.2537 24.0828 12.7901L22.4037 13.8766ZM7.91708 12.7901C7.61704 13.2537 7.74968 13.8728 8.21335 14.1729C8.67702 14.4729 9.29614 14.3403 9.59618 13.8766L7.91708 12.7901ZM20.8575 16.5145C21.1416 16.0409 20.988 15.4267 20.5145 15.1425C20.0409 14.8584 19.4266 15.0119 19.1425 15.4855L20.8575 16.5145ZM7.99996 27.6667H24V25.6667H7.99996V27.6667ZM30.3333 21.3333V18.6667H28.3333V21.3333H30.3333ZM1.66663 18.6667V21.3333H3.66663V18.6667H1.66663ZM16 4.33334C8.08388 4.33334 1.66663 10.7506 1.66663 18.6667H3.66663C3.66663 11.8552 9.18845 6.33334 16 6.33334V4.33334ZM30.3333 18.6667C30.3333 10.7506 23.916 4.33334 16 4.33334V6.33334C22.8115 6.33334 28.3333 11.8552 28.3333 18.6667H30.3333ZM24 27.6667C27.4978 27.6667 30.3333 24.8311 30.3333 21.3333H28.3333C28.3333 23.7266 26.3932 25.6667 24 25.6667V27.6667ZM7.99996 25.6667C5.60673 25.6667 3.66663 23.7266 3.66663 21.3333H1.66663C1.66663 24.8311 4.50216 27.6667 7.99996 27.6667V25.6667ZM13 26.6667C13 25.0098 14.3431 23.6667 16 23.6667V21.6667C13.2385 21.6667 11 23.9053 11 26.6667H13ZM16 23.6667C17.6568 23.6667 19 25.0098 19 26.6667H21C21 23.9053 18.7614 21.6667 16 21.6667V23.6667ZM15.9999 10.3333C19.2533 10.3333 21.1436 11.9295 22.4037 13.8766L24.0828 12.7901C22.5535 10.4268 20.0963 8.33334 15.9999 8.33334V10.3333ZM9.59618 13.8766C10.8562 11.9295 12.7465 10.3333 15.9999 10.3333V8.33334C11.9036 8.33334 9.44635 10.4268 7.91708 12.7901L9.59618 13.8766ZM16.8575 23.1812L20.8575 16.5145L19.1425 15.4855L15.1425 22.1522L16.8575 23.1812Z"
								fill="#B5E275"
							/>
						</svg>
					</div>
					<h3 class="text-lg sm:text-xl">{{ translations['about.mission-card-title'] }}</h3>
					<p class="text-grey">{{ translations['about.mission-card-desc'] }}</p>
				</div>
			</div>
		</section>
		<section class="container hidden md:block mt-10 sm:mt-20 max-w-[1160px]">
			<SectionOurOffice :data="data.media?.results" />
		</section>
		<section class="container mt-10 sm:mt-20">
			<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium mb-10">{{ translations['about.how-we-work'] }}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
				<div class="flex flex-col gap-4 border p-4 sm:px-10 sm:py-8 border-grey-1" v-for="item in 5" :key="item">
					<h4 class="font-medium text-xl sm:text-2xl">Оптимизируйте расходы на IT-инфраструктуру</h4>
					<p class="text-grey">Различные модели оплаты — pay‑as‑you‑go или pay‑as‑you‑allocate. Платите только за те ресурсы, которыми пользуетесь</p>
				</div>
			</div>
		</section>
		<section class="container mt-10 sm:mt-20">
			<div class="bg-white py-10">
				<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium mb-10">{{ translations['about.team'] }}</h2>
				<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<div class="flex flex-col items-center gap-6 p-10 hover:bg-grey-0 transition-300" v-for="item in data.workers?.results" :key="item">
						<div class="max-w-52 max-h-52 rounded-full overflow-hidden">
							<img :src="item.image" alt="" />
						</div>
						<div class="flex flex-col items-center gap-2">
							<h5 class="font-medium text-base text-center">
								{{ item.title }}
							</h5>
							<p class="text-grey text-center">
								{{ item.subtitle }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="container mt-10 sm:mt-20">
			<SectionVacancy :data="data.vacancies?.results" />
		</section>
		<section class="container mt-10 sm:mt-20">
			<SectionPartners :data="data.partners?.results" />
		</section>
		<section class="bg-white py-10 sm:py-20 mt-10 sm:mt-20 overflow-hidden">
			<div class="container flex items-center justify-between mb-10">
				<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium">{{ translations['about.media'] }}</h2>
			</div>
			<div class="pr-[150px] -mr-[150px] relative z-0">
				<Swiper
					class="!overflow-visible w-full rounded-[16px]"
					:modules="[SwiperAutoplay]"
					:space-between="16"
					:slides-per-view="1"
					:loop="true"
					:speed="2000"
					:autoplay="{
						delay: 2000,
						disableOnInteraction: false
					}"
					:breakpoints="{
						0: {
							slidesPerView: 1.2
						},
						640: {
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 3
						},
						1440: {
							slidesPerView: 4
						}
					}"
				>
					<SwiperSlide v-for="(item, i) in data?.media?.results" :key="i">
						<div class="w-full h-[280px] flex-shrink-0 overflow-hidden">
							<img :src="item.image" alt="" class="w-full h-full object-cover rounded-[16px]" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
		<section>
			<HomeConsultationBanner />
		</section>
	</div>
</template>

<script setup>
import { useContactStore } from '~/stores/contact';
import { usePartnersStore } from '~/stores/partners';
import { useMediaStore } from '~/stores/media';
import { useVacancyStore } from '~/stores/vacancies.js';
import { useSertificateStore } from '~/stores/certificates.js';
import { useWorkersStore } from '~/stores/workers.js';
import { useTranslationsStore } from '~/stores/translations.js';

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index) => {
	indexRef.value = index;
	visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const sertificate = ref(null);

function onSwiper(swiper) {
	sertificate.value = swiper;
}

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const { data } = await useAsyncData('about-us', async () => {
	const [partners, media, contacts, vacancies, certificates, workers] = await Promise.all([
		usePartnersStore().getPartners(),
		useMediaStore().getMedia(),
		useContactStore().getContact(),
		useVacancyStore().getVacancies(),
		useSertificateStore().getSertificate(),
		useWorkersStore().getWorkers()
	]);

	return { partners, media, contacts, vacancies, certificates, workers };
});
</script>
