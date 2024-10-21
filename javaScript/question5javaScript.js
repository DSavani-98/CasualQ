
// Logic to get parameters(Score) from the URL
const urlParams = new URLSearchParams(window.location.search);
const scoreForPage5 = urlParams.get('score');
document.getElementById('Score').innerHTML = scoreForPage5;

var totalScore = parseInt(scoreForPage5);

// Javascript to disable back button from preventing user to go back to previous question
window.history.forward();
    function noBack() {
        window.history.forward();
    }

// function for checking Answer for question 1
function CheckAnswerForQuestion5()
{
    var selectedAnswer = document.querySelector('input[name="carCompany"]:checked');

    // Checking that any one option is selcted before going to next question
    if(selectedAnswer == null)
    {
        alert('Please select from given Option.')
    }
    else
    {
        // Making changes based on correct and wrong answers
        selectedAnswer = selectedAnswer.value;
        if(selectedAnswer == 'Porsche')
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
            location.href = "Main.html?score="+totalScore+"&isQuizCompleted=yes";
        }, 2000)
    }
    
}