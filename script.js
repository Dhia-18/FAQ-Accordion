const questions = document.querySelectorAll(".question");
const plusBtns = document.querySelectorAll("img");
const answers = document.querySelectorAll(".answer");

for (let i=0;i<questions.length;i++){
    questions[i].addEventListener("click",()=>{
        if(answers[i].classList.contains("hidden")){
            plusBtns[i+1].src="assets/images/icon-minus.svg";
        }
        else{
            plusBtns[i+1].src="assets/images/icon-plus.svg";
        }
        answers[i].classList.toggle("hidden");
    })
}