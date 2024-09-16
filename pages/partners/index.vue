<template>
	<div>
		<div class="container">
			<div class="border-x border-b flex flex-col items-center gap-10 pb-10 pt-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink as-child>
								<NuxtLink :to="localePath('/')"> {{ translations['mian.page-url-home'] }} </NuxtLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{{ translations['partners.title'] }} </BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium">{{ translations['partners.title'] }}</h1>
			</div>
		</div>
		<div class="container">
			<div class="border-x pb-10"></div>
		</div>
		<div class="container max-w-[1760px]">
			<div class="bg-white rounded-2xl py-10 sm:py-20">
				<div class="container max-w-[1200px] w-full flex flex-col gap-10">
					<div v-html="staticInfo.partners_info" class="w-full img"></div>
					<!-- <div class="flex flex-col gap-6">
						<h3 class="text-xl font-medium">
							{{ translations['partners.desc1'] }}
						</h3>
						<p>
							{{ translations['partners.desc2'] }}
						</p>
					</div> -->
				</div>
			</div>
		</div>
		<div class="container">
			<div class="border-x py-10"></div>
		</div>
	</div>
</template>

<script setup>
import { useStatic } from '~/stores/static.js';
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const { data: staticInfo } = await useAsyncData('static', async () => {
	return await useStatic().getStaticInfos();
});
</script>

<style>
.img p img{
max-width: 1200px;
width: 100%;
}
</style>
