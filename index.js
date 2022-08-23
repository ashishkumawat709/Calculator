let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(button of buttons){
    button.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value= screenValue;
        }else if (buttonText == 'C'){
            screenValue = "";
            screen.value= screenValue;
        }else if (buttonText == '='){
            screen.value= eval(screenValue);   //eval() is fn
        }else{
            screenValue += buttonText;
            screen.value= screenValue;
        }
    })
}