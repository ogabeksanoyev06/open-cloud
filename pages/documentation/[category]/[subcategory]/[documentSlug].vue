<template>
	<div class="bg-white rounded-2xl py-6 px-10">
		<div class="flex flex-col gap-6">
			<h3 class="text-xl sm:text-2xl font-medium">
				{{ data.title }}
			</h3>
			<p class="text-base text-grey">{{ data.subtitle }}</p>
			<div v-html="data.text"></div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useDocumentsStore } from '~/stores/documents.js';

definePageMeta({
	layout: 'documents'
});

const route = useRoute();

const { data } = await useAsyncData('document', async () => {
	return await useDocumentsStore().getDocumentationContent(route.params.documentSlug);
});
</script>

<style lang="scss" scoped></style>
