<script>
    import Globe from './Globe.svelte';
    let pov = [34, -97, 1];
</script>

<svelte:head>
    <title>Zonia</title>
</svelte:head>

<Globe {pov} chosenJSON="/globeData/us.json" />