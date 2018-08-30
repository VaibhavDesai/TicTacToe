<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>TicTacToe</title>
    <link rel="stylesheet" href="css/stylesheet.css">

</head>

<body>

<h1 class="center">
    Tic-Tac-Toe
</h1>

    <form id="opponentChoice" class="center">
        <h3>
            Play Against
        <input type="radio" name="radio" value="Computer"> Computer
        <input type="radio" name="radio" value="Human"> Human
        </h3>
    </form>
    <div style="text-align:center;">
    <img src="images/reset_image.png" id="resetButton" class="playerInfo"></img>
    </div>

<h1>
    <div id="gameResult" class="center"></div>
</h1>

<div class="mainContainer">

    <section id="gameInfo" class="gameInfoContainer hideElement">

        <div id="player1" class="playerInfo green black">Player1</div>

        <div id="player2" class="playerInfo">Pick you opponent</div>

    </section>


    <div id="counter" class="center hideElement"></div>

    <section id="gameBoard" class="gameBoardContainer">
        <div class="item unclickable" id='one'>X/O</div>
        <div class="item unclickable" id='two'>X/O</div>
        <div class="item unclickable" id='three'>X/O</div>

        <div class="item unclickable" id='four'>X/O</div>
        <div class="item unclickable" id='five'>X/O</div>
        <div class="item unclickable" id='six'>X/O</div>

        <div class="item unclickable" id='seven'>X/O</div>
        <div class="item unclickable" id='eight'>X/O</div>
        <div class="item unclickable" id='nine'>X/O</div>
    </section>


</div>


<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>


<script  src="js/gameplay.js"></script>
<script>
    initClickListners(event)
</script>


</body>

</html>
