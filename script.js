let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let inputBox = document.querySelector("#inputBox");
let btns = document.querySelectorAll(".btn");
let inputBoxText = ""

inputBox.disabled = true;

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        inputBoxText = inputBoxText + btn.textContent;
        showOutput();
    })
})

clear.addEventListener("click",()=>{
    inputBoxText = "";
    showOutput();
})

del.addEventListener("click",()=>{
    inputBoxText = inputBoxText.substring(0,inputBoxText.length-1);
    showOutput();
})

equal.addEventListener("click",()=>{
    inputBoxText = eval(inputBoxText);
    showOutput();
})

function showOutput(){
    inputBox.value = inputBoxText;
}