<script>
    import Globe from './Globe.svelte';
    let pov = [45, -97, 0.5];
</script>

<svelte:head>
    <title>Zonia</title>
</svelte:head>

<Globe {pov} chosenJSON="/globeData/us.json" />