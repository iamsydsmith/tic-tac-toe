$(document).ready(function() {


    var $gameCells = $('.cell');

    $($gameCells).one('click', function() {
        console.log(this.id);
    })



});
