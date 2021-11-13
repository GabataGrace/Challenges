import React, { useEffect, useState } from "react";
import {Button} from "react-bootstrap";


export default function NumTranslator(){
    const [displayableText, setDisplayableText] = useState("This is the beginning")
    const [inputValue, setInputValue] = useState("TOLD YA!");

    let numbersTranslated= "";
    let gatheredText = "";
    function calculateNumbers(){
        let j= 0;


       let OnesControl = [
                            {"text":"", "value":0},
                            {"text":"one", "value":1},
                            {"text":"two", "value":2},
                            {"text":"three", "value":3},
                            {"text":"four", "value":4},
                            {"text":"five", "value":5},
                            {"text":"six", "value":6},
                            {"text":"seven", "value":7},
                            {"text":"eight", "value":8},
                            {"text":"nine", "value":9},

         ];
       let TeensControl = [
                            {"text":"", "value":0},
                            {"text":"one", "value":1},
                            {"text":"two", "value":2},
                            {"text":"three", "value":3},
                            {"text":"four", "value":4},
                            {"text":"five", "value":5},
                            {"text":"six", "value":6},
                            {"text":"seven", "value":7},
                            {"text":"eight", "value":8},
                            {"text":"nine", "value":9},
                            {"text":"ten", "value":10},
                            {"text":"eleven", "value":11},
                            {"text":"twelve", "value":12},
                            {"text":"thirteen", "value":13},
                            {"text":"fourteen", "value":14},
                            {"text":"fifteen", "value":15},
                            {"text":"sixteen", "value":16},
                            {"text":"seventeen", "value":17},
                            {"text":"eighteen", "value":18},
                            {"text":"nineteen", "value":19},

            ];
        let TensControl = [
                            {"text":"hundred", "value":100},
                            {"text":"ninety","value":90},
                            {"text":"eighty", "value":80},
                            {"text":"seventy","value":70},
                            {"text":"sixty", "value":60},          
                            {"text":"fifty","value":50},
                            {"text":"fourty", "value":40},       
                            {"text":"thirty","value":30},
                            {"text":"twenty", "value":20},
                            {"text":"ten", "value":10},
            ];
        let HundredControl = [
                            {"text":"thousand", "value":1000},
                            {"text":"nine-hundred","value":900},
                            {"text":"eight-hundred", "value":800},
                            {"text":"seven-hundred","value":700},
                            {"text":"six-hundred", "value":600},          
                            {"text":"five-hundred","value":500},
                            {"text":"four-hundred", "value":400},       
                            {"text":"three-hundred","value":300},
                            {"text":"two-hundred", "value":200},
                            {"text":"one-hundred", "value":100},
];
            
        
            console.log(OnesControl);
        let temporaryText= "";


        let numbers = [];
        for (let r= 0; r< 99999; r++){
            numbers[r]= r;
        }
         numbers = [1000000]
        let nancy = "";
       // numbers = [236];
      // let gatheredText = ""; moved up to translate for now
      
        function hunthousand(numbers) {
        console.log("spit", numbers)
//create input field (type # in) updates to state when updated
//set the value (property of the input field)= to state;
// set onclick of Button to call hunthousand passing in value of state.
//recvg result to go in new display box 
//demonstrate we know how 2 do this using create element... (from Canvas)
//You may create a holder element inside your HTML,
// but all other elements should be created through JavaScript.
            nancy = "";
        for (let p=0; p< numbers.length; p++){
            j = numbers[p];
        console.log("here because -", numbers[p])
        console.log("we here because -", p)
        console.log("im here because -", j)
            function createText(){
                if ( temporaryText.length > 1){
                    temporaryText = temporaryText + "; ";
                }
                console.log("lil", TensControl.length)
                if (j > 100){
                    for (let q=0; q< HundredControl.length; q++){
                        console.log("bibh", q)
                        // if (j >= HundredControl[q].value){
                        if (( j >= 0) && (j < 200)){
                            j = j;
                            console.log("Im here", j)
                        }else{
                            console.log("im there- should i stay", j)
                            let tempValue= ""
                            if (j >= HundredControl[q].value){
                                if (j%100 === 0){
                                    tempValue = "" //this should only apply to numbers / 100
                                }else{
                                    if (j%10 === 0){
                                        tempValue = "*"
                                    }
                                    tempValue = "-"
                                }
                            temporaryText = temporaryText + HundredControl[q].text + tempValue;
                            j = j - HundredControl[q].value;
                            console.log("temp", temporaryText, j)
                            }
                        }
                    }
                
                }
                for (let k=0; k< TensControl.length; k++){
                    console.log("bib", k)
                    // if (j >= TensControl[k].value){
                    if (( j >= 0) && (j < 20)){
                        j = j;
                        console.log("Im here", j)
                    }else{
                        console.log("im there- should i stay", j)
                        let tempValue= ""
                        console.log("mod", j%10, j)
                        if (j >= TensControl[k].value){
                            if ((j <= 100) && (j%10 === 0)){
                                tempValue = ""
                                //1- 20, 110, 120,130,140,150,160,170,180,190
                            }else{
                                // tempValue = "*"
                                tempValue = tempValue + "-"
                            }
                        temporaryText = temporaryText + TensControl[k].text + tempValue;
                        j = j - TensControl[k].value;
                        console.log("temp", temporaryText, j)
                        }
                    }
                }

                console.log("jis ", j)
                function getOnesPosition(integerValue, myControl){
                    console.log("control", myControl)
                    console.log("int", integerValue)
                    temporaryText = temporaryText + myControl[integerValue].text
                    return (temporaryText);
                }
            
                // j is already set
                if ( j >= 0){
                    if ( j >= 10){
                        numbersTranslated = getOnesPosition(j, TeensControl);
                    }else{
                    numbersTranslated = getOnesPosition(j, OnesControl);
                    }
                }
                console.log("bob", numbersTranslated);
                return numbersTranslated;
            }
        nancy = createText();
        console.log("nan", nancy);
        setDisplayableText(nancy);
        gatheredText = gatheredText + nancy;
        nancy = "";
        temporaryText = "";
        console.log("HELLO", gatheredText)
        }
    } //end of scope
     //[1, 2, 3, .......1000000 ] start with number as an array of 1 - 1 Million
     // if number (input by user)= 123456 
        for (let c=0; c<numbers.length; c++) {
            console.log("FIRSTHALF", numbers[c]%1000)
            console.log("SECONDHALF", Math.floor(numbers[c]/1000))
            let translation2 = hunthousand([Math.floor(numbers[c]/1000)]); 
            if(numbers[c]>1000) {
                gatheredText = gatheredText + "-thousand-"; 
            }
            let translation = hunthousand([numbers[c]%1000]);
            gatheredText = gatheredText + ", ";  
          //  gatheredText = gatheredText + translation2; // for every iteration 
         //   gatheredText = gatheredText + translation; // for every iteration
        } 
        console.log("numbersubanything", gatheredText)
        // for loop through numbers 
        //     splitting the number by digit 1-2-3 and 4-5-6 
        //     calling hunthousand passing each value (above digits) as an array      
        //     updating gatheredText and state with result1-2-3 "thousand"  result4-5-6 
        //MATH >>>>>>> then number%1000 = 456 && number/1000 = 123.xx 
        //MATH >>>>>>> so hunthousand[number%] = 456 + thousand + hunthousand[number/]
        //MATH >>>>>>> get number to put into an array...then divide by 1000
        //

//    console.log("nan2", nancy);
  //  setDisplayableText(nancy);
    setDisplayableText(gatheredText);
    console.log("bob2", displayableText);
    }


useEffect(
        ()=>{
            let display = calculateNumbers();
            console.log("out", display)
        //    setDisplayableText(display);
        },[],
    );

    console.log("gig", displayableText);

function inputChangeHandler(e) {
    console.log("HI", e);
setInputValue(e.target.value);
}

function buttonClickHandler(e) {
    console.log("OKAY", inputValue);
    setInputValue(e.target.value);
    let myelement = document.getElementById("textBox");
    myelement.innerHTML = hunThousand([123456]);
  //  myelement.innerHTML = inputValue;
}

return (
    <div className= 'NumTranslator'>
        <div className="userInputContainer">Input Number: 
            <input className="input" value= {inputValue} onChange={inputChangeHandler}></input>
            <Button className="inputBoxButton" onClick={buttonClickHandler}>Click To Translate</Button>
            <textbox className ="textBox" id="textBox"> I CAN SEE YOU!!</textbox>
        </div>
        <div>Numbers:</div>
        {
        displayableText ? 
        <div>displayableText</div> :
        <div></div>
        }
    </div>
);
}

