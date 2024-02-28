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
	<br><br>
	<h1>Today's Agenda</h1>
	<ul>
		<li>9:00-9:15 Introductions & Why Chess</li>
		<li>9:15-9:30 Notation</li>
		<li>9:30-9:45 Master of Initiative: Paul Morphy</li>
		<li>9:45-10:00 Master of the Ending: José Raúl Capablanca</li>
		<li>10:00-10:45 Tactics, Tactics, Tactics</li>
		<li>10:45-11:00 Questions: Opening Repertoire? USCF? How to Win Friends and Influence People?</li>
		<li>11:00-11:30 Lunch!</li>
		<li>11:35-1:15 Sparring (3 games)</li>
	</ul>
</section>
<section>
	<br><br>
	<h1>Who's Here?</h1>
	<p>Me: Mr. Wells, current 15th in USCF in Arkansas</p>
	<p>Coach for seven years, team won state in 2019, medaled in 2021</p>
	<br><br><br>
	<p>You: Valley Springs, OMSD, Berryville, Cotter, Yellville, Flippin, Bergman, Eureka Springs, Searcy</p>
	<p>Why do YOU play?</p>
</section>
<section>
	<h1>Notation</h1>
	<div class="notation-container">
		<div class="notation">
			<p>R = Rook</p>
			<p>N = Knight</p>
			<p>B = Bishop</p>
			<p>K = King</p>
			<p>Q = Queen</p>
			<p>0-0 = Castle Kingside</p>
			<p>0-0-0 = Castle Queenside</p>
			<p>x = Capture, + = Check, # = Checkmate</p>
		</div>
		<div class="example">
			<p>Pawn moves have no capital letter; write the square it lands on: 1.e4</p>
			<p>Captures are written in between: cxd4, Nxd4</p>
			<p>Check and mate are written at the end: Qxf7#</p>
		</div>
	</div>		
</section>
<section>
	<h1></h1>
	<RawHorsey position="4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 16"/>
</section>
<section>
	<div class=iframe-container>
		<iframe width="600" height="371" src="https://lichess.org/study/embed/icesi2jY/lKyJqUPG" frameborder=0></iframe>
	</div>
</section>
<section>
	<div class=iframe-container>
		<iframe width="600" height="371" src="https://lichess.org/study/embed/icesi2jY/iGCBbMwg" frameborder=0></iframe>
	</div>
</section>
<section>
	<h1>Ignore all of that: get good at Tactics</h1>
	<h3>Or as James Canty says, Calculation Over Everything</h3>
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

.notation-container {
	display: flex;
}

.notation {
	flex:75%;
}

.example {
	margin-right:7%;
}
</style>