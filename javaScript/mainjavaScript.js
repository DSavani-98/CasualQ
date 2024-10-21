
// Javascript to disable back button from preventing user to go back to previous question
const urlParams = new URLSearchParams(window.location.search);
const totalScore = urlParams.get('score');
const isQuizCompleted = urlParams.get('isQuizCompleted');


window.history.forward();
function noBack() {
    window.history.forward();
}

if(isQuizCompleted == 'yes')
{
    document.getElementById('greetingMessage').innerHTML = "Congratulations!!!";
    document.getElementById('notifiyingMessage').innerHTML = "You have Successfully Completed Quiz.";
    document.getElementById('btnTxt').innerHTML = "Start Over Again.";
    document.getElementById('divHideUnhide').style.display="none";
    document.getElementById('scoreBoard').style.display="block"; 
    document.getElementById('Score').innerHTML = totalScore;
}