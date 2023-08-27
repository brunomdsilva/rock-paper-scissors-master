<template>
	<div
		class="min-h-screen flex flex-col"
		style="background: radial-gradient(circle at top, hsl(214, 47%, 23%) 0, hsl(237, 49%, 15%) 100%)"
	>
		<Container class="flex flex-col gap-14 flex-grow py-14">
			<GameScore :score="score" :bonusMode="bonusMode" />

			<Transition
				enter-from-class="opacity-0"
				leave-to-class="opacity-0"
				enter-active-class="transition-opacity duration-500"
				leave-active-class="transition-opacity duration-500"
				mode="out-in"
			>
				<GameHandsPicker
					v-if="!showGameResult"
					:handOptions="computedHandOptions"
					:bonusMode="bonusMode"
					@play="play($event)"
				/>

				<GameResult
					v-else
					:isPlayerWinner="isPlayerWinner"
					:playerPick="playerPick"
					:botPick="botPick"
					@restart="restart()"
				/>
			</Transition>
		</Container>

		<div class="flex flex-col sm:flex-row justify-between gap-4 p-6">
			<button
				@click.prevent="bonusMode = !bonusMode"
				v-text="bonusMode ? 'BONUS MODE' : 'NORMAL MODE'"
				class="py-2 px-8 rounded-lg border-2 border-current text-primary-light hover:text-white transition-colors duration-300 tracking-widest"
			/>

			<button
				@click.prevent="toggleModal()"
				v-text="'RULES'"
				class="py-2 px-8 rounded-lg border-2 border-current text-primary-light hover:text-white transition-colors duration-300 tracking-widest"
			/>
		</div>

		<GameRulesModal :showModal="showModal" :bonusMode="bonusMode" @close="toggleModal()" />

		<a
			href="https://github.com/brunomdsilva"
			target="_blank"
			class="fixed left-2 top-2 p-2 fill-primary-light hover:fill-white transition-colors duration-300"
		>
			<IconGithub class="w-6" />
		</a>
	</div>
</template>

<script setup>
import Container from "@/components/Container.vue";
import GameScore from "@/components/GameScore.vue";
import GameResult from "@/components/GameResult.vue";
import GameRulesModal from "@/components/GameRulesModal.vue";
import GameHandsPicker from "@/components/GameHandsPicker.vue";
import IconHandLizard from "@/components/icons/IconHandLizard.vue";
import IconHandSpock from "@/components/icons/IconHandSpock.vue";
import IconHandScissors from "@/components/icons/IconHandScissors.vue";
import IconHandPaper from "@/components/icons/IconHandPaper.vue";
import IconHandRock from "@/components/icons/IconHandRock.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import { computed, ref } from "vue";

const score = ref(0);
const playerPick = ref(null);
const botPick = ref(null);
const showGameResult = ref(false);
const isPlayerWinner = ref(false);
const bonusMode = ref(false);

const handOptions = ref([
	{ name: "paper", icon: IconHandPaper, colorFrom: "hsl(230, 89%, 62%)", colorTo: "hsl(230, 89%, 65%)" },
	{ name: "scissors", icon: IconHandScissors, colorFrom: "hsl(39, 89%, 49%)", colorTo: "hsl(40, 84%, 53%)" },
	{ name: "rock", icon: IconHandRock, colorFrom: "hsl(349, 71%, 52%)", colorTo: "hsl(349, 70%, 56%)" },
	{ name: "spock", icon: IconHandSpock, colorFrom: "hsl(189, 59%, 53%)", colorTo: "hsl(189, 58%, 57%)", bonus: true },
	{
		name: "lizard",
		icon: IconHandLizard,
		colorFrom: "hsl(261, 73%, 60%)",
		colorTo: "hsl(261, 72%, 63%)",
		bonus: true,
	},
]);

const computedHandOptions = computed(() => {
	return bonusMode.value ? handOptions.value : handOptions.value.filter((option) => !option.bonus);
});

function play(option) {
	playerPick.value = option;
	botPick.value = getRandomPick();

	checkWinner();
	showGameResult.value = true;
}

function restart() {
	playerPick.value = null;
	botPick.value = null;
	showGameResult.value = false;
}

function checkWinner() {
	const winAgainst = {
		paper: ["rock", "spock"],
		scissors: ["paper", "lizard"],
		rock: ["scissors", "lizard"],
		spock: ["scissors", "rock"],
		lizard: ["paper", "spock"],
	};

	isPlayerWinner.value = winAgainst[playerPick.value.name].includes(botPick.value.name);
	if (isPlayerWinner.value) setTimeout(() => score.value++, 500);
}

function getRandomPick() {
	const availableOptions = computedHandOptions.value.filter((option) => option.name !== playerPick.value.name);
	const randomIndex = Math.floor(Math.random() * availableOptions.length);

	return availableOptions[randomIndex];
}

const showModal = ref(false);
function toggleModal() {
	showModal.value = !showModal.value;
}
</script>
