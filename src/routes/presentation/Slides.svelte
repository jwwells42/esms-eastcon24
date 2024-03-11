<script>
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js'

	import 'reveal.js/dist/reveal.css'
	import './presentation.css'
	

	import Presentation from './Presentation.svelte'

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			viewDistance: 1,
			hash: true,
			disableLayout: true
		})

		deck.initialize()
	})
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>

<style>
	.slides {
		background-color: rgb(42,42,42);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}
</style>