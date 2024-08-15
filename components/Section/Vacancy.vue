<template>
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium">{{ translations['about.vacansy'] }}</h2>
		<NuxtLink to="/vacancy">
			<Button variant="link" class="p-0 text-black font-normal">
				{{ translations['about.vacansy'] }}
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M5.83325 14.1667L9.16659 10.0001L5.83325 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M10.8333 14.1667L14.1666 10.0001L10.8333 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</Button>
		</NuxtLink>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
		<div class="flex flex-col gap-6 border p-4 sm:p-8 border-grey-1 hover:bg-white transition-300" v-for="item in data?.slice(0, 4)" :key="item.id">
			<ModalVacancy>
				<h4 class="font-medium text-lg sm:text-xl">
					{{ item.title }}
				</h4>
			</ModalVacancy>

			<p class="text-grey flex items-center gap-2">
				<span>{{ item.exp }}</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
						<circle cx="3" cy="3.5" r="3" fill="#9A999B" />
					</svg>
				</span>
				<span> {{ item.type }}</span>
			</p>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';

defineProps({
	data: {
		type: Array,
		required: true
	}
});

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);
</script>
