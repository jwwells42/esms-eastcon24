<script>
    import Globe from '../../Globe.svelte';
    let pov = [43, -74, 0.5];
</script>

<svelte:head>
    <title>Zonia</title>
</svelte:head>

<Globe {pov} chosenJSON="/globeData/us-mw.json" />

