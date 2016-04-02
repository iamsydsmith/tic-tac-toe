$(document).ready(function() {


    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';

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

startGame();
    // checks to see if there is a possibility of a winner
    function checkWinner(player) {
        if (moves[0] === player && moves[1] === player && moves[2] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[3] === player && moves[4] === player && moves[5] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[6] === player && moves[7] === player && moves[8] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[0] === player && moves[3] === player && moves[6] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[1] === player && moves[4] === player && moves[7] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[2] === player && moves[5] === player && moves[8] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[0] === player && moves[4] === player && moves[8] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (moves[2] === player && moves[4] === player && moves[6] === player) {
            alert('Game over! ' + player + ' is the winner!');
            $('#newGame').removeClass('invisible');
        } else if (count === 9) {
            alert("It's a tie");
            $('#newGame').removeClass('invisible');
        }
    }

  function turnOffBoard() {
    $('.cell').off('click');
    moves = ["", "", "", "", "", "", "", "", ""];
    turn = 'X';
    count = 0;
}

    //New game button, clears board and resets game
    var reset = $('#newGame').click(function() {
        $(this).on();
        $gameCells.html('');
        turnOffBoard();
        startGame();

    });

});
