<template>
	<div>
		<h1 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mb-10">Наш офис</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="md:max-w-[280px] md:max-h-[170px] rounded-2xl overflow-hidden" v-for="item in data.slice(0, 3)">
					<img :src="item.image" alt="" class="w-full h-full object-cover" />
				</div>
				<div class="md:max-w-[280px] md:max-h-[170px] rounded-2xl relative">
					<img :src="data[0].image" alt="" class="absolute top-[12px] left-[6px] max-w-[160px] w-full h-full max-h-[100px] object-cover -rotate-12 z-[1] rounded-2xl" />
					<img :src="data[1].image" alt="" class="absolute top-[12px] right-[6px] max-w-[160px] max-h-[100px] object-cover rotate-12 z-[1] rounded-2xl" />
					<img :src="data[2].image" alt="" class="absolute bottom-[6px] left-[12px] max-w-[160px] max-h-[100px] object-cover -rotate-6 z-[1] rounded-2xl" />
					<img :src="data[2].image" alt="" class="absolute bottom-[6px] right-[12px] max-w-[160px] max-h-[100px] object-cover rotate-6 z-[1] rounded-2xl" />
					<img :src="data[3].image" alt="" class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[210px] max-h-[130px] w-full h-full blur-[1px] rounded-2xl object-cover z-[4]" />
					<button class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] text-primary text-xl cursor-pointer underline" @click="() => showImg(0)">Ko'proq</button>
				</div>
			</div>
			<div v-html="contacts.map"></div>
		</div>
		<VueEasyLightbox class="" :visible="visibleRef" :imgs="data.map((item) => item.image)" :index="indexRef" @hide="onHide" />
	</div>
</template>

<script setup>
import { useContactStore } from '@/stores/contact.js';

defineProps({
	data: {
		type: Array,
		required: true
	}
});

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index) => {
	indexRef.value = index;
	visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const contactStore = useContactStore();
const { contacts } = storeToRefs(contactStore);
</script>
