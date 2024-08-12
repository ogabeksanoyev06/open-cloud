<template>
	<div class="container grid gap-3 sm:gap-10">
		<div class="flex flex-col gap-10">
			<div></div>
			<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-center">Вакансии</h1>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
			<div class="flex flex-col gap-6 bg-grey-0 border border-grey-1 rounded-lg sm:rounded-none p-6 sm:p-8 hover:bg-white transition-300" v-for="item in vacancies.results" :key="item.id">
				<h3 class="text-lg sm:text-xl font-medium">{{ item.title }}</h3>
				<p class="flex items-center gap-2 text-grey">
					<span>{{ item.exp }}</span>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
							<circle cx="3" cy="3.5" r="3" fill="#9A999B" />
						</svg>
					</span>
					<span>{{ item.type }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useVacancyStore } from '~/stores/vacancies.js';

const { data: vacancies } = await useAsyncData('vacancies', async () => {
	return await useVacancyStore().getVacancies();
});
</script>
