<template>
	<transition name="fade">
		<div v-if="isMenuOpen" @click="isMenuOpen = false" class="hidden lg:block w-screen h-screen fixed top-0 left-0 z-[30] bg-black/[0.4] backdrop-blur-sm"></div>
	</transition>
	<header id="header" class="sticky z-40 top-0 bg-background backdrop-blur-lg">
		<div class="container flex h-16 sm:h-[100px] items-center">
			<div class="mr-4 lg:mr-1 flex items-center">
				<NuxtLink :to="localePath('/')" class="mr-4 md:mr-2 xl:mr-6 flex items-center flex-shrink-0">
					<img src="/assets/images/logo.png" alt="" class="max-w-[100px]" />
				</NuxtLink>
				<nav class="hidden lg:flex flex-wrap items-center max-lg:space-x-4 lg:space-x-8 xl:space-x-10 text-base font-normal">
					<Button variant="ghost" class="!p-0 gap-2 hover:bg-transparent text-base font-normal" @click="isMenuOpen = !isMenuOpen">
						{{ translations['header.link1'] }}
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M5.8335 8.33325L10.0002 11.6666L14.1668 8.33325" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</span>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger as-child>
							<Button variant="ghost" class="!p-0 gap-2 hover:bg-transparent text-base font-normal">
								{{ translations['header.link2'] }}
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M5.83325 8.33325L9.99992 11.6666L14.1666 8.33325" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start" class="flex flex-col gap-4 p-4 w-[220px] rounded-xl">
							<NuxtLink :to="localePath('/about-us')" class="transition-300 text-grey" :class="{ '!text-black': route.path === localePath('/about-us') }">
								<DropdownMenuItem class="flex justify-between items-center cursor-pointer p-0 hover:!bg-transparent">
									{{ translations['header.link2'] }}
									<span v-if="route.path === localePath('/about-us')">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
								</DropdownMenuItem>
							</NuxtLink>
							<NuxtLink :to="localePath('/vacancy')" class="transition-300 text-grey" :class="{ '!text-black': route.path === localePath('/vacancy') }">
								<DropdownMenuItem class="flex justify-between items-center cursor-pointer p-0 hover:!bg-transparent">
									Вакансия
									<span v-if="route.path === localePath('/vacancy')">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
								</DropdownMenuItem>
							</NuxtLink>
							<NuxtLink :to="localePath('/news')" class="transition-300 text-grey" :class="{ '!text-black': route.path === localePath('/news') }">
								<DropdownMenuItem class="flex justify-between items-center cursor-pointer p-0 hover:!bg-transparent">
									Новости
									<span v-if="route.path === localePath('/news')">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
								</DropdownMenuItem>
							</NuxtLink>
							<NuxtLink :to="localePath('/cases')" class="transition-300 text-grey" :class="{ '!text-black': route.path === localePath('/cases') }">
								<DropdownMenuItem class="flex justify-between items-center cursor-pointer p-0 hover:!bg-transparent">
									Наши кейсы

									<span v-if="route.path === localePath('/cases')">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
								</DropdownMenuItem>
							</NuxtLink>
						</DropdownMenuContent>
					</DropdownMenu>
					<NuxtLink :to="localePath('/calculator')" class="transition-300">{{ translations['header.link3'] }} </NuxtLink>
					<NuxtLink :to="localePath('/documentation')" class="transition-300">{{ translations['header.link4'] }} </NuxtLink>
					<NuxtLink :to="localePath('/partners')" class="transition-300">{{ translations['header.link5'] }} </NuxtLink>
					<NuxtLink :to="localePath('/contacts')" class="transition-300">{{ translations['header.link6'] }} </NuxtLink>
				</nav>
			</div>
			<button @click="isOpen = true" class="lg:hidden flex justify-end flex-1">
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
					<path d="M11.6665 13.3333H28.3332M11.6665 19.9999H28.3332M11.6665 26.6666H28.3332" stroke="#272727" stroke-width="1.5" stroke-linecap="round" />
				</svg>
			</button>
			<div class="hidden lg:flex flex-1 items-center space-x-2 justify-end">
				<DropdownMenu>
					<DropdownMenuTrigger as-child>
						<Button variant="secondary" class="!px-4">
							{{ selectedLang.label }}
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.83325 8.33325L9.99992 11.6666L14.1666 8.33325" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" class="flex flex-col gap-1 w-[175px] p-3">
						<DropdownMenuItem @click="selectLang(lang)" v-for="(lang, i) in filteredLangs" :key="i" class="p-0 focus:!bg-transparent cursor-pointer rounded">
							{{ lang.label }}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger as-child>
						<Button variant="secondary" class="!px-4">
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
									<path
										d="M15.5 14.8333V13.4617C15.5 12.7802 15.0851 12.1674 14.4523 11.9143L12.7572 11.2362C11.9524 10.9143 11.0352 11.263 10.6475 12.0383L10.5 12.3333C10.5 12.3333 8.41667 11.9167 6.75 10.25C5.08333 8.58333 4.66667 6.5 4.66667 6.5L4.96168 6.35249C5.73698 5.96484 6.08571 5.04761 5.76379 4.2428L5.08574 2.54768C4.83263 1.91492 4.21979 1.5 3.53828 1.5L2.16667 1.5C1.24619 1.5 0.5 2.24619 0.5 3.16667C0.5 10.5305 6.46954 16.5 13.8333 16.5C14.7538 16.5 15.5 15.7538 15.5 14.8333Z"
										fill="#272727"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.20825 4.83333C8.20825 4.48816 8.48807 4.20833 8.83325 4.20833C9.35307 4.20833 9.86779 4.31072 10.348 4.50964C10.8283 4.70857 11.2647 5.00014 11.6322 5.3677C11.9998 5.73527 12.2914 6.17163 12.4903 6.65188C12.6892 7.13213 12.7916 7.64685 12.7916 8.16667C12.7916 8.51185 12.5118 8.79167 12.1666 8.79167C11.8214 8.79167 11.5416 8.51185 11.5416 8.16667C11.5416 7.811 11.4715 7.45882 11.3354 7.13023C11.1993 6.80164 10.9998 6.50308 10.7483 6.25159C10.4968 6.00009 10.1983 5.8006 9.86969 5.66449C9.5411 5.52839 9.18892 5.45833 8.83325 5.45833C8.48807 5.45833 8.20825 5.17851 8.20825 4.83333Z"
										fill="#272727"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.20825 1.5C8.20825 1.15482 8.48807 0.875 8.83325 0.875C9.79081 0.875 10.739 1.0636 11.6237 1.43005C12.5083 1.79649 13.3121 2.33359 13.9892 3.01068C14.6663 3.68777 15.2034 4.4916 15.5699 5.37627C15.9363 6.26093 16.1249 7.20911 16.1249 8.16667C16.1249 8.51184 15.8451 8.79167 15.4999 8.79167C15.1547 8.79167 14.8749 8.51184 14.8749 8.16667C14.8749 7.37326 14.7186 6.58763 14.415 5.85462C14.1114 5.12161 13.6664 4.45558 13.1054 3.89456C12.5443 3.33354 11.8783 2.88852 11.1453 2.58489C10.4123 2.28127 9.62665 2.125 8.83325 2.125C8.48807 2.125 8.20825 1.84518 8.20825 1.5Z"
										fill="#272727"
									/>
								</svg>
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.83325 8.33325L9.99992 11.6666L14.1666 8.33325" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" class="flex flex-col gap-2 p-3 w-[175px]">
						<a v-for="contact in formattedContacts" :key="contact" :href="`tel:${contact}`" target="_blank">
							<DropdownMenuItem class="p-0 focus:!bg-transparent cursor-pointer">
								{{ contact }}
							</DropdownMenuItem>
						</a>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button class="gap-2">
					{{ translations['header.login'] }}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<ellipse cx="10.0001" cy="14.5834" rx="5.83333" ry="2.91667" stroke="#272727" stroke-width="1.5" stroke-linejoin="round" />
						<ellipse cx="10.0001" cy="5.83333" rx="3.33333" ry="3.33333" stroke="#272727" stroke-width="1.5" stroke-linejoin="round" />
					</svg>
				</Button>
			</div>
		</div>
		<transition name="modal">
			<aside v-if="isMenuOpen" class="hidden lg:block absolute p-6 transition-300 w-full z-[9] left-0 top-16 sm:top-[100px] bg-grey-0">
				<div class="container">
					<div class="grid lg:grid-cols-[400px_minmax(0,1fr)] gap-6 items-start">
						<ul class="flex flex-col gap-6">
							<li
								v-for="category in categories.results"
								@click="linkTrigger(category.slug)"
								:key="category.id"
								:class="category.id === activeId ? 'before:w-1 text-black' : 'before:w-0 text-grey'"
								class="cursor-pointer pl-6 flex items-center justify-between duration-200 gap-x-6 relative before:duration-200 before:absolute before:left-0 before:top-0 before:h-full before:bg-green before:rounded-e-full"
							>
								<span>{{ category.title }}</span>
								<transition name="modal-icon">
									<span v-if="category.id === activeId">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
								</transition>
							</li>
						</ul>
						<transition name="modal-icon">
							<div class="flex flex-col gap-6 bg-white p-10 rounded-2xl">
								<h3 class="text-2xl font-medium">{{ categoriesInner.title }}</h3>
								<nav class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									<NuxtLink :to="localePath(`/products/${item.slug}`)" class="flex flex-col gap-2" v-for="item in categoriesInner.products" :key="item.id">
										<p class="font-medium text-base">{{ item.title }}</p>
										<p class="to-grey">
											{{ item.subtitle }}
										</p>
									</NuxtLink>
								</nav>
							</div>
						</transition>
					</div>
				</div>
			</aside>
		</transition>
		<Sheet v-model:open="isOpen">
			<SheetContent side="left" class="w-full h-full p-0">
				<ScrollArea class="h-screen">
					<div class="flex flex-col justify-between gap-10 p-6 h-screen">
						<NuxtLink :to="localePath('/')">
							<img src="/assets/images/logo.png" alt="" class="max-w-[120px]" />
						</NuxtLink>
						<nav class="flex flex-col gap-8">
							<button @click="activeSheet" class="flex items-center justify-between font-medium w-full">
								{{ translations['header.link1'] }}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
									<path d="M11.6667 7.16675L15 10.5001M15 10.5001L11.6667 13.8334M15 10.5001L5 10.5001" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</button>
							<NuxtLink :to="localePath('/calculator')">{{ translations['header.link3'] }}</NuxtLink>
							<NuxtLink :to="localePath('/about-us')">{{ translations['header.link2'] }}</NuxtLink>
							<NuxtLink :to="localePath('/documentation')">{{ translations['header.link4'] }}</NuxtLink>
							<NuxtLink :to="localePath('/partners')">{{ translations['header.link5'] }}</NuxtLink>
							<NuxtLink :to="localePath('/contacts')">{{ translations['header.link6'] }}</NuxtLink>
						</nav>
						<div class="flex flex-col gap-6 mt-auto">
							<Accordion type="single" class="w-full" collapsible>
								<AccordionItem value="langs">
									<AccordionTrigger class="px-2 text-base">{{ selectedLang.label }}</AccordionTrigger>
									<AccordionContent class="">
										<div @click="selectLang(lang)" v-for="(lang, i) in filteredLangs" :key="i" class="cursor-pointer p-2 hover:bg-secondary rounded">
											<span> {{ lang.label }}</span>
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="phone" class="border-none">
									<AccordionTrigger class="px-2">
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
												<path
													d="M15.5 14.8333V13.4617C15.5 12.7802 15.0851 12.1674 14.4523 11.9143L12.7572 11.2362C11.9524 10.9143 11.0352 11.263 10.6475 12.0383L10.5 12.3333C10.5 12.3333 8.41667 11.9167 6.75 10.25C5.08333 8.58333 4.66667 6.5 4.66667 6.5L4.96168 6.35249C5.73698 5.96484 6.08571 5.04761 5.76379 4.2428L5.08574 2.54768C4.83263 1.91492 4.21979 1.5 3.53828 1.5L2.16667 1.5C1.24619 1.5 0.5 2.24619 0.5 3.16667C0.5 10.5305 6.46954 16.5 13.8333 16.5C14.7538 16.5 15.5 15.7538 15.5 14.8333Z"
													fill="#272727"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M8.20825 4.83333C8.20825 4.48816 8.48807 4.20833 8.83325 4.20833C9.35307 4.20833 9.86779 4.31072 10.348 4.50964C10.8283 4.70857 11.2647 5.00014 11.6322 5.3677C11.9998 5.73527 12.2914 6.17163 12.4903 6.65188C12.6892 7.13213 12.7916 7.64685 12.7916 8.16667C12.7916 8.51185 12.5118 8.79167 12.1666 8.79167C11.8214 8.79167 11.5416 8.51185 11.5416 8.16667C11.5416 7.811 11.4715 7.45882 11.3354 7.13023C11.1993 6.80164 10.9998 6.50308 10.7483 6.25159C10.4968 6.00009 10.1983 5.8006 9.86969 5.66449C9.5411 5.52839 9.18892 5.45833 8.83325 5.45833C8.48807 5.45833 8.20825 5.17851 8.20825 4.83333Z"
													fill="#272727"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M8.20825 1.5C8.20825 1.15482 8.48807 0.875 8.83325 0.875C9.79081 0.875 10.739 1.0636 11.6237 1.43005C12.5083 1.79649 13.3121 2.33359 13.9892 3.01068C14.6663 3.68777 15.2034 4.4916 15.5699 5.37627C15.9363 6.26093 16.1249 7.20911 16.1249 8.16667C16.1249 8.51184 15.8451 8.79167 15.4999 8.79167C15.1547 8.79167 14.8749 8.51184 14.8749 8.16667C14.8749 7.37326 14.7186 6.58763 14.415 5.85462C14.1114 5.12161 13.6664 4.45558 13.1054 3.89456C12.5443 3.33354 11.8783 2.88852 11.1453 2.58489C10.4123 2.28127 9.62665 2.125 8.83325 2.125C8.48807 2.125 8.20825 1.84518 8.20825 1.5Z"
													fill="#272727"
												/>
											</svg>
										</span>
									</AccordionTrigger>
									<AccordionContent v-for="contact in formattedContacts" :key="contact">
										<a :href="`tel:${contact}`" target="_blank">
											{{ contact }}
										</a>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							<ModalConsultationForm>
								<Button class="w-full">
									{{ translations['header.login'] }}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
										<ellipse cx="9.99984" cy="15.0833" rx="5.83333" ry="2.91667" stroke="#272727" stroke-width="1.5" stroke-linejoin="round" />
										<ellipse cx="9.99984" cy="6.33333" rx="3.33333" ry="3.33333" stroke="#272727" stroke-width="1.5" stroke-linejoin="round" />
									</svg>
								</Button>
							</ModalConsultationForm>
						</div>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
		<Sheet v-model:open="isCatalogOpen" class="">
			<SheetContent side="left" class="p-6 w-full z-[999]">
				<div class="flex flex-col h-full gap-6">
					<h3 class="font-medium text-lg flex gap-2 items-center" @click="closeProductModal">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
							<path d="M11.6665 6.33325L8.33317 10.4999L11.6665 14.6666" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						{{ translations['header.link1'] }}
					</h3>
					<Accordion type="single" class="w-full" collapsible>
						<AccordionItem class="border-none" v-for="category in categories.results" :key="category.id" :value="category.slug">
							<AccordionTrigger class="text-sm font-medium to-grey hover:no-underline"> {{ category.title }} </AccordionTrigger>
							<AccordionContent>
								<nav class="flex flex-col gap-4">
									<NuxtLink v-for="item in categoriesInner.products" :to="localePath(`/products/${item.slug}`)" :key="item.id" class="flex flex-col gap-4 overflow-hidden">
										<div class="grid gap-2">
											<h4 class="text-xs font-medium">
												{{ item.title }}
											</h4>
											<p class="text-xs text-grey">{{ item.subtitle }}</p>
										</div>
										<div class="shrink-0 bg-[#E2E2EE] relative h-px w-full"></div>
									</NuxtLink>
								</nav>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	</header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useContactStore } from '~/stores/contact.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationsStore } from '~/stores/translations.js';

const langs = [
	{
		id: 'ru',
		label: 'Русский',
		avatar: '/assets/images/png/russian.png'
	},
	{
		id: 'uz',
		label: "O'zbek tili",
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

const isMenuOpen = ref(false);
const route = useRoute();

const contactStore = useContactStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationsStore();

const { categories, categoriesInner } = storeToRefs(categoriesStore);
const { translations } = storeToRefs(translationsStore);
const { contacts } = storeToRefs(contactStore);

const activeId = ref(null);
const isOpen = ref(false);
const isCatalogOpen = ref(false);

const activeSheet = () => {
	isCatalogOpen.value = true;
	isOpen.value = false;
};

const closeProductModal = () => {
	isCatalogOpen.value = false;
	isOpen.value = true;
};

const linkTrigger = async (slug) => {
	activeId.value = categories.value?.results?.find((el) => el.slug === slug).id;
	await categoriesStore.getCategoriesInner(slug);
};

const formattedContacts = computed(() => {
	if (!contacts.value || !contacts.value.nbm) return [];
	return contacts.value.nbm.split(',').map((contact) => contact.trim());
});

const filteredLangs = computed(() => langs.filter((lang) => lang.id !== selectedLang.value.id));

const eventHeaderShadowHandler = () => {
	const header = document.querySelector('#header');
	if (window.scrollY > 106) {
		if (!isMenuOpen.value) {
			header.classList.add('shadow-lg');
		} else {
			header.classList.remove('shadow-lg');
		}
	} else if (window.scrollY <= 106) {
		header.classList.remove('shadow-lg');
	}
};

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));

const selectLang = (lang) => {
	selectedLang.value = lang;
	setLocale(lang.id);
};

watch(isMenuOpen, (value) => {
	eventHeaderShadowHandler();
	if (value) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
});

watch(route, () => {
	isMenuOpen.value = false;
	isOpen.value = false;
});
watch(locale, () => {
	if (categories.value && categories.value?.results?.length > 0) {
		linkTrigger(categories.value?.results[0]?.slug);
	}
});
onMounted(() => {
	if (categories.value && categories.value?.results?.length > 0) {
		linkTrigger(categories.value?.results[0]?.slug);
	}
	window.addEventListener('scroll', eventHeaderShadowHandler);
});

onUnmounted(() => {
	window.removeEventListener('scroll', eventHeaderShadowHandler);
});
</script>

<style scoped>
.router-link-active {
	color: hsl(var(--primary));
}
</style>
