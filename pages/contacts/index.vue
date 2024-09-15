<template>
	<div class="grid">
		<div class="container">
			<div class="border-x border-b flex flex-col items-center gap-10 pb-10 pt-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink as-child>
								<NuxtLink :to="localePath('/')"> Главный </NuxtLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Контакты </BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium">{{ translations['contacts.title'] }}</h1>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10"></div>
		</div>
		<div class="sm:container sm:max-w-[1760px]">
			<div class="bg-white py-6 sm:py-20 sm:rounded-[40px]">
				<div class="container flex flex-col gap-10 sm:gap-20">
					<div class="flex flex-col gap-6">
						<h3 class="text-xl sm:text-2xl font-medium">Контактные данные для связи</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div class="flex flex-col gap-10 bg-grey-0 rounded-2xl p-6">
								<p class="text-grey">{{ translations['contacts.phone'] }}</p>
								<div class="flex flex-col flex-wrap gap-2">
									<a v-if="contacts?.nbm?.split('+')[1]" target="_blank" class="transition-300 font-medium text-xl hover:text-primary" :href="`tel:+${contacts.nbm.split('+')[1].trim()}`">
										{{ '+' + contacts.nbm.split('+')[1].trim() }}
									</a>
									<a v-if="contacts?.nbm?.split('+')[2]" target="_blank" class="transition-300 font-medium text-xl hover:text-primary" :href="`tel:+${contacts.nbm.split('+')[2].trim()}`">
										{{ '+' + contacts.nbm.split('+')[2].trim() }}
									</a>
								</div>
							</div>
							<div class="flex flex-col gap-10 bg-grey-0 rounded-2xl p-6 group">
								<p class="text-grey">{{ translations['contacts.email'] }}</p>
								<a :href="`mailto:${contacts.email}`" target="_blank" class="transition-300 text-xl font-medium group-hover:text-primary">{{ contacts.email }}</a>
							</div>
							<div class="flex flex-col gap-10 bg-grey-0 rounded-2xl p-6">
								<p class="text-grey">{{ translations['contacts.social'] }}</p>
								<div class="flex gap-6">
									<a :href="contacts.telegram" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
											<circle cx="16" cy="16" r="14" fill="url(#paint0_linear_528_11758)" />
											<path
												d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
												fill="white"
											/>
											<defs>
												<linearGradient id="paint0_linear_528_11758" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
													<stop stop-color="#37BBFE" />
													<stop offset="1" stop-color="#007DBB" />
												</linearGradient>
											</defs>
										</svg>
									</a>
									<a :href="contacts.facebook" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
											<circle cx="16" cy="16" r="14" fill="url(#paint0_linear_528_11759)" />
											<path
												d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
												fill="white"
											/>
											<defs>
												<linearGradient id="paint0_linear_528_11759" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
													<stop stop-color="#18ACFE" />
													<stop offset="1" stop-color="#0163E0" />
												</linearGradient>
											</defs>
										</svg>
									</a>
									<a href="" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
											<path
												d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7095 8.62731 27.7224 8.65878 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z"
												fill="#47ACDF"
											/>
										</svg>
									</a>
									<a href="" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
											<rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
											<path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white" />
											<path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" />
											<path
												d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="grid lg:grid-cols-[400px_minmax(0,1fr)] gap-10 lg:items-start">
						<div class="flex flex-col gap-6">
							<h3 class="text-xl sm:text-2xl font-medium">{{ translations['contacts.form-title'] }}</h3>
							<VForm @submit="submitForm" v-slot="{ errors }">
								<div class="flex flex-col items-start gap-4">
									<div class="grid gap-2 w-full">
										<VField name="name" rules="required" v-model="form.name">
											<Label for="name"> {{ translations['contacts.name-label'] }} </Label>
											<Input v-model="form.name" id="login" type="text" :placeholder="translations['contacts.name-input']" />
											<span class="text-sm text-destructive font-medium">{{ errors.name }}</span>
										</VField>
									</div>
									<div class="grid gap-2 w-full">
										<VField name="email">
											<Label for="email"> {{ translations['contacts.phone-email-input'] }} </Label>
											<Input v-model="form.email" id="email" type="text" :placeholder="translations['contacts.phone-email-input']" />
										</VField>
									</div>
									<div class="grid gap-2 w-full">
										<VField name="message" rules="required" v-model="form.message">
											<Label for="message"> {{ translations['contacts.message-label'] }} </Label>
											<Textarea class="min-h-[125px]" v-model="form.message" id="message" type="text" :placeholder="translations['contacts.message-input']" />
											<span class="text-sm text-destructive font-medium">{{ errors.message }}</span>
										</VField>
									</div>
									<Button type="submit" :disabled="loading" class="sm:w-auto w-fit sm:ml-auto">
										{{ translations['contacts.send'] }}
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M5.8335 14.168L9.16683 10.0013L5.8335 5.83464" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M10.8335 14.168L14.1668 10.0013L10.8335 5.83464" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</Button>
								</div>
							</VForm>
						</div>
						<div>
							<div v-html="contacts.map" class="min-h-[360px] lg:min-h-[500px] h-full rounded-3xl overflow-hidden"></div>
						</div>
					</div>
					<section class="sm:mt-10">
						<HomeClientBanner />
					</section>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="border-x py-10"></div>
		</div>
	</div>
</template>

<script setup>
import { useApplication } from '~/stores/application.js';
import { useContactStore } from '~/stores/contact.js';
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const { loading } = storeToRefs(useApplication());

const { showToast } = useCustomToast();

const form = reactive({
	name: '',
	email: '',
	message: ''
});

async function submitForm() {
	try {
		let res = await useApplication().consultationForm(form);
		form.name = '';
		form.email = '';
		form.message = '';
		if (res) {
			showToast('Tez orada siz bilan boglanamiz!', 'success');
		}
		console.log(res);
	} catch (error) {
		console.log(error);
	}
}

const { data: contacts } = await useAsyncData('contacts', async () => {
	return await useContactStore().getContact();
});
</script>
