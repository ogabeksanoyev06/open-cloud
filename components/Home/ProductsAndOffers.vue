<template>
	<div class="container">
		<div class="flex flex-col gap-8 sm:py-20 py-10 sm:border-x border-grey-1">
			<h3 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">
				{{ translations['home.products'] }}
			</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<NuxtLink class="p-8 grid-item flex flex-col items-start gap-6 transition-300 hover:bg-background group border-grey-1" v-for="item in data" :key="item.id" :to="`/products/${item.slug}`">
					<div class="flex items-center justify-center w-16 h-16 rounded-2xl">
						<nuxt-img :src="item.image" alt="" class="w-full h-full object-contain" />
					</div>
					<div class="flex flex-col gap-4">
						<h4 class="text-lg font-medium">{{ item.title }}</h4>
						<p class="text-grey">
							{{ item.subtitle }}
						</p>
					</div>
					<div class="mt-auto">
						<Button variant="ghost" class="!p-0 hover:bg-transparent">
							{{ translations['home.more-btn'] }}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M11.6667 13.3334L15 10M15 10L11.6667 6.66671M15 10L5 10" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Button>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

defineProps({
	data: {
		type: Array,
		required: true
	}
});
</script>

<style scoped>
@media (max-width: 639px) {
	.grid-item {
		border-bottom: 1px solid #e2e2ee;
		border-right: 1px solid #e2e2ee;
		border-left: 1px solid #e2e2ee;
	}

	.grid-item:first-child {
		border-top-left-radius: 1.5rem;
		border-top-right-radius: 1.5rem;
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
		border-right: none;
	}
}
</style>
