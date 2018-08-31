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
        <input type="radio" name="radio" value="AI"> AI
        </h3>
    </form>
    <div style="text-align:center;">
    <img src="images/reset_image.png" id="resetButton" class="playerInfo"/>
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
        <div class="item unclickable" id='0'>X/O</div>
        <div class="item unclickable" id='1'>X/O</div>
        <div class="item unclickable" id='2'>X/O</div>

        <div class="item unclickable" id='3'>X/O</div>
        <div class="item unclickable" id='4'>X/O</div>
        <div class="item unclickable" id='5'>X/O</div>

        <div class="item unclickable" id='6'>X/O</div>
        <div class="item unclickable" id='7'>X/O</div>
        <div class="item unclickable" id='8'>X/O</div>
    </section>


</div>

<div>
    <br>
    <br>

    <p>
        <br>
        Rules of the Game:<br>
        1) The first player always plays for 'X'.<br>
        2) The second player (Computer or Human) always plays for 'O'<br>
        3) If first player and second player play alternatively on 3x3 grid.<br>
        4) The player who has 3 consecative cells symbols (either 'X' or 'O') in a row, column, or diagonal wins the match,
        else the match is declared draw.

    </p>

    <h1>Features implemented</h1>
    <p>
        1) Playing against Computer<br>
        2) Playing against Human.
        3) Playing against an Advanced AI.<br>
    </p>

    <h1>Implementation details</h1>
    <p>
        1) <b>ticTacToe.html</b> (renamed as index.md for hosting on GitHub pages) - The UI elements such as GameBoard, ResultInfo,
        ResetController are held in place. The GameBoard in made of grid of nine div elements and the class names of the div elements
        are used to manipulate various configrations of the cells. Each of the div in the grid have onClick listener which are defined
        in the JavaScript.<br><br>

        2) <b>js/gameplay.js</b> - The is the meat of the project and has all the logic for game. The initClickListener() method is initlized
        in the html file as this would initlize all the click listener as soon as the file loads. With every move of the player the
        cell of the grid are made "clickable/unclickable" by dynamically changes the classes of the div tag. This mechanism allows the
        cell in the grid to be click only once.<br><br>

        With every move the class of the div that the cell represents is appended by the symbol that it is played for.
        And with every move the board is checked for the winning configration.

        The logic for Computer's game play is straight forward. The computer picks randomly for the available cells in the grid.<br><br>

        3) <b>js/AI.js</b> - The logic for AI is using MinMax Algorithm with Alpha-Beta pruning. I have used following resources for my reference:<br>
        <br><a href="https://mostafa-samir.github.io/Tic-Tac-Toe-AI">https://mostafa-samir.github.io/Tic-Tac-Toe-AI/</a>
        <br><a href="https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/"> https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/</a><br><br>


        3) <b>css/stylesheet.css</b> - This file is used for styling various elements of the application.<br><br>

    <p>

    </p>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<script  src="js/AI.js"></script>
<script  src="js/gameplay.js"></script>
<script>
    initClickListners(event)
</script>

