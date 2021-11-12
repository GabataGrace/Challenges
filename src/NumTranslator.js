import React, { useEffect, useState } from "react"


export default function NumTranslator(){
    const [displayableText, setDisplayableText] = useState("This is the beginning")

    let numbersTranslated= "";
    
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
        for (let r= 0; r< 1001; r++){
            numbers[r]= r;
        }
        // numbers = [ 110, 120, 130, 140, 150, 160, 210, 220 ]
        console.log("spit", numbers)

        let nancy = "";
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
        }
    console.log("nan2", nancy);
    setDisplayableText(nancy);
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
return (<div className= 'NumTranslator'>
        <div>Numbers:</div>
        {
        displayableText ? 
        <div>{displayableText}</div> :
        <div></div>
        }
        </div>
);
}

