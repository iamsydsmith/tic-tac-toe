$(document).ready(function() {

    //Variables needed for the game to function
    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';
    var winner = null;
    var xWins = 0;
    var oWins = 0;
    var tie = 0;

    //Start game function. Puts 'X' or 'O' in box. Switches from 'X' to 'O' on each turn, plus incrementing the turn counter.
    function startGame() {
        $($gameCells).one('click', function() {
            $(this).html(turn);
            moves[this.id] = turn;
            count++;
            if (count % 2 === 0) {
                turn = 'X'; //X turn
                checkWinner('O');
            } else {
                turn = 'O'; //O turn
                checkWinner('X');
            }
        });
        console.log(moves, turn, count);
    }

    scoreBoard();
    startGame();

    //Scoreboard function. Changes html of score for player who wins or score for tie games.
    function scoreBoard() {
        $('.playerX').html(xWins);
        $('.playerO').html(oWins);
        $('.tie').html(tie);
    }

    //Reset Board function. Resets clicks on board and resets variables.
    function resetBoard() {
        $gameCells.removeClass('won');
        $gameCells.html('');
        winner = 'null';
        moves = ["", "", "", "", "", "", "", "", ""];
        turn = 'X';
        count = 0;
    }

    //Button for new game. Clears board and let's player play new game.
    $('#newGame').click(function() {
        $(this).on();
        resetBoard();
        startGame();
        console.log(moves, turn, count);
    });

    //Button for resetting the score
    $('#resetScore').click(function() {
        $(this).on();
        winner = null;
        xWins = 0;
        oWins = 0;
        tie = 0;
        scoreBoard();
    });

    //Check winner function. Checks to see if there is a possibility of a winner or tie and increases score for winner or tie game.
    function checkWinner(player) {

        //score keeper
        function score() {
            if (winner === 'X') {
                xWins++;
            } else if (winner === 'O') {
                oWins++;
            } else {
                tie++;
            }
        }

        // checks to see if there is a possibility of a winner or tie.
        if (moves[0] === player && moves[1] === player && moves[2] === player) {
            $('#0, #1, #2').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[3] === player && moves[4] === player && moves[5] === player) {
            $('#3, #4, #5').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[6] === player && moves[7] === player && moves[8] === player) {
            $('#6, #7, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[3] === player && moves[6] === player) {
            $('#0, #3, #6').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[1] === player && moves[4] === player && moves[7] === player) {
            $('#1, #4, #7').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[5] === player && moves[8] === player) {
            $('#2, #5, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[4] === player && moves[8] === player) {
            $('#0, #4, #8').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[4] === player && moves[6] === player) {
            $('#2, #4, #6').addClass('won');
            swal('Game Over!', 'Player ' + player + ' wins!', 'success');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (count === 9) {
            sweetAlert("Game over!", "It's a tie", "error");
            score();
            scoreBoard();
            $($gameCells).off('click');
        }
    }




});
