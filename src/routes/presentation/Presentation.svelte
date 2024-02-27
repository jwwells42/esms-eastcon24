<script>
	import Slide from './Slide.svelte'
	import Code from './Code.svelte'
    import Globe from '../globe/Globe.svelte'
</script>

<Slide>Horizontal Slide</Slide>
<Slide>
    <Globe />
</Slide>

<Slide animate>
	<Code id="code" lines>
		{`
			function love() {}
	 `}
	</Code>
</Slide>

<Slide animate>
	<Code id="code" lines="2|1-3">
		{`
			function love() {
				console.log('Svelte')
			}
	 `}
	</Code>
</Slide>

<Slide>
	<Slide>Vertical Slide 1</Slide>
	<Slide>Vertical Slide 2</Slide>
</Slide>

<Slide animate>
	<ul>
		<li>React</li>
		<li>Solid</li>
		<li>Svelte</li>
		<li>Vue</li>
	</ul>
</Slide>

<Slide animate>
	<ul>
		<li>Svelte ❤️</li>
		<li>React</li>
		<li>Solid</li>
		<li>Vue</li>
	</ul>
</Slide>
