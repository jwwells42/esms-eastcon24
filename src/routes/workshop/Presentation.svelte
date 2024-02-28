<script>
	import RawHorsey from '../horsey/RawHorsey.svelte'
</script>

<section>
		<br><br><br>
		<h1>Welcome!</h1>
		<h2>3-6 Advanced Chess Workshop</h2>
		<p>with Jerry Wells</p>
</section>
<section>
	<h1>Today's Agenda</h1>
	<ul>
		<li>9:00-9:30 Introductions & Why Chess</li>
		<li>9:30-10:00 Pawns, Openings, and Good Vibes</li>
		<li>10:00-10:30 The End</li>
		<li>10:30-11:00 Master Game Analysis: Morphy</li>
		<li>11:00-11:30 Lunch</li>
		<li>11:35 - 1:15 Sparring</li>
	</ul>
</section>
<section>
	<RawHorsey />
</section>
<section>
	<div class=iframe-container>
		<iframe src="https://lichess.org/embed/game/Kqjmvhec?theme=auto&bg=auto" width=600 height=397 frameborder=0></iframe>
	</div>
</section>

<style>
	.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 95vh;
}

/* Then style the iframe to fit in the container div with full height and width */
	iframe {
  position: absolute;
  top: 0;
  left: 2%;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>