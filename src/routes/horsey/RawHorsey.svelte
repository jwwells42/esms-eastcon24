<script>
    import { Chess } from 'svelte-chess';
    export let position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    let turn, history;
</script>

<div class="container">
    <div class="chessboard">
        <Chess
            fen={position}
            bind:turn
            bind:history
        />
    </div>
    <div class="words">
        <p>
            {turn=='w'?'White':'Black'} to move.
	        Moves played: {history?.join(' ')}
        </p>
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
