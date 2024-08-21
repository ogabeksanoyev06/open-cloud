<template>
	<div>
		<div class="container grid gap-3 sm:gap-10">
			<div class="border-x pt-4">
				<div class="flex flex-col items-center gap-10 pb-10">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink as-child>
									<NuxtLink :to="localePath('/')"> Главный </NuxtLink>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Подробное Вакансии</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">{{ translations['about.vacansy'] }}</h1>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
					<ModalVacancy v-for="item in vacancies.results" :key="item.id" class="w-full group" :tariffId="item.id">
						<div class="flex flex-col items-start gap-6 bg-grey-0 border rounded-[16px] border-grey-1 group-hover:border-primary p-6 sm:p-8 hover:bg-white transition-300">
							<h3 class="text-lg sm:text-xl font-medium group-hover:text-primary transition-300">{{ item.title }}</h3>
							<p class="gap-2 text-grey">
								<span class="">{{ item.exp }}</span>
							</p>
						</div>
					</ModalVacancy>
				</div>

				<section class="sm:pt-20 pt-10"></section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useVacancyStore } from '~/stores/vacancies.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const { data: vacancies } = await useAsyncData('vacancies', async () => {
	return await useVacancyStore().getVacancies();
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
