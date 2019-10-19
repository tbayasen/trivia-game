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
        $(".q-1").html(triviaQuestion[0].question);
        $("#mult-choice-1").empty()
        for (i = 0; i < triviaQuestion[0].multipleChoice.length; i ++) {
            var choiceButton = $("<button>");
            choiceButton.text(triviaQuestion[0].multipleChoice[i]);
            $("#mult-choice-1").append(choiceButton);
            // $("#mult-choice-1").append(triviaQuestion[0].multipleChoice[i] + "<br/>")
        }
        $(".q1-content").toggle()
    });

    $("#btn2").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-2").html(triviaQuestion[1].question);
        $("#mult-choice-2").empty()
        for (i = 0; i < triviaQuestion[1].multipleChoice.length; i ++) {
            $("#mult-choice-2").append(triviaQuestion[1].multipleChoice[i] + "<br/>")
        }
        $(".q2-content").toggle()
    });

    $("#btn3").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-3").html(triviaQuestion[2].question);
        $("#mult-choice-3").empty()
        for (i = 0; i < triviaQuestion[2].multipleChoice.length; i ++) {
            $("#mult-choice-3").append(triviaQuestion[2].multipleChoice[i] + "<br/>")
        }
        $(".q3-content").toggle()
    });

    $("#btn4").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-4").html(triviaQuestion[3].question);
        $("#mult-choice-4").empty()
        for (i = 0; i < triviaQuestion[3].multipleChoice.length; i ++) {
            $("#mult-choice-4").append(triviaQuestion[3].multipleChoice[i] + "<br/>")
        }
        $(".q4-content").toggle()
    });

    $("#btn5").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-5").html(triviaQuestion[4].question);
        $("#mult-choice-5").empty()
        for (i = 0; i < triviaQuestion[4].multipleChoice.length; i ++) {
            $("#mult-choice-5").append(triviaQuestion[4].multipleChoice[i] + "<br/>")
        }
        $(".q5-content").toggle()
    });

    $("#btn6").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-6").html(triviaQuestion[5].question);
        $("#mult-choice-6").empty()
        for (i = 0; i < triviaQuestion[5].multipleChoice.length; i ++) {
            $("#mult-choice-6").append(triviaQuestion[5].multipleChoice[i] + "<br/>")
        }
        $(".q6-content").toggle()
        console.log(triviaQuestion[5]);
    });

    $("#btn7").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-7").html(triviaQuestion[6].question);
        $("#mult-choice-7").empty()
        for (i = 0; i < triviaQuestion[6].multipleChoice.length; i ++) {
            $("#mult-choice-7").append(triviaQuestion[6].multipleChoice[i] + "<br/>")
        }
        $("q7-content").toggle()
        console.log(triviaQuestion[6]);
    });

    $("#btn8").on("click", function() {
        //alert("You have clicked a button!")
        $("q-8").html(triviaQuestion[7].question);
        $("#mult-choice-8").empty()
        for (i = 0; i < triviaQuestion[7].multipleChoice.length; i ++) {
            $("#mult-choice-8").append(triviaQuestion[7].multipleChoice[i] + "<br/>")
        }
        $(".q8-content").toggle()
    });

    $("#btn9").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-9").html(triviaQuestion[8].question);
        $("#mult-choice-9").empty()
        for (i = 0; i < triviaQuestion[8].multipleChoice.length; i ++) {
            $("#mult-choice-9").append(triviaQuestion[8].multipleChoice[i] + "<br/>")
        }
        $(".q9-content").toggle()
    });

    $("#btn10").on("click", function() {
        //alert("You have clicked a button!")
        $(".q-10").html(triviaQuestion[9].question);
        $("#mult-choice-10").empty()
        for (i = 0; i < triviaQuestion[9].multipleChoice.length; i ++) {
            $("#mult-choice-10").append(triviaQuestion[9].multipleChoice[i] + "<br/>")
        }
        $(".q10-content").toggle()
    });


});