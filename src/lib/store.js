import { writable } from 'svelte/store';
export let instruction = writable("Welcome to How the Horsey Moves. Let's learn how to play chess! Click KING to get started."); 
export const learnPiecesData = [
    {
        label: "♔ KING",
        position: "4k3/8/8/p7/P7/8/8/4K3 w - - 0 1",
        instruction: "The most important piece in the game. The King can move one square at a time, and should be protected!",
    },{
        label: "♖ ROOK",
        position: "1k6/ppp5/8/8/P7/1P6/1KP1R3/8 w - - 0 1",
        instruction: "The rook moves in straight lines. Attack the king!",
    },{
        label: "♗ BISHOP",
        position: "k7/8/1K6/8/8/8/7B/5B2 w - - 0 1",
        instruction: "The bishop moves in diagonal lines.",
    },{
        label: "♕ QUEEN",
        position: "3k4/8/3K4/1Q6/8/8/8/8 w - - 0 1",
        instruction: "The queen moves like the rook and the bishop combined!"
    },{
        label: "♘ KNIGHT",
        position: "6rk/6pp/8/4N3/2K5/8/8/8 w - - 0 1",
        instruction: "The knight (some people say the 'horsey') moves in an L shape.",
    },{
        label: "♙ PAWN",
        position: "4k3/pppppp1p/8/6p1/7P/8/PPPPPPP1/4K3 w - - 0 1",
        instruction: "On the first move, pawns can move twice. But after that, they are tired, and move one square. They capture on the diagonal. Something special happens when they get to the other side of the board... Can you find out what it is?",
    },{
        label: "BAD TEST",
        position: "8/8/8/8/4N3/8/8/8 w - - 0 1",
        instruction: "WE HAVE ILLEGAL FENS AND THE HORSEY GOES GOOD",
    },{
        label: "Checkmate",
        position: "2k5/8/2K5/8/8/8/8/7R w - - 0 1",
            instruction: "When the king is threatened, and nothing can block it, or nothing can take the threating piece, and can't move it is checkmate.",
    },{
        label: "Promotion",
        position: "8/3P4/8/8/8/8/8/8 w HAha - 0 1",
        instruction: "When a pawn makes it to the other side of the board it can choose to promote to a Queen, Knight, Bishop, or a rook.",
    },{
        label: "Castling",
        position: "8/8/8/8/P1B5/1P3N2/1B3PPP/R3K2R w KQha - 0 1",
        instruction: "You are able to castle when neither the rook or the king has moved, you can move the king to spaces towards the rook and flip the rook over the king infront of him, but you can't castle through check, or into check.",
    },{
        label: "Check",
        position: "4rb2/1b5p/6p1/B2k4/6PN/pP1P3P/P3K3/1R6 w - - 0 1",
        instruction: ".",
    }
]