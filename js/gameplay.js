var playerValue = 'X'

var board

function initClickListners(event) {

    $(".item").click(function (event) {

        var cell_id = parseInt($(this).attr('id'))

        $(this).addClass(playerValue)
        $(this).html(playerValue)
        $(this).addClass('unclickable')
        $("#opponentChoice").addClass('unclickable')

        board[cell_id] = playerValue

        if (!winCheckBoard(board) && !checkForDraw(board)) {
            GetTurn()
        }
        else if (checkForDraw(board)) {
            GameResult('draw')
        }
        else if (winCheckBoard(board)) {
            GameResult(playerValue)
        }

    })

    $("#opponentChoice input").change(function() {
        var player2 = $("input[name='radio']:checked", "#opponentChoice").val()
        $(".item").removeClass("unclickable")
        board = new Array(9).join(".").split(".");

        if (player2 == "Human"){
            $("#player2").html("Player 2")
        }
        else if (player2 == 'Computer'){
            $("#player2").html("Computer")
        }
        else if (player2 == 'AI'){
            $("#player2").html("AI")
        }
    })

    $("#resetButton").click(function(event) {

        board = new Array(9).join(".").split(".");

        $("#opponentChoice").removeClass('unclickable')
        document.getElementById("opponentChoice").reset()
        $("#playerOne, #gameResult").html("")
        $("#gameInfo, #gameBoard").addClass("hideElement")
        $(".item").removeClass("X O empty")
        $(".item").addClass("unclickable")
        $(".item").html("X/O")
        $("#player2").html("Pick your opponent")
        playerValue = 'X'
    })
}

function GetTurn() {

    var xCount = $('#gameBoard .X').length
    var oCount = $('#gameBoard .O').length

    var player1Turn = !xCount || oCount > xCount || xCount && oCount == xCount
    var player2Turn = oCount < xCount

    if (player1Turn) {

        var unfilledCells = document.querySelectorAll("div.item:not(.X):not(.O)")
        $(unfilledCells).removeClass('unclickable')
        $("#player2").removeClass('green black')
        $("#player1").addClass('green black')
        playerValue = 'X'

    }

    else if (player2Turn) {
        playerValue = 'O'
        $("#player1").removeClass('green black')
        $("#player2").addClass('green black')
        Player2Turn()

    }
}

function Player2Turn() {

    var player2 = $("#player2").text()

    if(player2 == 'Computer'){

        $("div.item").addClass('unclickable')
        setTimeout(ComputerPlay, 1000)


    }

    if (player2 == 'AI'){

        aiTurn('AI', board, undefined, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
        console.log("aiVal"+aiMove)
        board[aiMove] = 'O'
        $("#"+aiMove).addClass("O unclickable")
        $("#"+aiMove).html(playerValue)

        if (!winCheckBoard(board) && !checkForDraw(board)) {
            GetTurn()
        }

    }

    if(checkForDraw(board)){
        GameResult('draw')
    }

    else if(winCheckBoard(board)){
        GameResult(playerValue)
    }

}

function ComputerPlay() {

    var unfilledCells = $("div.item:not(.X):not(.O)")
    var randomItem = unfilledCells[Math.floor(Math.random() * unfilledCells.length)]
    board[""+$(randomItem).attr('id')] = 'O'
    $(randomItem).addClass("O unclickable")
    $(randomItem).html(playerValue)

    if (!winCheckBoard(board) && !checkForDraw(board)) {
        GetTurn()
    }

    else if(checkForDraw(board)){
        GameResult('draw')
    }

    else if(winCheckBoard(board)){
        GameResult(playerValue)
    }
}

function GameResult(result) {

    $("#gameResult").removeClass("hideElement")

    if(result == 'draw'){

        $("#gameResult").html(`<span class='green'>Game is a draw.</span>`)
    }
    else{
        $("#gameResult").removeClass("hideElement")
        if(result == 'X'){
            $("#gameResult").html(`<span class="player1">${result} wins!</span>`)
        }
        else if(result == 'O'){
            $("#gameResult").html(`<span class="player2">${result} wins!</span>`)
        }


    }

    $("#gameInfo").addClass("hideElement")
    FinishGame()

}

function FinishGame() {

    $("div.item:not(.X):not(.O)").addClass("empty")
    $("div.item:not(.X):not(.O)").addClass("unclickable")
}
