<template>
	<div>
		<div class="container">
			<div class="border-x border-b">
				<div class="max-w-[1300px] mx-auto">
					<div class="flex flex-col gap-6 py-10">
						<NuxtLink :to="localePath('/cases')">
							<Button variant="ghost" class="!p-0 mr-auto hover:bg-transparent">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M8.33333 13.334L5 10.0007M5 10.0007L8.33333 6.66732M5 10.0007L15 10.0007" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								{{ translations['news.back'] }}
							</Button>
						</NuxtLink>
						<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">
							{{ data?.title }}
						</h1>
						<span class="text-grey text-sm font-normal leading-130 text-center">
							{{ data?.created_at }}
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10"></div>
		</div>
		<div class="">
			<div class="container">
				<div class="border-x">
					<!-- <div class="max-w-[1160px] sm:h-[640px] w-full mx-auto mb-10">
						<img :src="data?.image" alt="" class="w-full h-full rounded-3xl mx-auto object-cover" />
					</div> -->
					<div class="text-base flex flex-col gap-6 max-w-[1160px] mx-auto" v-html="data?.desc"></div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10 sm:pb-20"></div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useClientsStore } from '~/stores/clients.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const localePath = useLocalePath();

const { translations } = storeToRefs(translationsStore);

const route = useRoute();

const clientStore = useClientsStore();

const { getClientsId } = clientStore;

const { data } = await useAsyncData('cases', async () => {
	return await getClientsId(route.params.slug);
});
</script>
