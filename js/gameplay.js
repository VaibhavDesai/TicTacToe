var playerValue = 'X'

function initClickListners(event) {

    $(".item").click(function (event) {

        $(this).addClass(playerValue)
        $(this).html(playerValue)
        $("#opponentChoice").addClass('unclickable')

        if (!WinCheck()) {
            GetTurn()
        }

    })

    $("#opponentChoice input").change(function() {
        var player2 = $("input[name='radio']:checked", "#opponentChoice").val()
        $(".item").removeClass("unclickable")

        if (player2 == "Human"){
            $("#player2").html("Player 2")
        }
        else{
            $("#player2").html("Computer")
        }
    })

    $("#resetButton").click(function(event) {

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
        Player2Turn()

    }
}

function Player2Turn() {

    var player2 = $("#player2").text()
    if(player2 == 'Computer'){

        $("div.item").addClass('unclickable')
        setTimeout(ComputerPlay, 1000)
    }

    $("#player1").removeClass('green black')
    $("#player2").addClass('green black')

}

function ComputerPlay() {

    var unfilledCells = $("div.item:not(.X):not(.O)")
    var randomItem = unfilledCells[Math.floor(Math.random() * unfilledCells.length)]
    $(randomItem).addClass("O unclickable")
    $(randomItem).html(playerValue)

    if (!WinCheck()) {
        GetTurn()
    }
}

function WinCheck() {

    var winner
    var player1 = 'X'
    var player2 = "O"


    var xWin1 = $("#one.X, #two.X, #three.X").length === 3
    var xWin2 = $("#four.X, #five.X, #six.X").length === 3
    var xWin3 = $("#seven.X, #eight.X, #nine.X").length === 3
    var xWin4 = $("#one.X, #four.X, #seven.X").length === 3
    var xWin5 = $("#two.X, #five.X, #eight.X").length === 3
    var xWin6 = $("#three.X, #six.X, #nine.X").length === 3
    var xWin7 = $("#one.X, #five.X, #nine.X").length === 3
    var xWin8 = $("#seven.X, #five.X, #three.X").length === 3

    var oWin1 = $("#one.O, #two.O, #three.O").length === 3
    var oWin2 = $("#four.O, #five.O, #six.O").length === 3
    var oWin3 = $("#seven.O, #eight.O, #nine.O").length === 3
    var oWin4 = $("#one.O, #four.O, #seven.O").length === 3
    var oWin5 = $("#two.O, #five.O, #eight.O").length === 3
    var oWin6 = $("#three.O, #six.O, #nine.O").length === 3
    var oWin7 = $("#one.O, #five.O, #nine.O").length === 3
    var oWin8 = $("#seven.O, #five.O, #three.O").length === 3

    var xWins = (xWin1 || xWin2 || xWin3 || xWin4 || xWin5 || xWin6 || xWin7 || xWin8)

    var oWins = (oWin1 || oWin2 || oWin3 || oWin4 || oWin5 || oWin6 || oWin7 || oWin8)

    var oCount = $('#gameBoard .O').length
    var xCount = $('#gameBoard .X').length

    var totalMoves = oCount + xCount


    var draw = (totalMoves === 9) && (!xWins) && (!oWins)

    if (xWins) {
        GameResult(player1)
        return xWins
    }

    if (oWins) {
        GameResult(player2)
        return oWins

    }

    if (draw) {
        gameResult('draw')
        return draw

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
