<template>
	<div class="p-4 sm:px-6 border-2 border-primary-light rounded-xl flex justify-between items-center">
		<img :src="bonusMode ? 'src/assets/game-logo-bonus.svg' : 'src/assets/game-logo.svg'" alt="" />

		<div class="p-4 xs:px-8 sm:px-12 font-bold bg-white rounded-lg text-center">
			<p class="text-primary-blue tracking-widest leading-none">SCORE</p>
			<p class="text-6xl tracking-wide text-primary-dark leading-none" v-text="score" />
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	score: Number,
	bonusMode: Boolean,
});
</script>
