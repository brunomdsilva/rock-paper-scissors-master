<template>
	<Teleport to="body">
		<Transition
			enter-from-class="opacity-0"
			leave-to-class="opacity-0"
			enter-active-class="transition-opacity duration-500"
			leave-active-class="transition-opacity duration-500"
		>
			<div v-if="showModal" @click.prevent="$emit('close')" class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
		</Transition>

		<Transition
			enter-from-class="opacity-0 translate-y-full"
			leave-to-class="opacity-0 translate-y-full"
			enter-active-class="transition-all duration-500"
			leave-active-class="transition-all duration-500"
		>
			<div v-if="showModal" class="fixed inset-0 flex justify-center items-center p-4 pointer-events-none">
				<div
					class="relative w-full max-w-md bg-white rounded-lg shadow-lg p-4 sm:p-8 flex flex-col gap-12 pointer-events-auto"
				>
					<p class="text-2xl sm:text-3xl tracking-wider font-bold text-primary-dark">RULES</p>

					<img
						:src="bonusMode ? 'imgs/image-rules-bonus.svg' : 'imgs/image-rules.svg'"
						alt="rules"
						class="w-full"
					/>

					<button
						@click.prevent="$emit('close')"
						class="absolute right-4 top-4 p-2 text-primary-light hover:text-red-500 transition-colors duration-300"
					>
						<IconXMark class="w-6 h-6" />
					</button>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
import IconXMark from "@/components/icons/IconXMark.vue";

const props = defineProps({
	showModal: Boolean,
	bonusMode: Boolean,
});
</script>
