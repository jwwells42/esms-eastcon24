<script>
    import { createEventDispatcher } from 'svelte';
    import { instruction, flip, learnPiecesData } from '$lib/store.js'
    export let position;
    const dispatch = createEventDispatcher();

    function updatePosition(newFEN) {
        position = newFEN;
        dispatch('positionUpdated', { position: newFEN });
    }

    function clickHandler(newFEN, newWords, newFlip) {
        updatePosition(newFEN);
        $instruction = newWords;
        $flip = newFlip;

    }
</script>
<ul>
    {#each learnPiecesData as { label, position, instruction, flip }}
      <li on:click={() => clickHandler(position, instruction, flip)}>{label}</li>
    {/each}
</ul>
<hr>

<style>
    ul {
        list-style-type: none;
        color: yellow;
        font-family: 'Courier New', monospace;
        margin: 0;
        padding: 0;
    }

    li:hover {
        color: orange; 
        cursor: pointer;
    }
</style>