$(document).ready(function() {


    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';
    var winner = null;
    var xWins = 0;
    var oWins = 0;
    var tie = 0;

    //clicking event, puts 'X' or 'O' in box. Switches from 'X' to 'O' on if each turn, plus incrementing the turn counter
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
    }

    scoreBoard();
    startGame();

    //scoreboard
    function scoreBoard() {
        $('.playerX').html(xWins);
        $('.playerO').html(oWins);
        $('.Tie').html(tie);
    }

    //resets clicks on board and resets variables.
    function resetBoard() {
        $gameCells.removeClass('won');
        $gameCells.html('');
        winner = 'null';
        moves = ["", "", "", "", "", "", "", "", ""];
        turn = 'X';
        count = 0;
    }

    //New game button, clears board
    $('#newGame').click(function() {
        $(this).on();
        resetBoard();
        startGame();
    });

    // checks to see if there is a possibility of a winner
    function checkWinner(player) {

        //score
        function score() {
            if (winner === 'X') {
                xWins++;
            } else if (winner === 'O') {
                oWins++;
            } else {
                tie++;
            }
        }

        if (moves[0] === player && moves[1] === player && moves[2] === player) {
            $('#0, #1, #2').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[3] === player && moves[4] === player && moves[5] === player) {
            $('#3, #4, #5').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[6] === player && moves[7] === player && moves[8] === player) {
            $('#6, #7, #8').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[3] === player && moves[6] === player) {
            $('#0, #3, #6').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[1] === player && moves[4] === player && moves[7] === player) {
            $('#1, #4, #7').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[5] === player && moves[8] === player) {
            $('#2, #5, #8').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[0] === player && moves[4] === player && moves[8] === player) {
            $('#0, #4, #8').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (moves[2] === player && moves[4] === player && moves[6] === player) {
            $('#2, #4, #6').addClass('won');
            alert('Game over! ' + player + ' is the winner!');
            winner = player;
            score();
            scoreBoard();
            $($gameCells).off('click');
        } else if (count === 9) {
            alert("It's a tie");
            score();
            scoreBoard();
        }
    }



});
