<template>
    <div
        class="min-h-96 p-4 lg:px-20 rounded-3xl bg-[url('~/assets/images/custom_green_bg.png')] bg-top bg-cover bg-no-repeat flex lg:items-center relative">
        <div class="max-w-[524px] flex flex-col items-start gap-2 pb-[340px] lg:pb-0">
            <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                {{ translations['home.client-banner-title'] }}</h1>
            <p class="mb-6 lg:mb-10">{{ translations['home.client-banner-desc'] }}</p>
            <ModalConsultationForm />
        </div>
        <div class="">
            <img class="absolute bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[130px] h-[300px] lg:h-auto z-0 max-w-[300px] lg:max-w-[450px]"
                src="~/assets/images/phone.png" alt="phone image" />
        </div>
    </div>
</template>

<script setup>
import { useTranslationsStore } from "~/stores/translations.js"
const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore)
</script>