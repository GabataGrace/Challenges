import React from "react";
import { useEffect, useState, useMemo } from "react";

export default function NumTrans2() {
  const [displayableText, setDisplayableText] = useState("");
  const [inputValue, setInputValue] = useState("");

  let numbersTranslated = "";
  let gatheredText = "";
  let OnesControl = [
    { text: "", value: 0 },
    { text: "one", value: 1 },
    { text: "two", value: 2 },
    { text: "three", value: 3 },
    { text: "four", value: 4 },
    { text: "five", value: 5 },
    { text: "six", value: 6 },
    { text: "seven", value: 7 },
    { text: "eight", value: 8 },
    { text: "nine", value: 9 },
  ];
  let TeensControl = [
    { text: "", value: 0 },
    { text: "one", value: 1 },
    { text: "two", value: 2 },
    { text: "three", value: 3 },
    { text: "four", value: 4 },
    { text: "five", value: 5 },
    { text: "six", value: 6 },
    { text: "seven", value: 7 },
    { text: "eight", value: 8 },
    { text: "nine", value: 9 },
    { text: "ten", value: 10 },
    { text: "eleven", value: 11 },
    { text: "twelve", value: 12 },
    { text: "thirteen", value: 13 },
    { text: "fourteen", value: 14 },
    { text: "fifteen", value: 15 },
    { text: "sixteen", value: 16 },
    { text: "seventeen", value: 17 },
    { text: "eighteen", value: 18 },
    { text: "nineteen", value: 19 },
  ];
  let TensControl = [
    { text: "hundred", value: 100 },
    { text: "ninety", value: 90 },
    { text: "eighty", value: 80 },
    { text: "seventy", value: 70 },
    { text: "sixty", value: 60 },
    { text: "fifty", value: 50 },
    { text: "fourty", value: 40 },
    { text: "thirty", value: 30 },
    { text: "twenty", value: 20 },
    { text: "ten", value: 10 },
  ];
  let HundredControl = [
    { text: "thousand", value: 1000 },
    { text: "nine-hundred", value: 900 },
    { text: "eight-hundred", value: 800 },
    { text: "seven-hundred", value: 700 },
    { text: "six-hundred", value: 600 },
    { text: "five-hundred", value: 500 },
    { text: "four-hundred", value: 400 },
    { text: "three-hundred", value: 300 },
    { text: "two-hundred", value: 200 },
    { text: "one-hundred", value: 100 },
  ];

  function getOnesPosition(integerValue, myControl, temporaryText) {
    // console.log("control", myControl);
    // console.log("int", integerValue);
    temporaryText = temporaryText + myControl[integerValue].text;
    return temporaryText;
  }

  function hunthousand(numbers, nancy, temporaryText, j) {
    nancy = "";

    function createText() {
      //   console.log("cant find grace");
      if (temporaryText.length > 1) {
        temporaryText = temporaryText + "; ";
      }
      if (j > 100) {
        for (let q = 0; q < HundredControl.length; q++) {
          if (j >= 0 && j < 200) {
          } else {
            let tempValue = "";
            if (j >= HundredControl[q].value) {
              if (j % 100 === 0) {
              } else {
                if (j % 10 === 0) {
                  tempValue = "*";
                }
                tempValue = "-";
              }
              temporaryText =
                temporaryText + HundredControl[q].text + tempValue;
              j = j - HundredControl[q].value;
            }
          }
        }
      }
      for (let k = 0; k < TensControl.length; k++) {
        if (j >= 0 && j < 20) {
        } else {
          let tempValue = "";
          if (j >= TensControl[k].value) {
            if (j <= 100 && j % 10 === 0) {
              tempValue = "";
            } else {
              tempValue = tempValue + "-";
            }
            temporaryText = temporaryText + TensControl[k].text + tempValue;
            j = j - TensControl[k].value;
          }
        }
      }

      if (j >= 0) {
        if (j >= 10) {
          numbersTranslated = getOnesPosition(j, TeensControl, temporaryText);
        } else {
          numbersTranslated = getOnesPosition(j, OnesControl, temporaryText);
        }
      }
      return numbersTranslated;
    }
    for (let p = 0; p < numbers.length; p++) {
      j = numbers[p];
      nancy = createText();
      gatheredText = gatheredText + nancy;
      nancy = "";
      temporaryText = "";
    }
    return gatheredText;
  }
  let soFar = "";
  let numbers123 = [];
  numbers123 = [1, 10, 999, 1000, 10000, 999999, 1000000, 10000000, 999000000];

  function calculateNumbers(numbers) {
    let j = 0;
    let temporaryText = "";

    let nancy = "";

    let finalDisplayableText = " ";
    for (let c = 0; c < numbers.length; c++) {
      let sectionMillions = 0;
      let sectionThousands = 0;
      let sectionOnes = 0;

      let amountleft = numbers[c];
      let oneMillion = 1000000;
      if (amountleft >= oneMillion) {
        sectionMillions = Math.floor(numbers[c] / oneMillion);
        amountleft = amountleft - sectionMillions * oneMillion;
      }
      let oneThousand = 1000;
      if (amountleft >= oneThousand) {
        sectionThousands = Math.floor(amountleft / oneThousand);
        amountleft = amountleft - sectionThousands * oneThousand;
      }
      sectionOnes = amountleft;

      let thisNumber = " ";
      console.log("say----" + sectionMillions + "millions:  in words");
      console.log("say----" + sectionThousands + "thousand   in words");
      console.log("say----" + sectionOnes + "ones in words");
      let trans = "";
      if (sectionMillions > 0) {
        j = 0;
        trans = hunthousand([sectionMillions], nancy, temporaryText, j);
        thisNumber = thisNumber + trans + "-million, ";
        gatheredText = "";
      }
      if (sectionThousands > 0) {
        j = 0;
        trans = "";
        trans = hunthousand([sectionThousands], nancy, temporaryText, j);

        thisNumber = thisNumber + trans + "-thousand, ";
        gatheredText = "";
      }
      if (sectionOnes > 0) {
        j = 0;
        trans = "";
        trans = hunthousand([sectionOnes], nancy, temporaryText, j);
        thisNumber = thisNumber + trans + ".";
        finalDisplayableText = thisNumber;
        gatheredText = "";
      }
      soFar = soFar + "; " + thisNumber;
    }
    return soFar;
  }

  let display = calculateNumbers(numbers123);

  const inputChangeHandler = (e) => {
    //  console.log("HI", e);
    setInputValue(e.target.value);
  };

  const buttonClickHandler = (e) => {
    //console.log("OKAY", inputValue);
    //setInputValue(e.target.value);
    let myelement = document.getElementById("textBox");
    //myelement.innerHTML = transLateSingleNUmber(inputValue);
    //console.log(e.target.value, " is entered");
    //console.log("inputValue = ", inputValue);
    let ourNumber = inputValue;
    //console.log("ourNumber = ", ourNumber);
    let manualNumbers = [ourNumber];
    //console.log("our array = ", manualNumbers);
    soFar = "";
    let temp = calculateNumbers(manualNumbers);
    //console.log("theAnswer", temp);

    myelement.innerHTML = "your number is ->" + temp + "<--EOL";
  };

  let staticTranslation = soFar;
  return (
    <div className="NumTranslator">
      <div className="userInputContainer">
        Input Number:
        <input
          placeholder="enter a number"
          type="text"
          className="input"
          value={inputValue}
          onChange={inputChangeHandler}
        ></input>
        <button className="inputBoxButton" onClick={buttonClickHandler}>
          Click To Translate
        </button>
        <div className="textBox" id="textBox">
          "I CAN SEE YOU!!"
        </div>
      </div>
      <div>Numbers:</div>
      <div>{staticTranslation}</div>
    </div>
  );
}
