
// Javascript to disable back button from preventing user to go back to previous question
window.history.forward();
function noBack() {
    window.history.forward();
}

var totalScore = 0;
// function for checking Answer for question 1
function CheckAnswerForQuestion1()
{
    var selectedAnswer = document.querySelector('input[name="capitalofCA"]:checked');

    // Checking that any one option is selcted before going to next question
    if(selectedAnswer == null)
    {
        alert('Please select from given Option.')
    }
    else
    {
        // Making changes based on correct and wrong answers
        selectedAnswer = selectedAnswer.value;
        if(selectedAnswer == 'Sherlock Holmes')
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
            location.href = "Question2.html?score="+totalScore;
        }, 2000)
    }  
}