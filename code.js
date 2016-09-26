$(document).ready(function() {


    $("p").hide();
    $("#cowPic").hide();

    $("h1").click(function() {

        $(this).next().fadeToggle(1000);


    });



    $("#testbutton").click(function() {
        // $("#jq02").css("background-color","red");
        $("strong").css("background-color", "red");
    });




});
