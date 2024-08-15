<template>
	<div class="container">
		<div class="bg-white p-4 sm:p-10">
			<transition name="page">
				<SectionCalculatorTab1 v-if="selectedType === 0">
					<div class="flex sm:inline-flex flex-wrap sm:w-fit items-center rounded-[8px] p-1 sm:p-2 bg-grey-0">
						<button
							@click="selectType(0)"
							:class="{ 'bg-primary !text-black': selectedType === 0 }"
							class="text-grey text-base py-2 sm:py-3 px-4 sm:px-10 font-medium hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto"
						>
							{{ translations['calculctor.fixed'] }}
						</button>
						<button
							@click="selectType(1)"
							:class="{ 'bg-primary !text-black': selectedType === 1 }"
							class="text-grey text-base py-2 sm:py-3 px-4 sm:px-10 font-medium hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto"
						>
							{{ translations['calculctor.arbitrary'] }}
						</button>
					</div>
				</SectionCalculatorTab1>
			</transition>
			<transition name="page">
				<SectionCalculatorTab2 v-if="selectedType === 1">
					<div class="flex sm:inline-flex flex-wrap sm:w-fit items-center rounded-[8px] p-1 sm:p-2 bg-grey-0">
						<button
							@click="selectType(0)"
							:class="{ 'bg-primary !text-black': selectedType === 0 }"
							class="text-grey text-base py-2 sm:py-3 px-4 sm:px-10 font-medium hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto"
						>
							{{ translations['calculctor.fixed'] }}
						</button>
						<button
							@click="selectType(1)"
							:class="{ 'bg-primary !text-black': selectedType === 1 }"
							class="text-grey text-base py-2 sm:py-3 px-4 sm:px-10 font-medium hover:bg-primary rounded-[8px] transition-300 w-1/2 sm:w-auto"
						>
							{{ translations['calculctor.arbitrary'] }}
						</button>
					</div>
				</SectionCalculatorTab2>
			</transition>
		</div>
	</div>
</template>

<script setup>
import { useCalculatorStore } from '~/stores/calculator.js';
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const calculatorStore = useCalculatorStore();


const selectedType = ref(0);


const selectType = (type) => {
	selectedType.value = type;
};


</script>
