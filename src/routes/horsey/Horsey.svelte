<script>
  import { Chess } from 'svelte-chess';
  import Sidebar from './Sidebar.svelte';
  import Instruction from './Instruction.svelte';
  import { flip } from '$lib/store.js';

  let chess, fen;
  let position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  function moveFlipper() {
    if ($flip) {
      chess.swapTurn()
	  }}

  $: if (chess) {
    chess.load(position, { skipValidation: true, preserveHeaders: false });
  }
</script>

<body>
  <div class="container">
    <div class="sidebar">
      <Sidebar bind:position on:positionUpdated={e => position = e.detail.position} />
    </div>
    <div class="chessboard">
      <Chess 
        bind:this={chess}
        bind:fen
        on:positionUpdated={() => chess.load(position, { skipValidation: true, preserveHeaders:false })}
        on:move={moveFlipper}
        />

    </div>
    <div class="instruction">
      <Instruction />
    </div>
  </div>
</body>
<style>
  body {
    min-width: 100vw;
    background-color: rgb(88, 101, 54);
    overflow: hidden;
  }

	.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .sidebar {
    max-width: 25%;
  }

  .chessboard {
    flex: 1;
    max-width: 49%;
  }

  .instruction {
    max-width: 25;
    inline-size: 25%;
    overflow-wrap: break-word;
  }

  @media (max-width: 767px) {
    .sidebar {
      order: 2;
      flex: 20%;
      padding: 0;
      margin: 0 5% 0 0;
    }
    .chessboard { 
      order: 1;
      flex: 100%;
      max-width: 100%;
      margin-bottom: 5%;
    }
    .instruction {
      order: 3;
      flex: 70%;
      max-width: 70%;
      inline-size: 70%;
      margin: 0;
      padding: 0;
    }
  }
</style>