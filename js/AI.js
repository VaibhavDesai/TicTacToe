var letters = { "player1": "X", "AI": "O"};
var aiMove

function aiTurn(currentPlayer, board, depth = 0, alpha, beta){
    if(winCheckBoard(board)){

        return currentPlayer === 'AI' ? depth - 10 : 10 - depth;

    } else if(checkForDraw(board)){
        return 0;

    } else if(depth >= 5){
        return 0;
    }

    let posMove = unMarkedCells(board);

    if(currentPlayer === 'AI'){

        for(let i = 0; i < posMove.length; i++){

            let scratchBoard = board.slice(0,board.length);
            scratchBoard[posMove[i]] = letters[currentPlayer];
            let score = aiTurn(alternatePlayer(currentPlayer),scratchBoard,depth + 1, alpha, beta);
            if(score > alpha){
                alpha = score;
                if(depth === 0){
                    aiMove = posMove[i];
                }
            }
            if(alpha >= beta){
                break;
            }
        }
        return alpha;

    } else {
        for(let i = 0; i < posMove.length; i++){
            let scratchBoard = board.slice(0,board.length);
            scratchBoard[posMove[i]] = letters[currentPlayer];
            let score = aiTurn(alternatePlayer(currentPlayer),scratchBoard,depth + 1, alpha, beta);

            if(score < beta){
                beta = score;
            }

            if(alpha >= beta){
                break;
            }
        }

        return beta;
    }
}

function unMarkedCells(board){
    let cells = [];
    for(let i = 0; i < board.length; i++){
        if(board[i] === ""){
            cells.push(i);
        }
    }
    return cells;
}

function winCheckBoard(board){

    let winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0; i < winningCombinations.length; i++){

        let a, b, c;

        a = board[winningCombinations[i][0]];
        b = board[winningCombinations[i][1]];
        c = board[winningCombinations[i][2]];

        if(a === b && b === c && a !== ""){
            return true;
        }
    }
    return false;
}

function checkForDraw(board){
    return board.every((element) => {return element !== ""});
}

function alternatePlayer(currentPlayer){
    return currentPlayer == 'player1' ? 'AI' : 'player1';
}
