<template>
	<div>
		<section class="container gap-10">
			<div class="border-x w-full flex flex-col justify-center items-center pb-10">
				<Breadcrumb class="pt-4 pb-10">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink as-child>
								<NuxtLink :to="localePath('/')"> Главный </NuxtLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Цены </BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div class="flex flex-col gap-6">
					<h1 class="text-xl sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">{{ translations['calculctor.title'] }}</h1>
					<p>{{ translations['calculctor.desc'] }}</p>
				</div>
			</div>
		</section>
		<section class="">
			<SectionCalculator />
		</section>
		<section >
			<div class="container">
				<div class="border-x py-10 "></div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { useCalculatorStore } from '~/stores/calculator.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const calculatorStore = useCalculatorStore();
const { getTarifCategories, getSpecificationPrice } = calculatorStore;

const { tarifData } = storeToRefs(calculatorStore);
const { data: tariff } = await useAsyncData('tariff', async () => {
	return await getTarifCategories();
});
const { data: prices } = await useAsyncData('prices', async () => {
	return await getSpecificationPrice();
});
</script>
