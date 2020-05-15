import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import testSheetJSON from './sheets/testSheetJSON'
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import {StyledButton} from "./components/commonStyles";
import renderEachSound, {SheetQualityCheck} from "./components/renderSheets"


import testSound from './soundsource/testsounds/sampleSound.wav'
import fourOne from './soundsource/piano/410.wav'
import fourOneFive from './soundsource/piano/415.wav'
import fourTwo from './soundsource/piano/420.wav'
import fourTwoFive from './soundsource/piano/425.wav'
import fourThree from './soundsource/piano/430.wav'
import fourFour from './soundsource/piano/440.wav'
import fourFourFive from './soundsource/piano/445.wav'
import fourFive from './soundsource/piano/450.wav'
import fourFiveFive from './soundsource/piano/455.wav'
import fourSix from './soundsource/piano/460.wav'
import fourSixFive from './soundsource/piano/465.wav'
import fourSeven from './soundsource/piano/470.wav'

import fiveOne from './soundsource/piano/510.wav'
import fiveOneFive from './soundsource/piano/515.wav'
import fiveTwo from './soundsource/piano/520.wav'
import fiveTwoFive from './soundsource/piano/525.wav'
import fiveThree from './soundsource/piano/530.wav'




function handleSaveClick(event) {
  event.preventDefault();
  console.log("clicked");
}

const sheets = testSheetJSON.sheets;

function renderSheet(sheetToRender){
  if (SheetQualityCheck(sheetToRender)){
    return (
      <div className="sheetArea">
        {sheets.map((eachTone, i)=> (
          renderEachSound(eachTone)
        ))}
      </div>
    )
  } else {
    return (
      <h3>
        The sheet cannot be rendered, please check JSON
      </h3>
    )
  }
}



const StarterSheet = testSheetJSON;


function App() {
  return (
    <div className="App">
      <Container  maxWidth={false}>
        <h1>Mini Tone Player</h1>
        <Grid container>
          <Grid item sm={6}>
            <div class="outline">
            <h3>JSON Editor</h3>
              <JSONInput
                id          = 'a_unique_id'
                placeholder = { StarterSheet }
                colors={{
                  string: "#DAA520",
                  background: "#000000"
                }}
                locale      = { locale }
                height      = '90%'
                width       = '46wd'
              />
            </div>
          </Grid>

          <Grid item sm={6}>

            <div className="outlineRight">

              <h3>Graphic Editor</h3>

              <Grid container>
                <Grid item sm={1}>
                  <div className='keys' period='4'>
                    <div className="key" tone="1" tome-note="C"
                         onMouseEnter={() => {
                           new Audio(fourOne).play().then(r => console.log("r"))
                         }}>C
                    </div>
                    <div className="key" tone="2" tome-note="D"
                         onMouseEnter={() => {
                           new Audio(fourTwo).play().then(r => console.log("r"))
                         }}>D
                    </div>
                    <div className="key" tone="3" tome-note="E"
                         onMouseEnter={() => {
                           new Audio(fourThree).play().then(r => console.log("r"))
                         }}>E
                    </div>
                    <div className="key" tone="4" tome-note="F"
                         onMouseEnter={() => {
                           new Audio(fourFour).play().then(r => console.log("r"))
                         }}>F
                    </div>
                    <div className="key" tone="5" tome-note="G"
                         onMouseEnter={() => {
                           new Audio(fourFive).play().then(r => console.log("r"))
                         }}>G
                    </div>
                    <div className="key" tone="6" tome-note="A"
                         onMouseEnter={() => {
                           new Audio(fourSix).play().then(r => console.log("r"))
                         }}>A
                    </div>
                    <div className="key" tone="7" tome-note="B"
                         onMouseEnter={() => {
                           new Audio(fourSeven).play().then(r => console.log("r"))
                         }}>B
                    </div>
                    <div className="key-sharp" tone="15" tome-note="CS"
                         onMouseEnter={() => {
                           new Audio(fourOneFive).play().then(r => console.log("r"))
                         }}>C#
                    </div>
                    <div className="key-sharp" tone="25" tome-note="DS"
                         onMouseEnter={() => {
                           new Audio(fourTwoFive).play().then(r => console.log("r"))
                         }}>D#
                    </div>
                    <div className="key-sharp" tone="45" tome-note="FS"
                         onMouseEnter={() => {
                           new Audio(fourFourFive).play().then(r => console.log("r"))
                         }}>F#
                    </div>
                    <div className="key-sharp" tone="55" tome-note="GS"
                         onMouseEnter={() => {
                           new Audio(fourFiveFive).play().then(r => console.log("r"))
                         }}>G#
                    </div>
                    <div className="key-sharp" tone="65" tome-note="AS"
                         onMouseEnter={() => {
                           new Audio(fourSixFive).play().then(r => console.log("r"))
                         }}>A#
                    </div>
                  </div>

                  <div className='keys' period='5'>
                    <div className="key" tone="1" tome-note="C"
                         onMouseEnter={() => {
                           new Audio(fiveOne).play().then(r => console.log("r"))
                         }}>C
                    </div>
                    <div className="key" tone="2" tome-note="D"
                         onMouseEnter={() => {
                           new Audio(fiveTwo).play().then(r => console.log("r"))
                         }}>D
                    </div>
                    <div className="key" tone="3" tome-note="E"
                         onMouseEnter={() => {
                           new Audio(fiveThree).play().then(r => console.log("r"))
                         }}>E
                    </div>
                    <div className="key" tone="4" tome-note="F"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>F
                    </div>
                    <div className="key" tone="5" tome-note="G"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>G
                    </div>
                    <div className="key" tone="6" tome-note="A"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>A
                    </div>
                    <div className="key" tone="7" tome-note="B"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>B
                    </div>
                    <div className="key-sharp" tone="15" tome-note="CS"
                         onMouseEnter={() => {
                           new Audio(fiveOneFive).play().then(r => console.log("r"))
                         }}>C#
                    </div>
                    <div className="key-sharp" tone="25" tome-note="DS"
                         onMouseEnter={() => {
                           new Audio(fiveTwoFive).play().then(r => console.log("r"))
                         }}>D#
                    </div>
                    <div className="key-sharp" tone="45" tome-note="FS"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>F#
                    </div>
                    <div className="key-sharp" tone="55" tome-note="GS"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>G#
                    </div>
                    <div className="key-sharp" tone="65" tome-note="AS"
                         onMouseEnter={() => {
                           new Audio(testSound).play().then(r => console.log("r"))
                         }}>A#
                    </div>
                  </div>


                  <div className='keys' period='6'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                  <div className='keys' period='7'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                  <div className='keys' period='1'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                  <div className='keys' period='2'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                  <div className='keys' period='1'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                  <div className='keys' period='2'>
                    <div className="key" tone="1" tome-note="C">C</div>
                    <div className="key" tone="2" tome-note="D">D</div>
                    <div className="key" tone="3" tome-note="E">E</div>
                    <div className="key" tone="4" tome-note="F">F</div>
                    <div className="key" tone="5" tome-note="G">G</div>
                    <div className="key" tone="6" tome-note="A">A</div>
                    <div className="key" tone="7" tome-note="B">B</div>
                    <div className="key-sharp" tone="15" tome-note="C">C#</div>
                    <div className="key-sharp" tone="25" tome-note="C">D#</div>
                    <div className="key-sharp" tone="45" tome-note="C">F#</div>
                    <div className="key-sharp" tone="55" tome-note="C">G#</div>
                    <div className="key-sharp" tone="65" tome-note="C">A#</div>
                  </div>
                </Grid>

                <Grid item sm={11}>
                  {
                    renderSheet(sheets)
                  }
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item sm={6}>
            <StyledButton onClick={handleSaveClick}>Save(Beta)</StyledButton>
          </Grid>

          <Grid item sm={6}>
            <StyledButton >Play(Beta)</StyledButton>
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}

export default App;
