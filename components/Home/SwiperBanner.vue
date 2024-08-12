<template>
	<div class="container max-w-[1760px]">
		<div class="relative">
			<Swiper
				class="rounded-[40px] relative overflow-hidden z-1"
				:modules="[SwiperAutoplay]"
				:slides-per-view="1"
				:loop="true"
				:speed="2000"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: false
				}"
			>
				<div class="absolute bottom-6 left-6 sm:bottom-20 sm:left-20 z-[20]">
					<p class="text-xs sm:text-base text-white">Слайдер кейсов</p>
					<h4 class="max-w-[700px] text-base sm:text-2xl lg:text-3xl font-medium text-white">Opencloud - Ваш надежный локальный поставщик облачных решений</h4>
				</div>
				<SwiperSlide v-for="(item, i) in data" :key="i">
					<div class="relative before:h-full before:w-full before:left-0 before:top-0 before:absolute before:z-1 before:bg-gradient-to-b before:from-[rgba(39,39,39,0)] before:to-[rgba(39,39,39,0.8)]">
						<div class="w-full h-[300px] md:h-[650px]">
							<img :src="item.image" alt="" class="w-full h-full object-cover" />
						</div>
					</div>
				</SwiperSlide>
				<!-- <div class="sm:flex z-10 hidden gap-3 absolute right-0 bottom-20 sm:right-20 sm:bottom-20">
					<Button @click="swiper.slidePrev()" variant="ghost" class="p-0 h-10 w-10 rounded-full border border-white hover:bg-transparent">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<path d="M23.3333 11.6666L16.6666 20L23.3333 28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</Button>

					<Button @click="swiper.slideNext()" variant="ghost" class="p-0 h-10 w-10 rounded-full border border-white hover:bg-transparent">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<path d="M16.6667 11.6666L23.3334 20L16.6667 28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</Button>
				</div> -->
			</Swiper>
		</div>
	</div>
</template>

<script setup>
defineProps({
	data: {
		type: Array,
		required: true
	}
});
</script>
