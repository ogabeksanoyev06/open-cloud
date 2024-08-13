<template>
	<div class="overflow-hidden mt-10 py-6 bg-[url(~/assets/images/custom_green_bg.png)] bg-no-repeat bg-cover bg-top relative">
		<div class="container mt-[150px] lg:mt-0 lg:pl-[300px]">
			<div class="flex items-center justify-between flex-col gap-6 md:flex-row">
				<div class="flex flex-col gap-2 max-w-[600px]">
					<h4 class="text-lg sm:text-2xl">Получите консультацию менеджера</h4>
					<p class="text-base">Нужно уточнить детали? Обсудить требования? У вас сложный проект? Мы поможет подобрать правильное решение</p>
				</div>
				<ModalConsultationForm>
					<Button class="bg-black text-white hover:bg-black/90 w-full" :disabled="loading">
						Получить консультацию
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M5.83325 14.1665L9.16659 9.99984L5.83325 5.83317" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M10.8333 14.1665L14.1666 9.99984L10.8333 5.83317" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</Button>
				</ModalConsultationForm>
			</div>
		</div>
		<img src="/assets/images/shield.png" alt="" class="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] absolute top-0 left-5 lg:left-20" />
	</div>
</template>

<script setup></script>
