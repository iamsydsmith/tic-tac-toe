      // Sweetalert input alerts to enter players' names
        swal({
        title: "Welcome to Tic-Tac-Toe",
        text: "What's player one's name?",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write name"
    }, function(inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }
           swal({
        title: "Welcome to Tic-Tac-Toe",
        text: "What's player two's name?",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write name"
    }, function(inputValueTwo) {
        if (inputValueTwo === false) return false;
        if (inputValueTwo === "") {
            swal.showInputError("You need to write something!");
            return false
        }
        swal("Thanks " + inputValue + " & " + inputValueTwo);
        $(".player-one").text(inputValue);
        $(".player-two").text(inputValueTwo);

    });
});
