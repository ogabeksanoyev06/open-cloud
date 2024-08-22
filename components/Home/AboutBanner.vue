<template>
	<div class="bg-black flex items-center  overflow-hidden">
		<div class="container relative">
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
				<div class="flex flex-col items-center gap-6 justify-between order-2 lg:order-1 py-10">
					<div class="max-w-[530px] w-full relative" style="">
						<img src="/assets/images/Group.png" alt="" class="w-full" />
					</div>
					<div
						class="grid grid-cols-2 border-t border-x border-[#5D5D5F] rounded-t-3xl sm:grid-cols-3 gap-4 lg:-mt-[150px] backdrop-blur-[20px]"
						style="background: linear-gradient(180deg, #353437 0%, rgba(39, 39, 39, 0.4) 100%)"
					>
						<div class="flex flex-col items-center gap-4 max-w-[180px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number1'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info1'] }}</p>
						</div>
						<div class="flex flex-col items-center gap-4 max-w-[220px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number2'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info2'] }}</p>
						</div>
						<div class="flex flex-col items-center gap-4 max-w-[220px] sm:p-6">
							<h3 class="text-white text-2xl sm:text-3xl">{{ translations['home.about-banner-info-number3'] }}</h3>
							<div class="shrink-0 relative h-px w-full" style="background: linear-gradient(90deg, rgba(181, 226, 117, 0) 0%, #b5e275 52%, rgba(181, 226, 117, 0) 100%)"></div>
							<p class="text-white text-center">{{ translations['home.about-banner-info3'] }}</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-6 sm:gap-20 py-6 sm:py-14 order-1 lg:order-2">
					<div class="flex flex-col items-start gap-4">
						<img src="/assets/images/logo-2.png" alt="" class="w-24" />
						<h1 class="text-white text-2xl md:text-3xl xl:text-4xl font-medium">
							<span class="text-primary">{{ translations['home.about-banner-title1'] }}</span> - {{ translations['home.about-banner-title2'] }}
						</h1>
						<p class="text-base sm:text-xl text-white font-normal">
							{{ translations['home.about-banner-desc'] }}
						</p>
						<NuxtLink :to="localePath('/about-us#certificate')" class="sm:mt-20">
							<Button class="!bg-transparent border-grey border text-primary w-full sm:w-auto">
								Лицензия
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5.83325 14.1667L9.16659 9.99999L5.83325 5.83332" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M10.8333 14.1667L14.1666 9.99999L10.8333 5.83332" stroke="#B5E275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</Button>
						</NuxtLink>
					</div>
				</div>
			</div>
			<span class="absolute -top-[150px] left-[-250px] hidden lg:block z-10">
			<svg width="1757" height="523" viewBox="0 0 1757 523" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1459_6787)">
					<g style="mix-blend-mode: overlay" filter="url(#filter0_f_1459_6787)">
						<rect x="272.194" y="-45.6037" width="94.4805" height="753.595" transform="rotate(-45 272.194 -45.6037)" fill="url(#paint0_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter1_f_1459_6787)">
						<rect x="291.972" y="-67.3591" width="88.2569" height="753.595" transform="rotate(-45 291.972 -67.3591)" fill="url(#paint1_linear_1459_6787)" fill-opacity="0.8" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter2_f_1459_6787)">
						<rect x="1161.72" y="-104.9" width="88.2569" height="753.595" transform="rotate(-45 1161.72 -104.9)" fill="url(#paint2_linear_1459_6787)" fill-opacity="0.8" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter3_f_1459_6787)">
						<rect x="623.158" y="-133.459" width="62.4921" height="753.595" transform="rotate(-45 623.158 -133.459)" fill="url(#paint3_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter4_f_1459_6787)">
						<rect x="163.748" y="-129.662" width="62.4921" height="753.595" transform="rotate(-45 163.748 -129.662)" fill="url(#paint4_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter5_f_1459_6787)">
						<rect x="1033.5" y="-167.203" width="62.4921" height="753.595" transform="rotate(-45 1033.5 -167.203)" fill="url(#paint5_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter6_f_1459_6787)">
						<rect x="1048.07" y="-167.203" width="62.4921" height="753.595" transform="rotate(-45 1048.07 -167.203)" fill="url(#paint6_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter7_f_1459_6787)">
						<rect y="-9.73492" width="62.4921" height="753.595" transform="rotate(-45 0 -9.73492)" fill="url(#paint7_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter8_f_1459_6787)">
						<rect x="317.185" y="-151.456" width="62.4921" height="753.595" transform="rotate(-45 317.185 -151.456)" fill="url(#paint8_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter9_f_1459_6787)">
						<rect x="13.4971" y="-45.7275" width="62.4921" height="753.595" transform="rotate(-45 13.4971 -45.7275)" fill="url(#paint9_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter10_f_1459_6787)">
						<rect x="427.762" y="-155.955" width="62.4921" height="753.595" transform="rotate(-45 427.762 -155.955)" fill="url(#paint10_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter11_f_1459_6787)">
						<rect x="983.54" y="-40.1305" width="131.807" height="753.595" transform="rotate(-45 983.54 -40.1305)" fill="url(#paint11_linear_1459_6787)" />
					</g>
					<g style="mix-blend-mode: overlay" filter="url(#filter12_f_1459_6787)">
						<rect x="531.24" y="-86.7092" width="176.327" height="753.595" transform="rotate(-45 531.24 -86.7092)" fill="url(#paint12_linear_1459_6787)" fill-opacity="0.7" />
					</g>
				</g>
				<defs>
					<filter id="filter0_f_1459_6787" x="222.699" y="-161.907" width="698.671" height="698.672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter1_f_1459_6787" x="253.067" y="-168.671" width="673.089" height="673.089" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter2_f_1459_6787" x="1122.82" y="-206.212" width="673.089" height="673.089" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter3_f_1459_6787" x="573.662" y="-227.144" width="676.052" height="676.052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter4_f_1459_6787" x="124.843" y="-212.756" width="654.871" height="654.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter5_f_1459_6787" x="994.592" y="-250.296" width="654.871" height="654.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter6_f_1459_6787" x="1009.16" y="-250.296" width="654.871" height="654.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter7_f_1459_6787" x="-49.4958" y="-103.419" width="676.052" height="676.052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter8_f_1459_6787" x="267.689" y="-245.14" width="676.052" height="676.052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter9_f_1459_6787" x="-35.9987" y="-139.412" width="676.052" height="676.052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter10_f_1459_6787" x="378.266" y="-249.639" width="676.052" height="676.052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="24.7479" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter11_f_1459_6787" x="944.635" y="-172.237" width="703.884" height="703.884" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="19.4525" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<filter id="filter12_f_1459_6787" x="501.94" y="-240.691" width="716.154" height="716.154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="14.65" result="effect1_foregroundBlur_1459_6787" />
					</filter>
					<linearGradient id="paint0_linear_1459_6787" x1="319.435" y1="-45.6037" x2="319.435" y2="707.991" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint1_linear_1459_6787" x1="336.1" y1="-67.3591" x2="336.1" y2="686.236" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint2_linear_1459_6787" x1="1205.85" y1="-104.9" x2="1205.85" y2="648.695" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint3_linear_1459_6787" x1="654.404" y1="-133.459" x2="654.404" y2="620.135" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint4_linear_1459_6787" x1="194.994" y1="-129.662" x2="194.994" y2="623.933" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint5_linear_1459_6787" x1="1064.74" y1="-167.203" x2="1064.74" y2="586.392" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint6_linear_1459_6787" x1="1079.31" y1="-167.203" x2="1079.31" y2="586.392" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint7_linear_1459_6787" x1="31.2461" y1="-9.73492" x2="31.2461" y2="743.86" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint8_linear_1459_6787" x1="348.431" y1="-151.456" x2="348.431" y2="602.139" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint9_linear_1459_6787" x1="44.7431" y1="-45.7275" x2="44.7431" y2="707.867" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint10_linear_1459_6787" x1="459.008" y1="-155.955" x2="459.008" y2="597.64" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint11_linear_1459_6787" x1="1049.44" y1="-40.1305" x2="1049.44" y2="713.464" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="paint12_linear_1459_6787" x1="619.404" y1="-86.7092" x2="619.404" y2="666.886" gradientUnits="userSpaceOnUse">
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
					<clipPath id="clip0_1459_6787">
						<rect width="1757" height="523" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</span>
		</div>
		
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

const localePath = useLocalePath();
</script>
