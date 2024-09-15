<script setup>
import { useApplication } from '~/stores/application';
import { useTranslationsStore } from '~/stores/translations.js';

const props = defineProps({
	tariffId: Number
});

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const applicationStore = useApplication();
const { consultationForm } = applicationStore;
const { loading } = storeToRefs(applicationStore);

const { showToast } = useCustomToast();

const isOpen = ref(false);

const form = reactive({
	name: '',
	phone: '',
	company: '',
	email: '',
	message: ''
});

const formatPhoneNumber = (phone) => {
	return phone.replace(/[^\d]/g, '');
};

const isNumber = (evt) => {
	evt = evt || window.event;
	let charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
		evt.preventDefault();
	} else {
		return true;
	}
};

const sendConsultationForm = async () => {
	try {
		await consultationForm({
			name: form.name,
			phone: formatPhoneNumber(form.phone),
			company: form.company,
			email: form.email,
			message: form.message,
			tarif: props.tariffId
		});
		isOpen.value = false;
		showToast('Tez orada siz bilan boglanamiz!', 'success');
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<div>
		<Dialog v-model:open="isOpen">
			<DialogTrigger as-child>
				<slot></slot>
			</DialogTrigger>
			<DialogContent class="sm:max-w-[580px] p-4 sm:p-8">
				<DialogHeader>
					<DialogTitle class="text-2xl">{{ translations['home.consultation-title'] }}</DialogTitle>
				</DialogHeader>
				<div class="w-full grid gap-6">
					<VForm @submit="sendConsultationForm" v-slot="{ errors }">
						<div class="grid gap-6">
							<div class="grid gap-2 relative">
								<VField name="name" rules="required" v-model="form.name">
									<Label for="name"> <span class="text-destructive">*</span> {{ translations['home.name-input'] }} </Label>
									<Input v-model="form.name" id="login" type="text" :placeholder="translations['home.name-label']" />
									<span class="text-sm text-destructive font-medium">{{ errors.name }}</span>
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="phone" rules="required" v-model="form.phone">
									<Label for="phone"><span class="text-destructive">*</span> {{ translations['home.phone-input'] }} </Label>
									<div class="relative">
										<Input @keypress="isNumber($event)" :placeholder="translations['home.phone-label']" v-model="form.phone" class="pl-6" />
										<span class="absolute start-0 inset-y-0 flex items-center justify-center px-4">+</span>
									</div>
									<span class="text-sm text-destructive font-medium">{{ errors.phone }}</span>
								</VField>
							</div>
							<div class="grid gap-2">
								<VField name="email">
									<Label for="email"> {{ translations['home.email-input'] }} </Label>
									<Input v-model="form.email" id="email" type="text" :placeholder="translations['home.email-label']" />
								</VField>
							</div>
							<div class="grid gap-2">
								<VField name="company">
									<Label for="company"> Название компании </Label>
									<Input v-model="form.company" id="company" type="text" placeholder="Компания" />
								</VField>
							</div>

							<div class="grid gap-2">
								<VField name="message">
									<Label for="message"> Your message </Label>
									<Textarea v-model="form.message" id="message" type="text" placeholder="Message" />
								</VField>
							</div>

							<Button class="ml-auto" :disabled="loading">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									font-size="48"
									class="animate-spin iconify iconify--ph w-5 h-5"
									width="1em"
									height="1em"
									viewBox="0 0 256 256"
									v-if="loading"
								>
									<path
										fill="#000"
										d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
									></path>
								</svg>
								Отправить
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.83337 14.1666L9.16671 9.99996L5.83337 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8334 14.1666L14.1667 9.99996L10.8334 5.83329" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
					</VForm>
				</div>
			</DialogContent>
		</Dialog>
	</div>
</template>
