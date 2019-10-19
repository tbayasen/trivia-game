$(document).ready(function() {
    /*setting question values inside array*/
    var triviaQuestion = [
    {   /*0*/
        question: `Barney Stinson became friends with Ted, Marshall, and Lily
        after meeting Ted where?`,
        multipleChoice: [`At a Urinal`, `At GNB`, `At University`,
        `At a wedding`],
        correctChoice: 0 },

    {   /*1*/
        question: `What kind of instrument did Ted steal for Robin?`,
        multipleChoice: [`Trumpet`, `Tuba`, `French Horn`, `Clarinet`],
        correctChoice: 2},

    {   /*2*/
        question: `What animal sent Ted to the hospital on his birthday?`,
        multipleChoice: [`Sheep`, `Cow`, `Pig `, `Goat`],
        correctChoice: 3},

    {   /*3*/
        question: `If Ted and Barney opened their own bar, what would it be called?`,
        multipleChoice: [`Mystery`, `McLaren's`, `Puzzles`, `Riddles`],
        correctChoice: 2},

    {   /*4*/
        question: `Which character can never take a bad picture?`,
        multipleChoice: [`Ted`, `Robin`, `Barney`, `Lily`],
        correctChoice: 2},

    {   /*5*/
        question: `What city does the show take place?`,
        multipleChoice: [`Seattle`, `New York`, `Chicago`, `San Francisco`],
        correctChoice: 1},
    
    {   /*6*/
        question: `Which of these is NOT a real doppelganger?`,
        multipleChoice: [`Lesbian Robin`, `Mustache Marshall`,`Mexican
        Wrestler Ted`, `Cab Driver Barney`],
        correctChoice: 3},

    {   /*7*/
        question: `Where does Lily go when she leaves Marshall?`,
        multipleChoice: [`New York`, `San Francisco`, `Chicago`, `Los Angeles`],
        correctChoice: 1},

    {   /*8*/
        question: `What part of Marshall can Lily not resist?`,
        multipleChoice: [`Thighs`, `Abs`, `Calves`, `Arms`],
        correctChoice: 2},

    {   /*9*/
        question: `Barney's real father was a _______ when he was younger`,
        multipleChoice: [`Teacher`, `Game Show Host`, `Professional Magician`, `Rock Star`],
        correctChoice: 3},

    {   /*10*/
        question: `What show host does Barney think is his father?`,
        multipleChoice: [`Bob Barker,`, `Alex Trebek`, `Steve Harvey`, `Dick Clark`],
        correctChoice: 0},

]
    
    var correctCount = 0;
    var incorrectCount = 0;
    var count = 30;

    //Timer Function 
    function timer() {
        count --;
    }


    //On-click method for dropdown content
    $("#btn1").on("click", function() {
        // alert("You have clicked a button!")
        $("#q1").html(triviaQuestion[0].question);
        for (i = 0; i < triviaQuestion[0].multipleChoice.length; i ++) {
            $("#q1").append("<br/>" + triviaQuestion[0].multipleChoice[i])
        }
        console.log(triviaQuestion[0]);
    });

    $("#btn2").on("click", function() {
        //alert("You have clicked a button!")
        $("#q2").html(triviaQuestion[1].question);
        for (i = 0; i < triviaQuestion[1].multipleChoice.length; i ++) {
            $("#q2").append("<br/>" + triviaQuestion[1].multipleChoice[i])
        }
    });

    $("#btn3").on("click", function() {
        //alert("You have clicked a button!")
        $("#q3").html(triviaQuestion[2].question);
        for (i = 0; i < triviaQuestion[2].multipleChoice.length; i ++) {
            $("#q3").append("<br/>" + triviaQuestion[2].multipleChoice[i])
        }
    });

    $("#btn4").on("click", function() {
        //alert("You have clicked a button!")
        $("q5").html(triviaQuestion[3].question);
        for (i = 0; i < triviaQuestion[3].multipleChoice.length; i ++) {
            $("#q4").append("<br/>" + triviaQuestion[3].multipleChoice[i])
        }
    });

    $("#btn5").on("click", function() {
        //alert("You have clicked a button!")
        $("#q5").html(triviaQuestion[4].question);
        for (i = 0; i < triviaQuestion[4].multipleChoice.length; i ++) {
            $("#q5").append("<br/>" + triviaQuestion[4].multipleChoice[i])
        }
    });

    $("#btn6").on("click", function() {
        //alert("You have clicked a button!")
        $("#q6").html(triviaQuestion[5].question);
        for (i = 0; i < triviaQuestion[5].multipleChoice.length; i ++) {
            $("#q6").append("<br/>" + triviaQuestion[5].multipleChoice[i])
        }
        console.log(triviaQuestion[5]);
    });

    $("#btn7").on("click", function() {
        //alert("You have clicked a button!")
        $("#q7").html(triviaQuestion[6].question);
        for (i = 0; i < triviaQuestion[6].multipleChoice.length; i ++) {
            $("q7").append("<br/>" + triviaQuestion[6].multipleChoice[i])
        }
        console.log(triviaQuestion[6]);
    });

    $("#btn8").on("click", function() {
        //alert("You have clicked a button!")
        $("#q8").html(triviaQuestion[7].question);
        for (i = 0; i < triviaQuestion[7].multipleChoice.length; i ++) {
            $("#q8").append("<br/>" + triviaQuestion[7].multipleChoice[i])
        }
    });

    $("#btn9").on("click", function() {
        //alert("You have clicked a button!")
        $("#q9").html(triviaQuestion[8].question);
        for (i = 0; i < triviaQuestion[8].multipleChoice.length; i ++) {
            $("#q9").append("<br/>" + triviaQuestion[8].multipleChoice[i])
        }
    });

    $("#btn10").on("click", function() {
        //alert("You have clicked a button!")
        $("#q10").html(triviaQuestion[9].question);
        for (i = 0; i < triviaQuestion[9].multipleChoice.length; i ++) {
            $("#q10").append("<br/>" + triviaQuestion[9].multipleChoice[i])
        }
    });


});