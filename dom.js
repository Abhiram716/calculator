var display=document.getElementById('display');
var buttons=Array.from(document.querySelectorAll("button"));
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText=" ";
                console.log("Abhi")
                break;
            case 'Delete':
                 display.innerText=display.innerText.slice(0,-1);
                 break;
            case '=':
                    var string=display.innerText;
                    console.log(string);
                    var opr_pos=findTheOperator(string);
                    var num1=parseInt(string.substring(0,opr_pos.valueOf()));
                    console.log(num1)
                    var num2=parseInt(string.substring((opr_pos+1).valueOf(),string.length))
                    console.log(num2)
                    if(string.includes("/")){
                        try{
                            var ans=num1/num2+"";
                            display.innerText=ans;
                        }
                        catch{
                            display.innerText="Hello";
                        }
                    }
                    if(string.includes("*")){
                        try{
                            var ans=num1*num2+"";
                            display.innerText=ans;
                        }
                        catch{
                            display.innerText="Hello";
                        }
                    }
                    if(string.includes("+")){
                        try{
                            var ans=num1+num2+"";
                            display.innerText=ans;
                        }
                        catch{
                            display.innerText="Hello";
                        }
                    }
                    if(string.includes("-")){
                        try{
                            var ans=num1-num2+"";
                            display.innerText=ans;
                        }
                        catch{
                            display.innerText="Hello";
                        }
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
                case '*':
                    if(display.innerText.includes("*")){
                        return
                    }
                    else{
                        display.innerText+="*";
                    }
                break;
                case '/':
                    if(display.innerText.includes("/")){
                        return
                    }
                    else{
                        display.innerText+="/";
                    }
                break;
                case '*':
                    if(display.innerText.includes("+")){
                        return
                    }
                    else{
                        display.innerText+="+";
                    }
                break;
                case '*':
                    if(display.innerText.includes("-")){
                        return
                    }
                    else{
                        display.innerText+="-";
                    }
                break;

            default:
                display.innerText+=e.target.innerText
        }
    })
});

function findTheOperator(string){
    for(var i =0;i<string.length;i++){
        if(string.charAt(i)==="*" || string.charAt(i)==="/" || string.charAt(i)==="+" || string.charAt(i)==="-"){
            return i;
        }
    }
};

// var buttons=document.querySelectorAll("button");
// console.log(buttons);
// console.log(buttons.length);
// buttons.forEach(button=> button.addEventListener('click',e =>{
//     switch(e.target.innerText){
//         case 'Clear':
//                 display.innerText="";
//                 console.log("Abhi")
//                 break;
//         case 'Delete':
//             display.innerText=display.innerText.slice(0,-1);
//             break;
//         case '=':
//             try{
//                 display.innerText=eval(display.innerText);
//             }
//             catch{
//                 display.innerText="Error"
//             }
//             break;
//         case ".":
//             if(display.innerText.includes(".")){
//                 return;
//             }
//             else{
//                 display.innerText+=e.target.innerText;
//             }
//             break;
//         case "=":
//             try{
//                 display.innerText=eval(display.innerText);
//             }
//             catch{
//                 display.innerText="Error"
//             }
//                 break;
//             break;
//         default:
//         display.innerText+=e.target.innerText;
//     }
    
// }))
