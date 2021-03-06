import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function NumTranslator() {
  const [displayableText, setDisplayableText] = useState("-");
  const [inputValue, setInputValue] = useState("TOLD YA!");
  const [redonow, setReDoNow] = useState("no");

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

  function inputChangeHandler(e) {
    //  console.log("HI", e);
    setInputValue(e.target.value);
  }

  function buttonClickHandler(e) {
    // console.log("OKAY", inputValue);
    setInputValue(e.target.value);
    let myelement = document.getElementById("textBox");

    myelement.innerHTML = inputValue + " please look at console.";
  }

  function getOnesPosition(integerValue, myControl, temporaryText) {
    // console.log("control", myControl);
    // console.log("int", integerValue);
    temporaryText = temporaryText + myControl[integerValue].text;
    return temporaryText;
  }

  function hunthousand(numbers, nancy, temporaryText, j) {
    // console.log("spit", numbers);
    nancy = "";

    function createText() {
      //   console.log("cant find grace");
      if (temporaryText.length > 1) {
        temporaryText = temporaryText + "; ";
      }
      console.log("lil", TensControl.length);
      if (j > 100) {
        for (let q = 0; q < HundredControl.length; q++) {
          //console.log("bibh", q);
          if (j >= 0 && j < 200) {
            //j = j;
            console.log("Im here", j);
          } else {
            //console.log("im there- should i stay", j);
            let tempValue = "";
            if (j >= HundredControl[q].value) {
              if (j % 100 === 0) {
                tempValue = ""; //this should only apply to numbers / 100
              } else {
                if (j % 10 === 0) {
                  tempValue = "*";
                }
                tempValue = "-";
              }
              temporaryText =
                temporaryText + HundredControl[q].text + tempValue;
              j = j - HundredControl[q].value;
              // console.log("temp", temporaryText, j);
            }
          }
        }
      }
      for (let k = 0; k < TensControl.length; k++) {
        //console.log("bib", k);
        if (j >= 0 && j < 20) {
          //j = j;
          console.log("Im here", j);
        } else {
          //  console.log("im there- should i stay", j);
          let tempValue = "";
          // console.log("mod", j % 10, j);
          if (j >= TensControl[k].value) {
            if (j <= 100 && j % 10 === 0) {
              tempValue = "";
            } else {
              // tempValue = "*"
              tempValue = tempValue + "-";
            }
            temporaryText = temporaryText + TensControl[k].text + tempValue;
            j = j - TensControl[k].value;
            // console.log("temp", temporaryText, j);
          }
        }
      }

      console.log("jis ", j);
      /* function getOnesPosition(integerValue, myControl) {
        // console.log("control", myControl);
        // console.log("int", integerValue);
        temporaryText = temporaryText + myControl[integerValue].text;
        return temporaryText;
      } */

      // j is already set
      if (j >= 0) {
        if (j >= 10) {
          numbersTranslated = getOnesPosition(j, TeensControl, temporaryText);
        } else {
          numbersTranslated = getOnesPosition(j, OnesControl, temporaryText);
        }
      }
      // console.log("bob", numbersTranslated);
      return numbersTranslated;
    }
    for (let p = 0; p < numbers.length; p++) {
      j = numbers[p];
      //console.log("here because -", numbers[p]);
      //console.log("we here because -", p);
      //console.log("im see it also as -", j);
      nancy = createText();
      //console.log("nan", nancy);
      setDisplayableText(nancy);
      gatheredText = gatheredText + nancy;
      nancy = "";
      temporaryText = "";
      //console.log("HELLO", gatheredText);
    }
    return gatheredText;
  }

  function calculateNumbers() {
    let j = 0;
    //console.log(OnesControl);
    let temporaryText = "";

    let numbers = [1];
    for (let r = 0; r < 99999; r++) {
      numbers[r] = r;
    }
    // numbers = [1, 10, 999, 1000, 10000, 999999, 1000000, 10000000, 999000000];
    numbers = [1000000];
    let nancy = "";

    let finalDisplayableText = " ";
    for (let c = 0; c < numbers.length; c++) {
      console.log("-----------------cacukalation-----------------------------");
      let sectionMillions = 0;
      let sectionThousands = 0;
      let sectionOnes = 0;

      let amountleft = numbers[c];
      console.warn("starting with :", amountleft, ":");
      let oneMillion = 1000000;
      if (amountleft >= oneMillion) {
        //  console.log("amountleft - sectionMillions * 1000000");
        sectionMillions = Math.floor(numbers[c] / oneMillion);
        //  console.log(amountleft, "-", sectionMillions * oneMillion);
        amountleft = amountleft - sectionMillions * oneMillion;
        //  console.log("leaveing", amountleft);
      }
      let oneThousand = 1000;
      if (amountleft >= oneThousand) {
        // console.log("amountleft / oneThousand");
        sectionThousands = Math.floor(amountleft / oneThousand);
        // console.log(amountleft, "-", sectionThousands * oneThousand);
        amountleft = amountleft - sectionThousands * oneThousand;
        // console.log("leaveing", amountleft);
      }
      sectionOnes = amountleft;

      console.warn("-------verify----------------------------------------");
      console.log(sectionMillions, "* 1000000", "-------millions");
      console.log(sectionThousands, "* 1000", "--------thousands");
      console.log(sectionOnes, "----------- ones");
      console.warn("good to here?");

      console.log("time to translate three peices->:");
      let thisNumber = " ";
      //console.log("say----" + sectionMillions + "millions:  in words");
      //console.log("say----" + sectionThousands + "thousand   in words");
      //console.log("say----" + sectionOnes + "ones in words");
      let trans = "";
      if (sectionMillions > 0) {
        //console.log(sectionMillions + "-million,");
        j = 0;
        trans = hunthousand([sectionMillions], nancy, temporaryText, j);
        thisNumber = thisNumber + trans + "-million, ";
        gatheredText = "";
      }
      if (sectionThousands > 0) {
        j = 0;
        //console.log(sectionThousands + "-thousand,");
        trans = "";
        trans = hunthousand([sectionThousands], nancy, temporaryText, j);

        thisNumber = thisNumber + trans + "-thousand, ";
        gatheredText = "";
      }
      if (sectionOnes > 0) {
        //console.log(sectionOnes);
        j = 0;
        trans = "";
        trans = hunthousand([sectionOnes], nancy, temporaryText, j);
        thisNumber = thisNumber + trans + ".";
        finalDisplayableText = thisNumber;
        gatheredText = "";
      }
      //console.warn("so the final number is: " + thisNumber);
      //console.log("check it to here");
    }
    //console.log("numbersubanything", gatheredText);

    setDisplayableText(displayableText + finalDisplayableText);
    //console.log("bob2", displayableText);
  }

  let display = calculateNumbers();
  useEffect(() => {
    //    setDisplayableText(display);
  }, [redonow]);

  console.log("CalculateNumbers-=-", display);

  return (
    <div className="NumTranslator">
      <div className="userInputContainer">
        Input Number:
        <input
          className="input"
          value={inputValue}
          onChange={inputChangeHandler}
        ></input>
        <Button className="inputBoxButton" onClick={buttonClickHandler}>
          Click To Translate
        </Button>
        <textbox className="textBox" id="textBox">
          "I CAN SEE YOU!!"
        </textbox>
      </div>
      <div>Numbers:</div>
      {displayableText ? <div>{displayableText}</div> : <div></div>}
    </div>
  );
}
