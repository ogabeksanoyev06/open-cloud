<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';

const props = defineProps<{
	defaultValue?: string | number;
	modelValue?: string | number;
	class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
	(e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue
});
</script>

<template>
	<input
		v-model="modelValue"
		:class="
			cn(
				'flex h-[45px] w-full  border border-grey-1 rounded-xl bg-transparent px-4 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-3 focus-visible:outline-none focus-visible:ring-0 focus:border-primary focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				props.class
			)
		"
	/>
</template>
