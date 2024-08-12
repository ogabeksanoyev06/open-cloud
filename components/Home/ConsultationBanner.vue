<template>
	<div class="overflow-hidden mt-10 py-6 bg-[url(~/assets/images/custom_green_bg.png)] bg-no-repeat bg-cover bg-top relative">
		<div class="container mt-[150px] lg:mt-0 lg:pl-[300px]">
			<div class="flex items-center justify-between flex-col gap-6 md:flex-row">
				<div class="flex flex-col gap-2 max-w-[600px]">
					<h4 class="text-lg sm:text-2xl">Получите консультацию менеджера</h4>
					<p class="text-base">Нужно уточнить детали? Обсудить требования? У вас сложный проект? Мы поможет подобрать правильное решение</p>
				</div>
				<ModalConsultationForm />
			</div>
		</div>
		<img src="/assets/images/shield.png" alt="" class="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] absolute top-0 left-5 lg:left-20" />
	</div>
</template>

<script setup></script>
