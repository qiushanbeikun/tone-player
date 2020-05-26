import React from "react";
import styled from "styled-components";

import testSound from '../soundsource/testsounds/sampleSound.wav'
import fourOne from '../soundsource/piano/410.wav'
import fourOneFive from '../soundsource/piano/415.wav'
import fourTwo from '../soundsource/piano/420.wav'
import fourTwoFive from '../soundsource/piano/425.wav'
import fourThree from '../soundsource/piano/430.wav'
import fourFour from '../soundsource/piano/440.wav'
import fourFourFive from '../soundsource/piano/445.wav'
import fourFive from '../soundsource/piano/450.wav'
import fourFiveFive from '../soundsource/piano/455.wav'
import fourSix from '../soundsource/piano/460.wav'
import fourSixFive from '../soundsource/piano/465.wav'
import fourSeven from '../soundsource/piano/470.wav'

import fiveOne from '../soundsource/piano/510.wav'
import fiveOneFive from '../soundsource/piano/515.wav'
import fiveTwo from '../soundsource/piano/520.wav'
import fiveTwoFive from '../soundsource/piano/525.wav'
import fiveThree from '../soundsource/piano/530.wav'




export function SheetQualityCheck(sheet){
  // todo implement the check function
  return true;
}


const StyledSoundKeys = styled.div`
  
`;



export function KeySwitches(inputTone) {
  let tone = null;

  switch(inputTone) {
    case "4 1":
      tone = fourOne;
      break;
    case "4 2":
      tone = fourTwo;
      break;
    case "4 3":
      tone = fourThree;
      break;
    case "4 4 ":
      tone = fourFour;
      break;
    case "4 5":
      tone = fourFive;
      break;
    case "4 6":
      tone = fourSix;
      break;
    case "4 7":
      tone = fourSeven;
      break;
    case "4 15":
      tone = fourOneFive;
      break;
    case "4 25":
      tone = fourTwoFive;
      break;
    case "4 45":
      tone = fourFourFive;
      break;
    case "4 55":
      tone = fourFiveFive;
      break;
    case "4 65":
      tone = fourSixFive;
      break;

    case "5 1":
      tone = fiveOne;
      break;
    case "5 2":
      tone = fiveTwo;
      break;
    case "5 3":
      tone = fiveThree;
      break;

    case "5 15":
      tone = fiveOneFive;
      break;
    case "5 25":
      tone = fiveTwoFive;
      break;

    default :
      tone = testSound;
      break;
  }
  return tone;
}


/**
 * @return {number}
 */
function PositionTop(inputTone) {
  const first = inputTone.split(" ")[0];
  const second = inputTone.split(" ")[1];
  if (second.length === 1) {
    return (first-4) * 14 * 7 + second * 14;
  } else {
    return Math.floor((first-4) * 14 * 7 + second * 14 / 10);
  }
}



/**
 * @return {number}
 */
function PositionLeft(inputToneTime){
  return inputToneTime * 100;
}

export default function renderEachSound(sound){

  const ToneOnly = sound.sound.tone;

  const toneAfterSwitch = KeySwitches(ToneOnly);
  const top = PositionTop(ToneOnly);
  const left = PositionLeft(sound.sound.time);
  const length = parseFloat(sound.sound.length) * 100;

  const positionStyle = Object.assign({}, {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
    width: `${length}px`,
  });

  if (ToneOnly.length === 3) {
    return (
      <StyledSoundKeys className="soundDisplay" style={positionStyle}
                       onMouseEnter={() => {new Audio(toneAfterSwitch).play().then(r => console.log("r"))}}>
        {ToneOnly}
      </StyledSoundKeys>
    )
  } else {
    return (
      <StyledSoundKeys className="soundSharpDisplay"
                       onMouseEnter={() => {new Audio(toneAfterSwitch).play().then(r => console.log("r"))}}>
        {ToneOnly}
      </StyledSoundKeys>
    )

  }
}

export function renderSheetArrayAndOrder(JSONSheet) {
  let result  = [];
  for (let each of JSONSheet){
    let beforeSort = [parseFloat(each.sound.time), parseFloat(each.sound.length), each.sound.tone];
    result = [...result, beforeSort];
  }
  if (result === []){
    alert("The sheet is empty, please check your sheet");
  }

  result.sort(
    function(a, b) {
      return a[0] < b[0] ? -1 : 1;
    }
  );
  return result;
}