const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question")

const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
}
questionEl.innerText = `Quanto é ${num1} multiplicado por ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
   if(userAns === correctAns){
        score++
        updateLocalStorage()
   } else {
        score--
        updateLocalStorage()
   }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

scoreEl.innerText = `Resultado: ${score}`