const score = document.getElementById("score")
const result = localStorage.getItem("RESULT");
//localStorage.setItem("DISABLED",true)
if(result == null){
    score.innerHTML = "Please complete the Quiz!!!"
    score.style.color = "red"
    score.style.fontSize = "2em"
}
else{
    score.innerHTML = `Your Score is: ${result}`
}