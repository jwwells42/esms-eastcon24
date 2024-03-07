<script>
    import { createEventDispatcher } from 'svelte';
    import { instruction, flip, captureEqualsWin, learnPiecesData } from '$lib/store.js'
    export let position;
    const dispatch = createEventDispatcher();

    function updatePosition(newFEN) {
        position = newFEN;
        dispatch('positionUpdated', { position: newFEN });
    }

    function clickHandler(newFEN, newWords, newFlip, newCapture) {
        updatePosition(newFEN);
        $instruction = newWords;
        $flip = newFlip;
        $captureEqualsWin = newCapture;
    }
</script>
<ul>
    {#each learnPiecesData as { label, position, instruction, flip, captureEqualsWin }}
      <li on:click={() => clickHandler(position, instruction, flip, captureEqualsWin)}>{label}</li>
    {/each}
</ul>
<hr>

<style>
    ul {
        list-style-type: none;
        color: #fbbb3b;
        font-family: 'Courier New', monospace;
        margin: 0;
        padding: 0;
    }

    li:hover {
        color: orange; 
        cursor: pointer;
    }
</style>