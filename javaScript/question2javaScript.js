
// Logic to get parameters(Score) from the URL
const urlParams = new URLSearchParams(window.location.search);
const scoreForPage2 = urlParams.get('score');
document.getElementById('Score').innerHTML = scoreForPage2;

var totalScore = parseInt(scoreForPage2);

// Javascript to disable back button from preventing user to go back to previous question
window.history.forward();
    function noBack() {
        window.history.forward();
    }

// function for checking Answer for question 1
function CheckAnswerForQuestion2()
{
    var answerTxtBox = document.getElementById('question2Answer');
    var enteredAnswer = answerTxtBox.value;

    
    if(enteredAnswer == "")
    {
        alert('Please enter your answer.')
    }
    else if(!(isNaN(enteredAnswer)))
    {
        alert('Please enter Alphabetic values.')
        answerTxtBox.value = "";
    }
    else
    {
        // Making changes based on correct and wrong answers
        if(enteredAnswer.toLowerCase() == 'ottawa')
        {
            totalScore += 1
            document.getElementById('Score').innerHTML = totalScore;
            document.getElementById('correctAnswer').style.display="block";
        }
        else
        {
            document.getElementById('Score').innerHTML = totalScore;
            document.getElementById('incorrectAnswer').style.display="block";
        }
    
        // Waiting time before going to next queestion
        window.setTimeout(function(){
            location.href = "Question3.html?score="+totalScore;
        }, 2000)
    }
    
}