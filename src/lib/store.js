import { writable } from 'svelte/store';
export let instruction = writable("Welcome to How the Horsey Moves. Let's learn how to play chess! Click KING to get started."); 
export let flip = writable(true); 
export let captureEqualsWin = writable(true);
export const learnPiecesData = [
    {
        label: "♔ KING",
        position: "1k6/8/5p2/8/8/8/4K3/8 w - - 0 1",
        instruction: "The most important piece in the game. The King can move one square at a time, and should be protected!",
        flip: true,
        captureEqualsWin: true
    },{
        label: "♘ KNIGHT",
        position: "2k5/6p1/8/8/3N4/8/8/2K5 w - - 0 1",
        instruction: "The knight moves in an L shape. Sometimes we call it a horsey. Capture the pawn to win!",
        flip: true,
        captureEqualsWin: true
    },{
        label: "♖ ROOK",
        position: "3k4/8/8/2p5/2R5/8/8/4K3 w - - 0 1",
        instruction: "The rook moves in straight lines. Capture the pawn to win!",
        flip: true,
        captureEqualsWin: true
    },{
        label: "♗ BISHOP",
        position: "1k6/7p/8/8/8/3B4/8/4K3 w HAha - 0 1",
        instruction: "The bishop moves in diagonal lines. Capture the pawn to win!",
        flip: true,
        captureEqualsWin: true
    },{
        label: "♕ QUEEN",
        position: "1k6/4Q2p/8/8/8/8/8/4K3 w HAha - 0 1",
        instruction: "The queen moves like the rook and the bishop combined. Capture the pawn to win!",
        flip: true,
        captureEqualsWin: true
    },{
        label: "♙ PAWN",
        position: "4k3/pppppp1p/8/6p1/7P/8/PPPPPPP1/4K3 w - - 0 1",
        instruction: "On the first move, pawns can move twice. But after that, they are tired, and move one square. They capture on the diagonal.",
        flip: true,
        captureEqualsWin: true
    },{
        label: "Promotion",
        position: "1k2b3/5P2/8/8/8/8/8/4K3 w - - 0 1",
        instruction: "When a pawn makes it to the other side of the board it can choose to promote to a Queen, Knight, Bishop, or a rook.",
        flip: true,
        captureEqualsWin: false
    },{
        label: "Castling",
        position: "8/8/8/8/P1B5/1P3N2/1B3PPP/R3K2R w KQha - 0 1",
        instruction: "You are able to castle when neither the rook or the king has moved, you can move the king to spaces towards the rook and flip the rook over the king infront of him, but you can't castle through check, or into check.",
        flip: true,
        captureEqualsWin: false
    },{
        label: "Checkmate",
        position: "2k5/8/2K5/8/8/8/8/7R w - - 0 1",
        instruction: "When the king is threatened, and nothing can block it, or nothing can take the threating piece, and can't move it is CHECKMATE.",
        flip: true,
        captureEqualsWin: false
    },{
        label: "Stalemate",
        position: "8/8/8/8/8/3q4/7r/4K3 w - - 0 1",
        instruction: "When one side has no legal moves, but the king is NOT in check, the game ends in STALEMATE. No one wins.",
        flip: true,
        captureEqualsWin: false
    }
]