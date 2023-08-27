<template>
	<div class="mx-auto relative w-full max-w-lg">
		<div class="absolute inset-8 sm:inset-14">
			<img
				:src="bonusMode ? 'src/assets/bg-pentagon.svg' : 'src/assets/bg-triangle.svg'"
				alt=""
				class="h-full object-contain mx-auto"
			/>
		</div>
		<div class="relative grid grid-cols-2" :class="bonusMode ? 'gap-y-10' : 'gap-y-12'">
			<div
				v-for="handOption in handOptions"
				class="flex justify-center items-center"
				:class="
					bonusMode
						? 'first:col-span-2 [&:nth-child(2)]:justify-start [&:nth-child(2)]:-mt-8 [&:nth-child(3)]:-mt-8 [&:nth-child(3)]:justify-end'
						: 'last:col-span-2'
				"
			>
				<GameHandWrapper
					@click.prevent="$emit('play', handOption)"
					:pick="handOption"
					class="cursor-pointer hover:scale-125 transition-transform duration-300"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import GameHandWrapper from "@/components/GameHandWrapper.vue";

const props = defineProps({
	handOptions: Array,
	bonusMode: Boolean,
});
</script>
