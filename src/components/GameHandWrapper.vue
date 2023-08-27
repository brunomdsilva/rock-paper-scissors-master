<template>
	<div
		class="rounded-full p-4"
		:class="{ 'sm:p-6': bigSize }"
		style="box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.2)"
		:style="{ background: `linear-gradient(to top, ${pick.colorFrom}, ${pick.colorTo})` }"
	>
		<div
			class="bg-white rounded-full flex justify-center items-center p-6 sm:p-8"
			style="box-shadow: inset 0 6px 0 rgba(0, 0, 0, 0.1)"
		>
			<component
				:is="pick.icon"
				class="w-8 sm:w-14 aspect-square fill-primary-dark"
				:class="{ 'xs:!w-12 sm:!w-24': bigSize }"
			/>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	pick: Object,
	bigSize: Boolean,
	winnerHighlight: Boolean,
});
</script>
