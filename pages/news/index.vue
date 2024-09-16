<template>
	<div class="grid gap-10 pt-4">
		<div class="container flex flex-col items-center gap-10">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink as-child>
							<NuxtLink :to="localePath('/')"> {{ translations['mian.page-url-home'] }} </NuxtLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{{ translations['home.news-title'] }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium ">{{ translations['home.news-title'] }}</h1>
		</div>
		<div class="container max-w-[1760px]">
			<div class="bg-background rounded-[40px] py-20">
				<div class="container grid gap-6">
					<div class="flex gap-1 w-fit rounded-[12px] bg-grey-0 p-2 relative">
						<button @click="selectNewsType(1)" class="text-grey rounded-[8px] px-10 py-3 transition-300 hover:bg-primary hover:text-black" :class="{ 'bg-primary': newsType === 1 }">
							{{ translations['news.news'] }}
						</button>
						<button @click="selectNewsType(0)" class="text-grey rounded-[8px] px-10 py-3 transition-300 hover:bg-primary hover:text-black" :class="{ 'bg-primary': newsType === 0 }">
							{{ translations['news.blog'] }}
						</button>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						<NuxtLink
							v-for="(news, i) in news"
							:key="i"
							:to="localePath(`/news/${news?.slug}`)"
							class="relative flex flex-col rounded-xl gap-4 overflow-hidden cursor-pointer transition-300 group h-full"
						>
							<div class="sm:h-[210px] shrink-0 aspect-[252/200]">
								<div class="w-full h-full">
									<img :src="news.image" alt="" class="object-cover w-full h-full object-top rounded-xl" />
								</div>
							</div>
							<div class="h-full flex flex-col gap-2">
								<span class="text-grey text-sm font-normal leading-130">
									{{ news.created_at }}
								</span>
								<p class="text-lg font-medium leading-130 line-clamp-3 group-hover:text-primary transition-300">{{ news.title }}</p>
							</div>
						</NuxtLink>
					</div>
					<Pagination v-slot="{ page }" :total="total" :page-size="limit" :sibling-count="1" show-edges :default-page="page">
						<PaginationList v-slot="{ items }" class="flex items-center gap-1">
							<PaginationPrev />

							<template v-for="(item, index) in items">
								<PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
									<Button @click="activePage(item.value)" class="w-9 h-9 p-0" :variant="item.value === page ? 'default' : 'outline'">
										{{ item.value }}
									</Button>
								</PaginationListItem>
								<PaginationEllipsis v-else :key="item.type" :index="index" />
							</template>
							<PaginationNext />
						</PaginationList>
					</Pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useNewsStore } from '~/stores/news';
import { useTranslationsStore } from '~/stores/translations.js';
import { storeToRefs } from 'pinia';

const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const newsType = ref(1);
const total = ref(0);
const page = ref(1);
const limit = 8;

const newsStore = useNewsStore();
const { getNews } = newsStore;

const selectNewsType = (type) => {
	newsType.value = type;
};

const activePage = (a) => {
	page.value = a;
};

const { data: news } = await useAsyncData(
	'news',
	async () => {
		const response = await getNews({ page: page.value, type: newsType.value, page_size: limit });
		total.value = response.count;
		return response.results;
	},
	{
		watch: [newsType, page]
	}
);
</script>
