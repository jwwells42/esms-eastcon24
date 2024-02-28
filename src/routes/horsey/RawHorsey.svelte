<script>
    import { Chess } from 'svelte-chess';
    export let position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    export let words = ''
    let turn, history, chess;
    
    $: if (chess) {
    chess.load(position, { skipValidation: true, preserveHeaders: false });
  }
</script>

<div class="container">
    <div class="chessboard">
        <Chess
            fen={position}
            bind:turn
            bind:history
            bind:this={chess}
        />
    </div>
    <div class="words">
        <p>{words}</p>
        <p>{turn=='w'?'White':'Black'} to move.</p>
	    <p>{history?.join(' ')}</p>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top:1%;
    }

    .chessboard {
        margin-left:3%;
        flex: 90%;
        height: 100%;
        width: 100%;
        max-width: 90vh;
    }

    .words {
        flex: 10%;
    }


</style>
