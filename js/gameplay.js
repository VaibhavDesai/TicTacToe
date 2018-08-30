var playerValue = 'X'

function initClickListners(event) {

    $(".item").click(function (event) {

        $(this).addClass(playerValue)
        $(this).html(playerValue)

        playGame()

    })

    $("#opponentChoice input").on("change", function() {
        var player2 = $("input[name='radio']:checked", "#opponentChoice").val()
        $(".item").removeClass("unclickable")
        $("#opponentChoice").addClass('unclickable')

        if (player2 == "Human"){
            $("#player2").html("Player 2")
        }
    })

    $("#resetButton").click(function(event) {
        $("#opponentChoice").removeClass('unclickable')
        document.getElementById("opponentChoice").reset()
        $("#playerOne, #gameResult, #resultMessage").html("")
        $("#gameInfo, #gameBoard, #resultMessage").addClass("hideElement")
        $(".item").removeClass("X O gray unclickable")
        $(".item").html("X/O")
        playerValue = 'X'
    })
}

function checkWhoseTurn() {

    var xCount = $('#gameBoard .X').length
    var oCount = $('#gameBoard .O').length

    var player1Turn = !xCount || oCount > xCount || xCount && oCount == xCount
    var player2Turn = oCount < xCount

    if (player1Turn) {

        var unfilledCells = document.querySelectorAll("div.item:not(.X):not(.O)")
        $(unfilledCells).removeClass('unclickable')
        $("#player2").removeClass('yellow blackText')
        $("#player1").addClass('yellow blackText')
        playerValue = 'X'

    }

    else if (player2Turn) {

        playerValue = 'O'
        Player2Turn()

    }

    return
}

function Player2Turn() {

    var player2 = $("#player2").text()
    console.log("herehere"+player2)
    if(player2 == 'Computer'){

        var allItems = document.querySelectorAll("div.item")
        $(allItems).addClass('unclickable')
        setTimeout(ComputerPlay, 1000) //call after 1 second...

    }

    $("#player1").removeClass('yellow blackText')
    $("#player2").addClass('yellow blackText')

}

function ComputerPlay() {

    var notBlueOrRed = document.querySelectorAll("div.item:not(.X):not(.O)")
    var randomItem = notBlueOrRed[Math.floor(Math.random() * notBlueOrRed.length)]
    $(randomItem).addClass("O unclickable")
    $(randomItem).html(playerValue)
    playGame()
}

function reset() {
    console.log("reset: resetting game, for new game...")
    $("#gameInfo").removeClass("hideElement")
    $("#gameResult, #resultMessage").addClass("hideElement")
    $(".item").removeClass("X O gray unclickable")
    $(".item").html("X/O")
}

function checkForWinner() {

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
        GameResult('draw')
        return draw

    }

}

function GameResult(result) {

    $("#gameResult, #resultMessage").removeClass("hideElement")

    if(result == 'draw'){

        $("#gameResult").html(`<span class='redBig'>Game is a draw.</span>`)
        $("#resultMessage").html("<span>Game ended in a draw.</span>")
    }
    else{
        $("#gameResult, #resultMessage").removeClass("hideElement")
        $("#gameResult").html(`<span class='yellowBig'>${result} wins!</span>`)
        $("#resultMessage").html("<span class='yellow'>Congratulations! You won!</span>")

    }

    $("#gameInfo").addClass("hideElement")
    disableRemainingItems()

}

function disableRemainingItems() {

    var notBlueOrRed = document.querySelectorAll("div.item:not(.X):not(.O)")
    $(notBlueOrRed).addClass("gray")
    $(notBlueOrRed).html("¯\\_(ツ)_/¯")
    $(notBlueOrRed).addClass("unclickable")
    return
}


function playGame() {

    console.log('play game!')
    var winner = checkForWinner()
    if (!winner) {
        console.log('no winner yet...')
        checkWhoseTurn()
    }
    if (winner) {
        console.log('game over, resetting game')
        //setTimeout(reset, 3000) //call reset after 3 seconds...
    }
}