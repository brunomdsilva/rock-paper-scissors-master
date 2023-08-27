<template>
	<div class="flex flex-col gap-20 text-white text-center">
		<div class="flex justify-between items-start gap-4 tracking-widest w-full max-w-xl mx-auto">
			<div class="flex flex-col sm:flex-col-reverse gap-8 items-center">
				<GameHandWrapper
					:pick="playerPick"
					bigSize
					:class="{ 'winner-highlight animate-pulse': isPlayerWinner }"
				/>
				<p class="text-xl">YOUR PICK</p>
			</div>

			<div class="flex flex-col sm:flex-col-reverse gap-8 items-center">
				<GameHandWrapper
					:pick="botPick"
					bigSize
					:class="{ 'winner-highlight animate-pulse': !isPlayerWinner }"
				/>
				<p class="text-xl">BOT PICK</p>
			</div>
		</div>

		<div class="font-bold flex flex-col gap-6 items-center">
			<p
				class="text-6xl tracking-widest animate-pulse"
				:class="isPlayerWinner ? 'text-green-500' : 'text-red-500'"
				v-text="isPlayerWinner ? 'YOU WIN' : 'YOU LOSE'"
			/>

			<button
				@click.prevent="$emit('restart')"
				class="py-3 px-10 tracking-widest rounded-lg bg-white text-primary-dark hover:text-primary-blue transition-colors duration-300 shadow-md text-xl"
			>
				PLAY AGAIN
			</button>
		</div>
	</div>
</template>

<script setup>
import GameHandWrapper from "@/components/GameHandWrapper.vue";

const props = defineProps({
	isPlayerWinner: Boolean,
	playerPick: Object,
	botPick: Object,
});
</script>

<style>
.winner-highlight {
	--highlight-color: rgba(255, 255, 255, 0.04);

	box-shadow: 0 0 0 50px var(--highlight-color), 0 0 0 100px var(--highlight-color),
		0 0 0 150px var(--highlight-color) !important;
}
</style>
