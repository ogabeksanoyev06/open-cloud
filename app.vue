<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';

const useIdFunction = () => useId();
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
