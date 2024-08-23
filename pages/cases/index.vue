<template>
	<div>
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
							<BreadcrumbPage>{{ translations['cases.title'] }} </BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">
					{{ translations['cases.title'] }}
				</h1>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10"></div>
		</div>
		<div class="sm:container sm:max-w-[1760px]">
			<div class="sm:bg-background rounded-[40px] py-20">
				<div class="container grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div
						class="sm:inline-flex hidden items-center flex-col sm:flex-row gap-4 sm:gap-6 border rounded-2xl border-grey-1 group p-2 sm:p-[8px_24px_8px_8px]"
						v-for="item in cases.results"
						:key="item.id"
					>
						<div class="w-56 h-56 flex items-center justify-center flex-shrink-0 overflow-hidden rounded-lg bg-[#F5F5F7] px-5 sm:px-[30px]">
							<img :src="item.image" alt="" class="w-full h-full object-contain sm:rounded-[18px_8px_8px_18px]" />
						</div>
						<div class="flex flex-col items-start gap-10 max-w-[290px]">
							<h4 class="text-base sm:text-xl">
								{{ item.title }}
							</h4>
							<a :href="item.url" target="_blank">
								<Button variant="secondary" class="bg-grey-0">
									{{ translations['cases.more'] }}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
										<path d="M5.8335 14.6665L9.16683 10.4998L5.8335 6.33317" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M10.8335 14.6665L14.1668 10.4998L10.8335 6.33317" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</Button>
							</a>
						</div>
					</div>
					<div class="flex sm:hidden border flex-col gap-4 p-6 rounded-[16px]" v-for="item in cases.results" :key="item.id">
						<div class="flex items-center justify-between">
							<div class="grid gap-2">
								<h4 class="text-base">Qilichboy Boltaboyev</h4>
								<p class="text-grey">TBC CEO</p>
							</div>
							<div class="p-2 w-16 h-14 bg-background rounded-[8px] flex-shrink-0">
								<img :src="item.image" alt="" class="w-full h-full object-contain" />
							</div>
						</div>
						<p class="text-sm">
							{{ item.title }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10 sm:pb-20"></div>
		</div>
	</div>
</template>

<script setup>
import { useClientsStore } from '~/stores/clients';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const clientsStore = useClientsStore();

const { getClients } = clientsStore;

const { data: cases } = await useAsyncData('cases', async () => {
	return await getClients();
});
</script>
