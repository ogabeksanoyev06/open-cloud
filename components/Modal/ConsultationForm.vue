<script setup>
import { useApplication } from '~/stores/application';
import { useTranslationsStore } from "~/stores/translations.js"
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore)

const applicationStore = useApplication();
const { consultationForm } = applicationStore;
const { loading } = storeToRefs(applicationStore);

const isOpen = ref(false);

const form = reactive({
	name: '',
	phone: '+998',
	company: '',
	email: '',
	message: ''
});

const formatPhoneNumber = (phone) => {
	return phone.replace(/[^\d]/g, '');
};

const sendConsultationForm = async () => {
	try {
		await consultationForm({
			name: form.name,
			phone: formatPhoneNumber(form.phone),
			company: form.company,
			email: form.email
		});
		isOpen.value = false;
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<div>
		<Dialog>
			<DialogTrigger as-child>
				<Button class="bg-black text-white hover:bg-black/90 w-full" :disabled="loading">
					{{ translations['home.hero-consultation-btn'] }}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M5.83325 14.1665L9.16659 9.99984L5.83325 5.83317" stroke="white" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" />
						<path d="M10.8333 14.1665L14.1666 9.99984L10.8333 5.83317" stroke="white" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</Button>
			</DialogTrigger>
			<DialogContent class="sm:max-w-[580px] p-4 sm:p-8">
				<DialogHeader>
					<DialogTitle class="text-2xl">{{ translations['home.consultation-title'] }}</DialogTitle>
				</DialogHeader>
				<div class="w-full grid gap-6">
					<VForm @submit="sendConsultationForm" v-slot="{ errors }">
						<div class="grid gap-6">
							<div class="grid gap-2">
								<VField name="name" rules="required" v-model="form.name">
									<Label for="name"> {{ translations['home.name-input'] }} </Label>
									<Input v-model="form.name" id="login" type="text"
										:placeholder="translations['home.name-label']" />
									<span class="text-sm text-destructive font-medium">{{ errors.name }}</span>
								</VField>
							</div>
							<div class="grid gap-2">
								<VField name="phone" rules="required" v-model="form.phone">
									<Label for="phone"> {{ translations['home.phone-input'] }} </Label>
									<Input :placeholder="translations['home.phone-label']" v-model="form.phone" v-maska
										data-maska="+998 (##) ###-##-##" />
									<span class="text-sm text-destructive font-medium">{{ errors.phone }}</span>
								</VField>
							</div>
							<div class="grid gap-2">
								<VField name="email" rules="required|email" v-model="form.email">
									<Label for="email"> {{translations['home.email-input']}} </Label>
									<Input v-model="form.email" id="email" type="text" :placeholder="translations['home.email-label']" />
									<span class="text-sm text-destructive font-medium">{{ errors.email }}</span>
								</VField>
							</div>
							<div class="grid gap-2">
								<VField name="company" rules="required" v-model="form.email">
									<Label for="company"> {{translations['home.company-input']}} </Label>
									<Input v-model="form.company" id="company" type="text" :placeholder="translations['home.company-label']" />
									<span class="text-sm text-destructive font-medium">{{ errors.email }}</span>
								</VField>
							</div>

							<Button class="ml-auto">
								{{translations['home.send']}}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
									fill="none">
									<path d="M5.83337 14.1666L9.16671 9.99996L5.83337 5.83329" stroke="#272727"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8334 14.1666L14.1667 9.99996L10.8334 5.83329" stroke="#272727"
										stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</div>
					</VForm>
				</div>
			</DialogContent>
		</Dialog>
	</div>
</template>
