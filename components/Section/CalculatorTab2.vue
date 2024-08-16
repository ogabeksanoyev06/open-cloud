<template>
	<div class="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-6 items-start">
		<div class="flex flex-col gap-6">
			<slot />
			<div>
				<Accordion type="multiple" collapsible class="w-full">
					<AccordionItem v-for="(item, i) in tab2Configurations" :key="i" :value="i">
						<AccordionTrigger class="sm:text-xl">Конфигурация {{ item.id }}</AccordionTrigger>
						<AccordionContent class="flex flex-col gap-6">
							<div class="flex flex-col gap-6">
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
									<div class="grid gap-2">
										<Label class="sm:text-lg">vCPU</Label>
										<div class="relative">
											<span class="absolute start-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="decrementNodes(2, item.id, 'vcpu')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M11.625 1C11.625 1.34518 11.3452 1.625 11 1.625L1 1.625C0.654821 1.625 0.375 1.34518 0.375 1C0.375 0.654822 0.654821 0.375 1 0.375L11 0.375C11.3452 0.375 11.625 0.654822 11.625 1Z"
														fill="#28303F"
													/>
												</svg>
											</span>
											<Input v-model="item.vcpu" type="text" class="px-10 text-center pointer-events-none" />
											<span class="absolute end-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="incrementNodes(2, item.id, 'vcpu')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.625 1C6.625 0.654822 6.34518 0.375 6 0.375C5.65482 0.375 5.375 0.654822 5.375 1L5.375 5.375L1 5.375C0.654822 5.375 0.375 5.65482 0.375 6C0.375 6.34518 0.654822 6.625 1 6.625L5.375 6.625L5.375 11C5.375 11.3452 5.65482 11.625 6 11.625C6.34518 11.625 6.625 11.3452 6.625 11L6.625 6.625L11 6.625C11.3452 6.625 11.625 6.34518 11.625 6C11.625 5.65482 11.3452 5.375 11 5.375L6.625 5.375L6.625 1Z"
														fill="#272727"
													/>
												</svg>
											</span>
										</div>
									</div>
									<div class="grid gap-2">
										<Label class="sm:text-lg">RAM, ГБ</Label>
										<div class="relative">
											<span class="absolute start-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="decrementNodes(2, item.id, 'ram')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M11.625 1C11.625 1.34518 11.3452 1.625 11 1.625L1 1.625C0.654821 1.625 0.375 1.34518 0.375 1C0.375 0.654822 0.654821 0.375 1 0.375L11 0.375C11.3452 0.375 11.625 0.654822 11.625 1Z"
														fill="#28303F"
													/>
												</svg>
											</span>
											<Input v-model="item.ram" type="text" class="px-10 text-center pointer-events-none" />
											<span class="absolute end-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="incrementNodes(2, item.id, 'ram')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.625 1C6.625 0.654822 6.34518 0.375 6 0.375C5.65482 0.375 5.375 0.654822 5.375 1L5.375 5.375L1 5.375C0.654822 5.375 0.375 5.65482 0.375 6C0.375 6.34518 0.654822 6.625 1 6.625L5.375 6.625L5.375 11C5.375 11.3452 5.65482 11.625 6 11.625C6.34518 11.625 6.625 11.3452 6.625 11L6.625 6.625L11 6.625C11.3452 6.625 11.625 6.34518 11.625 6C11.625 5.65482 11.3452 5.375 11 5.375L6.625 5.375L6.625 1Z"
														fill="#272727"
													/>
												</svg>
											</span>
										</div>
									</div>
									<div class="grid gap-2">
										<Label class="sm:text-lg">Загрузочный диск SSD (GB)</Label>
										<div class="relative">
											<span class="absolute start-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="decrementNodes(2, item.id, 'ssd')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M11.625 1C11.625 1.34518 11.3452 1.625 11 1.625L1 1.625C0.654821 1.625 0.375 1.34518 0.375 1C0.375 0.654822 0.654821 0.375 1 0.375L11 0.375C11.3452 0.375 11.625 0.654822 11.625 1Z"
														fill="#28303F"
													/>
												</svg>
											</span>
											<Input v-model="item.ssdNodes" type="text" class="px-10 text-center pointer-events-none" />
											<span class="absolute end-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="incrementNodes(2, item.id, 'ssd')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.625 1C6.625 0.654822 6.34518 0.375 6 0.375C5.65482 0.375 5.375 0.654822 5.375 1L5.375 5.375L1 5.375C0.654822 5.375 0.375 5.65482 0.375 6C0.375 6.34518 0.654822 6.625 1 6.625L5.375 6.625L5.375 11C5.375 11.3452 5.65482 11.625 6 11.625C6.34518 11.625 6.625 11.3452 6.625 11L6.625 6.625L11 6.625C11.3452 6.625 11.625 6.34518 11.625 6C11.625 5.65482 11.3452 5.375 11 5.375L6.625 5.375L6.625 1Z"
														fill="#272727"
													/>
												</svg>
											</span>
										</div>
									</div>
									<div class="grid gap-2">
										<Label class="sm:text-lg">Загрузочный диск HDD (GB)</Label>
										<div class="relative">
											<span class="absolute start-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="decrementNodes(2, item.id, 'hdd')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M11.625 1C11.625 1.34518 11.3452 1.625 11 1.625L1 1.625C0.654821 1.625 0.375 1.34518 0.375 1C0.375 0.654822 0.654821 0.375 1 0.375L11 0.375C11.3452 0.375 11.625 0.654822 11.625 1Z"
														fill="#28303F"
													/>
												</svg>
											</span>
											<Input v-model="item.hddNodes" type="text" class="px-10 text-center pointer-events-none" />
											<span class="absolute end-0 inset-y-0 flex items-center justify-center px-4 cursor-pointer" @click="incrementNodes(2, item.id, 'hdd')">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.625 1C6.625 0.654822 6.34518 0.375 6 0.375C5.65482 0.375 5.375 0.654822 5.375 1L5.375 5.375L1 5.375C0.654822 5.375 0.375 5.65482 0.375 6C0.375 6.34518 0.654822 6.625 1 6.625L5.375 6.625L5.375 11C5.375 11.3452 5.65482 11.625 6 11.625C6.34518 11.625 6.625 11.3452 6.625 11L6.625 6.625L11 6.625C11.3452 6.625 11.625 6.34518 11.625 6C11.625 5.65482 11.3452 5.375 11 5.375L6.625 5.375L6.625 1Z"
														fill="#272727"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>
								<div class="flex items-center space-x-2 mb-4">
									<Switch v-model:checked="item.publicIP" id="airplane-mode" />
									<Label for="airplane-mode" class="flex items-center gap-2">
										Публичный IP-адрес
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<g clip-path="url(#clip0_894_10288)">
												<path
													d="M11.4026 8.40001L12.0333 8.80585L12.0333 8.80585L11.4026 8.40001ZM7.58329 7.49935C7.58329 7.91356 7.91908 8.24935 8.33329 8.24935C8.74751 8.24935 9.08329 7.91356 9.08329 7.49935H7.58329ZM9.24996 11.2493C9.24996 11.6636 9.58575 11.9993 9.99996 11.9993C10.4142 11.9993 10.75 11.6636 10.75 11.2493H9.24996ZM10.75 13.3327C10.75 12.9185 10.4142 12.5827 9.99996 12.5827C9.58575 12.5827 9.24996 12.9185 9.24996 13.3327H10.75ZM9.24996 14.166C9.24996 14.5802 9.58575 14.916 9.99996 14.916C10.4142 14.916 10.75 14.5802 10.75 14.166H9.24996ZM17.5833 9.99935C17.5833 14.1875 14.1881 17.5827 9.99996 17.5827V19.0827C15.0165 19.0827 19.0833 15.0159 19.0833 9.99935H17.5833ZM9.99996 17.5827C5.8118 17.5827 2.41663 14.1875 2.41663 9.99935H0.916626C0.916626 15.0159 4.98337 19.0827 9.99996 19.0827V17.5827ZM2.41663 9.99935C2.41663 5.81119 5.8118 2.41602 9.99996 2.41602V0.916016C4.98337 0.916016 0.916626 4.98276 0.916626 9.99935H2.41663ZM9.99996 2.41602C14.1881 2.41602 17.5833 5.81119 17.5833 9.99935H19.0833C19.0833 4.98276 15.0165 0.916016 9.99996 0.916016V2.41602ZM10.9166 7.49935C10.9166 7.68296 10.8634 7.85185 10.7718 7.99417L12.0333 8.80585C12.2759 8.42873 12.4166 7.97933 12.4166 7.49935H10.9166ZM9.08329 7.49935C9.08329 6.99309 9.4937 6.58268 9.99996 6.58268V5.08268C8.66527 5.08268 7.58329 6.16466 7.58329 7.49935H9.08329ZM9.99996 6.58268C10.5062 6.58268 10.9166 6.99309 10.9166 7.49935H12.4166C12.4166 6.16466 11.3346 5.08268 9.99996 5.08268V6.58268ZM9.24996 10.8327V11.2493H10.75V10.8327H9.24996ZM10.7718 7.99417C10.6708 8.15116 10.5432 8.31539 10.3889 8.50706C10.2426 8.68898 10.0661 8.90292 9.90802 9.12018C9.59715 9.54743 9.24996 10.1255 9.24996 10.8327H10.75C10.75 10.6194 10.855 10.3682 11.1209 10.0027C11.2512 9.82361 11.3943 9.65036 11.5576 9.4474C11.7131 9.2542 11.8852 9.03589 12.0333 8.80585L10.7718 7.99417ZM9.24996 13.3327V14.166H10.75V13.3327H9.24996Z"
													fill="#272727"
												/>
											</g>
											<defs>
												<clipPath id="clip0_894_10288">
													<rect width="20" height="20" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</Label>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Button @click="addConfiguration(2)" class="mt-10 w-full">
					Ещё конфигурация
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.125 1C7.125 0.654822 6.84518 0.375 6.5 0.375C6.15482 0.375 5.875 0.654822 5.875 1L5.875 5.375L1.5 5.375C1.15482 5.375 0.875 5.65482 0.875 6C0.875 6.34518 1.15482 6.625 1.5 6.625L5.875 6.625L5.875 11C5.875 11.3452 6.15482 11.625 6.5 11.625C6.84518 11.625 7.125 11.3452 7.125 11L7.125 6.625L11.5 6.625C11.8452 6.625 12.125 6.34518 12.125 6C12.125 5.65482 11.8452 5.375 11.5 5.375L7.125 5.375L7.125 1Z"
							fill="#272727"
						/>
					</svg>
				</Button>
			</div>
		</div>
		<div class="lg:sticky top-28 left-0 h-[calc(100vh-100px)] overflow-hidden rounded-2xl">
			<div class="bg-grey-0 rounded-2xl flex flex-col gap-6 overflow-auto h-full">
				<div class="flex items-center justify-between p-6">
					<h3 class="flex-1 text-lg sm:text-2xl font-medium">Итоговый расчет</h3>
					<Button variant="link" class="text-destructive hover:no-underline font-normal p-0" @click="deleteAllConfigurations(2)">Очистка</Button>
				</div>
				<div class="flex flex-col gap-6 p-6" v-for="(item, i) in tab2Configurations" :key="item.id" :value="item.id">
					<div class="flex items-center justify-between">
						<h4 class="text-base sm:text-xl">Конфигурация {{ i + 1 }}</h4>
						<Button @click="deleteConfiguration(2, item.id)" variant="ghost" class="p-0 h-auto">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M19 9L18.2841 18.3068C18.1238 20.3908 16.386 22 14.2959 22H9.70412C7.61398 22 5.87621 20.3908 5.71591 18.3068L5 9M21 7C18.4021 5.73398 15.3137 5 12 5C8.68635 5 5.59792 5.73398 3 7M10 5V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V5M10 11L10 17M14 11V17"
									stroke="#272727"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
							</svg>
						</Button>
					</div>
					<ul class="flex flex-col gap-4">
						<li class="flex items-center justify-between">
							<span class="text-grey text-base">{{ item.vcpu }} vCPU</span>
							<span class="text-base"> {{ item.price?.vcpu_price * item.vcpu }}сум </span>
						</li>
						<li class="flex items-center justify-between">
							<span class="text-grey text-base">{{ item.ram }} ГБ RAM</span>
							<span class="text-base">{{ item.price?.ram_price * item.ram }} сум</span>
						</li>
						<li class="flex items-center justify-between">
							<span class="text-grey text-base">{{ item.hddNodes }} ГБ HDD</span>
							<span class="text-base">{{ item.price?.hdd_price * item.hddNodes }} сум</span>
						</li>
						<li class="flex items-center justify-between">
							<span class="text-grey text-base">{{ item.ssdNodes }} ГБ SDD</span>
							<span class="text-base">{{ item.price?.ssd_price * item.ssdNodes }} сум</span>
						</li>
						<li class="flex items-center justify-between" v-if="item.publicIP">
							<span class="text-grey text-base"> Публичный IP-адрес</span>
							<span class="text-base">{{ item.price?.public_ip_price }} сум</span>
						</li>
					</ul>
					<div class="shrink-0 bg-grey-1 relative h-px w-full"></div>
				</div>
				<div class="flex flex-col gap-6 mt-auto p-6 sticky bottom-0 bg-grey-0">
					<div class="flex flex-col gap-2">
						<h4 class="text-sm sm:text-base text-grey">Цена за месяц</h4>
						<h3 class="text-xl sm:text-2xl font-medium">{{ formatPrice(calculateTotalPriceTab2) }} сум/месяц</h3>
					</div>
					<div class="flex flex-col gap-4">
						<ModalOrderCreate :tab="2" />
						<Button variant="outline"> Скачать расчет </Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCalculatorStore } from '~/stores/calculator.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const calculatorStore = useCalculatorStore();

const { tab2Configurations, calculateTotalPriceTab2 } = storeToRefs(calculatorStore);
const { addConfiguration, deleteConfiguration, deleteAllConfigurations, incrementNodes, decrementNodes } = calculatorStore;

const selectedType = ref(0);

const selectedIndex = ref(0);
</script>
