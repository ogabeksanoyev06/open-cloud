<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';

const useIdFunction = () => useId();

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
   window.scrollTo(0, 0)
})
</script>

<template>
	<div>
		<NuxtLoadingIndicator />
		<NuxtRouteAnnouncer />
		<ConfigProvider :use-id="useIdFunction">
			<NuxtLayout> <NuxtPage /> </NuxtLayout>
		</ConfigProvider>
	</div>
</template>
