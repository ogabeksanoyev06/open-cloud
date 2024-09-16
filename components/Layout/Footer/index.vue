<template>
	<footer class="bg-black bg-[url(~/assets/images/custom_footer_bg.png)] bg-no-repeat bg-cover bg-top text-white">
		<div class="container">
			<div class="grid lg:grid-cols-12 py-10 sm:py-20 gap-10">
				<div class="grid grid-cols-1 md:grid-cols-[290px_minmax(0,1fr)] gap-6 lg:gap-16 lg:col-span-7">
					<div class="flex flex-col gap-10">
						<NuxtLink :to="localePath('/')" class="max-w-[180px]">
							<img src="/assets/images/logo-2.png" alt="" class="w-full" />
						</NuxtLink>
						<div class="flex flex-col gap-2 sm:gap-4">
							<h4 class="text-sm sm:text-base font-medium">{{ translations['footer.address-title'] }}:</h4>
							<p class="text-sm sm:text-base">{{ translations['footer.address-desc'] }}</p>
						</div>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 mr-auto">
						<nav class="flex flex-col gap-4 max-w-[225px]">
							<h4 class="text-base font-medium">{{ translations['footer.footer-aboutus'] }}:</h4>
							<NuxtLink :to="localePath('/about-us')" class="text-sm sm:text-base">
								{{ translations['footer.footer-aboutus2'] }}
							</NuxtLink>
							<NuxtLink :to="localePath('/')" class="text-sm sm:text-base">
								{{ translations['footer.footer-product-text'] }}
							</NuxtLink>
							<NuxtLink :to="localePath('/calculator')" class="text-sm sm:text-base">
								{{ translations['header.link3'] }}
							</NuxtLink>
							<NuxtLink :to="localePath('/documentation')" class="text-sm sm:text-base">
								{{ translations['header.link4'] }}
							</NuxtLink>
							<NuxtLink :to="localePath('/partners')" class="text-sm sm:text-base">
								{{ translations['header.link5'] }}
							</NuxtLink>
						</nav>
						<nav class="flex flex-col gap-4 max-w-[225px]">
							<h4 class="text-base font-medium">Наш продукты:</h4>
							<NuxtLink v-for="item in topProducts.results" :to="localePath(`/products/${item.slug}`)" class="text-sm sm:text-base">
								{{ item.title }}
							</NuxtLink>
						</nav>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 lg:col-span-5">
					<nav class="flex flex-col gap-4 lg:ml-auto">
						<h4 class="text-base font-medium">Социально сеть:</h4>
						<div class="flex flex-wrap gap-6">
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"
										fill="white"
									/>
								</svg>
							</a>
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M13.0281 2C14.1535 2.00186 14.7238 2.00782 15.2166 2.02249L15.4107 2.02883C15.6349 2.0368 15.8561 2.0468 16.1228 2.0593C17.1869 2.10847 17.9128 2.2768 18.5503 2.5243C19.2094 2.77847 19.7661 3.1218 20.3219 3.67764C20.8769 4.23347 21.2203 4.7918 21.4753 5.4493C21.7219 6.08597 21.8903 6.81264 21.9403 7.8768C21.9522 8.14347 21.9618 8.36467 21.9697 8.58891L21.976 8.783C21.9906 9.27574 21.9973 9.84613 21.9994 10.9716L22.0002 11.7172C22.0003 11.8083 22.0003 11.9023 22.0003 11.9993L22.0002 12.2814L21.9996 13.0271C21.9977 14.1525 21.9918 14.7229 21.9771 15.2156L21.9707 15.4097C21.9628 15.634 21.9528 15.8552 21.9403 16.1218C21.8911 17.186 21.7219 17.9118 21.4753 18.5493C21.2211 19.2085 20.8769 19.7652 20.3219 20.321C19.7661 20.876 19.2069 21.2193 18.5503 21.4743C17.9128 21.721 17.1869 21.8893 16.1228 21.9393C15.8561 21.9512 15.6349 21.9609 15.4107 21.9687L15.2166 21.975C14.7238 21.9897 14.1535 21.9963 13.0281 21.9985L12.2824 21.9993C12.1913 21.9993 12.0973 21.9993 12.0003 21.9993H11.7182L10.9725 21.9986C9.8471 21.9968 9.27672 21.9908 8.78397 21.9761L8.58989 21.9698C8.36564 21.9618 8.14444 21.9518 7.87778 21.9393C6.81361 21.8902 6.08861 21.721 5.45028 21.4743C4.79194 21.2202 4.23444 20.876 3.67861 20.321C3.12278 19.7652 2.78028 19.206 2.52528 18.5493C2.27778 17.9118 2.11028 17.186 2.06028 16.1218C2.0484 15.8552 2.03871 15.634 2.03086 15.4097L2.02457 15.2156C2.00994 14.7229 2.00327 14.1525 2.00111 13.0271L2.00098 10.9716C2.00284 9.84613 2.00879 9.27574 2.02346 8.783L2.02981 8.58891C2.03778 8.36467 2.04778 8.14347 2.06028 7.8768C2.10944 6.8118 2.27778 6.0868 2.52528 5.4493C2.77944 4.79097 3.12278 4.23347 3.67861 3.67764C4.23444 3.1218 4.79278 2.7793 5.45028 2.5243C6.08778 2.2768 6.81278 2.1093 7.87778 2.0593C8.14444 2.04743 8.36564 2.03774 8.58989 2.02989L8.78397 2.0236C9.27672 2.00896 9.8471 2.00229 10.9725 2.00013L13.0281 2ZM12.0003 6.9993C9.23738 6.9993 7.00028 9.23883 7.00028 11.9993C7.00028 14.7622 9.23981 16.9993 12.0003 16.9993C14.7632 16.9993 17.0003 14.7598 17.0003 11.9993C17.0003 9.2364 14.7607 6.9993 12.0003 6.9993ZM12.0003 8.9993C13.6572 8.9993 15.0003 10.342 15.0003 11.9993C15.0003 13.6562 13.6576 14.9993 12.0003 14.9993C10.3434 14.9993 9.00028 13.6567 9.00028 11.9993C9.00028 10.3424 10.3429 8.9993 12.0003 8.9993ZM17.2503 5.4993C16.561 5.4993 16.0003 6.05921 16.0003 6.74845C16.0003 7.4377 16.5602 7.99847 17.2503 7.99847C17.9395 7.99847 18.5003 7.43857 18.5003 6.74845C18.5003 6.05921 17.9386 5.49844 17.2503 5.4993Z"
										fill="white"
									/>
								</svg>
							</a>
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245L18.3362 18.339ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
										fill="white"
									/>
								</svg>
							</a>
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"
										fill="white"
									/>
								</svg>
							</a>
						</div>
					</nav>
					<div class="flex flex-col gap-3 sm:max-w-[250px] w-full">
						<a v-if="contacts?.nbm?.split('+')[1]" target="_blank" class="flex gap-2 items-start border border-grey rounded-[8px] bg-black-1 py-2 px-4" :href="`tel:+${contacts.nbm.split('+')[1].trim()}`">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
								<path
									d="M18 16V14.3541C18 13.5363 17.5021 12.8008 16.7428 12.4971L14.7086 11.6835C13.7429 11.2971 12.6422 11.7156 12.177 12.646L12 13C12 13 9.5 12.5 7.5 10.5C5.5 8.5 5 6 5 6L5.35402 5.82299C6.28438 5.35781 6.70285 4.25714 6.31654 3.29136L5.50289 1.25722C5.19916 0.497903 4.46374 0 3.64593 0L2 0C0.895431 0 0 0.89543 0 2C0 10.8366 7.16344 18 16 18C17.1046 18 18 17.1046 18 16Z"
									fill="#B5E275"
								/>
							</svg>
							<div class="flex flex-col">
								<span>{{ translations['footer.phone1'] }}</span>
								<span> {{ '+' + contacts.nbm.split('+')[1].trim() }} </span>
							</div>
						</a>
						<a v-if="contacts?.nbm?.split('+')[2]" target="_blank" class="flex gap-2 items-start border border-grey rounded-[8px] bg-black-1 py-2 px-4" :href="`tel:+${contacts.nbm.split('+')[2].trim()}`">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
								<path
									d="M18 16V14.3541C18 13.5363 17.5021 12.8008 16.7428 12.4971L14.7086 11.6835C13.7429 11.2971 12.6422 11.7156 12.177 12.646L12 13C12 13 9.5 12.5 7.5 10.5C5.5 8.5 5 6 5 6L5.35402 5.82299C6.28438 5.35781 6.70285 4.25714 6.31654 3.29136L5.50289 1.25722C5.19916 0.497903 4.46374 0 3.64593 0L2 0C0.895431 0 0 0.89543 0 2C0 10.8366 7.16344 18 16 18C17.1046 18 18 17.1046 18 16Z"
									fill="#B5E275"
								/>
							</svg>
							<div class="flex flex-col">
								<span>{{ translations['footer.phone2'] }}</span>
								<span> {{ '+' + contacts.nbm.split('+')[2].trim() }} </span>
							</div>
						</a>
						<a :href="`mailto:${contacts.email}`" target="_blank" class="flex gap-2 items-start border border-grey rounded-[8px] bg-black-1 py-2 px-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M4 0C1.79086 0 0 1.79086 0 4L0 14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4C20 1.79086 18.2091 0 16 0L4 0ZM4.41603 4.37592C4.07138 4.14616 3.60573 4.23929 3.37597 4.58393C3.1462 4.92858 3.23933 5.39423 3.58398 5.624L7.36518 8.1448C8.9607 9.20848 11.0393 9.20848 12.6348 8.14479L16.416 5.624C16.7607 5.39423 16.8538 4.92858 16.624 4.58393C16.3943 4.23929 15.9286 4.14616 15.584 4.37592L11.8028 6.89672C10.7111 7.6245 9.2889 7.6245 8.19723 6.89672L4.41603 4.37592Z"
									fill="#B5E275"
								/>
							</svg>
							<div class="flex flex-col">
								<span>{{ translations['footer.email'] }}</span>
								<span> {{ contacts.email }} </span>
							</div>
						</a>
					</div>
				</div>
			</div>

			<!-- bottom -->
			<div class="flex items-center gap-6 justify-between flex-wrap sm:py-10 py-4 border-t border-grey">
				<p class="text-sm sm:text-base text-grey-2">{{ translations['footer.bottom'] }}</p>
				<a href="https://ndc.uz/" target="_blank" class="text-base text-grey-2">{{ translations['footer.developed'] }}: <span class="text-primary">NDC</span></a>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { useContactStore } from '~/stores/contact.js';
import { useProductsStore } from '~/stores/products.js';

const translationsStore = useTranslationsStore();
const contactStore = useContactStore();
const productsStore = useProductsStore();

const { translations } = storeToRefs(translationsStore);
const { contacts } = storeToRefs(contactStore);
const { topProducts } = storeToRefs(productsStore);

const langs = [
	{
		id: 'ru',
		label: 'Русский',
		avatar: '/assets/images/png/russian.png'
	},
	{
		id: 'uz',
		label: "O'zbek",
		avatar: '/assets/images/png/uzbek.png'
	},
	{
		id: 'en',
		label: 'English',
		avatar: '/assets/images/png/english.png'
	}
];
const localePath = useLocalePath();
const { setLocale, locale } = useI18n();

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));
const filteredLangs = computed(() => langs.filter((lang) => lang.id !== selectedLang.value.id));
const selectLang = (lang) => {
	selectedLang.value = lang;
	setLocale(lang.id);
};
</script>
