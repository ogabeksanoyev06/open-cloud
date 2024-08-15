<template>
	<div>
		<Dialog v-model:open="isOpen" :close-icon="true">
			<DialogTrigger>
				<slot />
			</DialogTrigger>
			<DialogContent class="sm:max-w-[600px] p-4 sm:p-6 flex flex-col gap-6">
				<div class="flex items-center justify-between">
					<DialogTitle class="text-2xl">Frontend developer</DialogTitle>
					<!-- <DialogClose>
						<button class="flex items-center justify-center w-8 h-8 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.9497 13.3646C12.3402 13.7551 12.9734 13.7551 13.3639 13.3646C13.7544 12.974 13.7544 12.3409 13.3639 11.9504L8.41418 7.00063L13.3639 2.05092C13.7544 1.66039 13.7544 1.02723 13.3639 0.636702C12.9734 0.246178 12.3402 0.246178 11.9497 0.636702L6.99997 5.58641L2.0502 0.636643C1.65967 0.246119 1.02651 0.246119 0.635984 0.636643C0.245459 1.02717 0.245459 1.66033 0.635984 2.05086L5.58575 7.00063L0.635972 11.9504C0.245447 12.3409 0.245448 12.9741 0.635972 13.3646C1.0265 13.7551 1.65966 13.7551 2.05019 13.3646L6.99997 8.41484L11.9497 13.3646Z"
									fill="#28303F"
								/>
							</svg>
						</button>
					</DialogClose> -->
				</div>
				<div class="w-full overflow-y-auto h-[400px] sm:max-h-[600px] relative">
					<div class="relative overflow-hidden h-full bg-grey-0 rounded-2xl sm:p-6 p-4" style="overflow: hidden scroll">
						В IT академию требуется Web программист - преподаватель для онлайн -уроков (backend-fronted) Coddy Camp - это учебный центр в Ташкенте для детей школьного возраста (7-16 лет). Дети
						обучаются программированию, графическому дизайну и робототехнике. Наша цель обучить детей современным навыкам, развить логическое мышление и креативность. На данный момент обучаются 700+
						учеников в четырех филиалах. Мы предлагаем стать частью нашей дружной команды и работать с лучшими профессионалами своего дела. ♦️Основные требования: Опыт работы преподавателем не менее
						года; Уметь объяснять сложные вещи простыми словами; Свободное владение русским и узбекским языками. ♦️Знание языков технологий такие как: HTML/CSS JavaScript React Node.js ♦️Чем вы будете
						заниматься: Создавать с нами инновационные уроки; Проводить уроки с энергией и интересом; Находить индивидуальный подход к каждому ученику. ♦️Что мы предлагаем: Комфортный и современный
						офис; Профессиональные тренинги; Teambuildings два раза в год; Оплачиваемый отпуск; В IT академию требуется Web программист - преподаватель для онлайн -уроков (backend-fronted) Coddy Camp
						- это учебный центр в Ташкенте для детей школьного возраста (7-16 лет). Дети обучаются программированию, графическому дизайну и робототехнике. Наша цель обучить детей современным навыкам,
						развить логическое мышление и креативность. На данный момент обучаются 700+ учеников в четырех филиалах. Мы предлагаем стать частью нашей дружной команды и работать с лучшими
						профессионалами своего дела. ♦️Основные требования: Опыт работы преподавателем не менее года; Уметь объяснять сложные вещи простыми словами; Свободное владение русским и узбекским языками.
						♦️Знание языков технологий такие как: HTML/CSS JavaScript React Node.js ♦️Чем вы будете заниматься: Создавать с нами инновационные уроки; Проводить уроки с энергией и интересом; Находить
						индивидуальный подход к каждому ученику. ♦️Что мы предлагаем: Комфортный и современный офис; Профессиональные тренинги; Teambuildings два раза в год; Оплачиваемый отпуск;
					</div>
					<div class="absolute inset-x-0 bottom-0 w-full sm:h-[90px]" style="background: linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, #f5f5f7 100%)"></div>
				</div>
				<div class="flex flex-wrap items-center justify-between gap-2 p-4 bg-[#1878F3] text-white rounded">
					<h4 class="text-base sm:text-xl font-medium">Отправить резюме по телеграм</h4>
					<a href="#" target="_blank" class="flex items-center gap-2">
						@opencloud_hr
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M7 7L11 12L7 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M13 7L17 12L13 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
				</div>
			</DialogContent>
		</Dialog>
	</div>
</template>

<script setup>
const isOpen = ref(false);
</script>
