let display = document.getElementById("display");
let elements = document.getElementById("button");

elements.addEventListener("click", (event) =>{
    let clickedElement = event.target.innerHTML;
    if (clickedElement === "c"){
        display.value = "";
    }else if (event.target.classList.contains("numbers")){
        display.value += clickedElement;
        
    }else if (event.target.classList.contains("operators")){
        let lastchar = display.value[display.value.length-1];
        if (["+","-","*","/"].includes(lastchar)){
            display.value = display.value.slice(0,-1) + clickedElement;
        }
        else display.value += clickedElement;

    }else if (event.target.innerHTML === "="){
        if (display.value.length !== 0){
            try{
                display.value = eval(display.value);
            }catch(error) {
                display.value = "Syntax Error!";
            }
        }else{
            display.value = "";
        }         
        
    }
})
