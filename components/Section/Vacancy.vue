<template>
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium">{{ translations['about.vacansy'] }}</h2>
		<NuxtLink :to="localePath('/vacancy')">
			<Button variant="link" class="p-0 text-black font-normal">
				{{ translations['about.vacansy'] }}
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M5.83325 14.1667L9.16659 10.0001L5.83325 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M10.8333 14.1667L14.1666 10.0001L10.8333 5.83342" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</Button>
		</NuxtLink>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		<ModalVacancy
			v-for="item in data?.slice(0, 4)"
			:key="item.id"
			class="w-full grid-item"
			:tariffId="item.id"
		>
			<div class="flex flex-col items-start gap-6 p-4 sm:p-8  hover:bg-white transition-300">
				<h4 class="font-medium text-lg sm:text-xl">
					{{ item.title }}
				</h4>

				<p class="text-grey flex items-center gap-2">
					<span>{{ item.exp }}</span>
		
				</p>
			</div>
		</ModalVacancy>
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
const localePath = useLocalePath();
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);
</script>

<style scoped>
@media (max-width: 639px) {
	.grid-item {
		border-bottom: 1px solid #e2e2ee;
	}

	.grid-item:first-child {
		border-top: 1px solid #e2e2ee;
	}
}

@media (min-width: 640px) and (max-width: 1023px) {
	.grid-item {
		border-right: 1px solid #e2e2ee;
		border-bottom: 1px solid #e2e2ee;
		border-top: 1px solid #e2e2ee;
	}

	.grid-item:nth-child(2n) {
		border-right: none;
	}

	.grid-item:nth-child(n + 3) {
		border-top: none;
	}
}

@media (min-width: 1024px) and (max-width: 1279px) {
	.grid-item {
		border-right: 1px solid #e2e2ee;
		border-bottom: 1px solid #e2e2ee;
		border-top: 1px solid #e2e2ee;
	}

	.grid-item:nth-child(3n) {
		border-right: none;
	}

	.grid-item:nth-child(n + 4) {
		border-top: none;
	}
}

@media (min-width: 1280px) {
	.grid-item {
		border-right: 1px solid #e2e2ee;
		border-top: 1px solid #e2e2ee;
		border-bottom: 1px solid #e2e2ee;
	}

	.grid-item:nth-child(n + 5) {
		border-top: 0;
	}
	.grid-item:nth-child(4n) {
		border-right: none !important;
	}
}
</style>
