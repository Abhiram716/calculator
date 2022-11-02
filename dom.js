var display=document.getElementById('display');
var buttons=Array.from(document.querySelectorAll("button"));
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText="0";
                console.log("Abhi")
                break;
            case 'Delete':
                 display.innerText=display.innerText.slice(0,-1);
                 break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                }
                catch{
                    display.innerText="Error"
                }
                break;
                case '.':
                    if(display.innerText.includes(".")){
                        return
                    }
                    else{
                        display.innerText+=".";
                    }
                    break;
            default:
                display.innerText+=e.target.innerText
        }
    })
});
