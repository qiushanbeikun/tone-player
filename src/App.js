import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import testSheet from './sheets/testSheet';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import {StyledButton} from "./components/commonStyles";
import testSound from './soundsource/testsounds/sampleSound.wav'

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
                placeholder = { testSheet }
                colors={{
                  string: "#DAA520",
                  background: "#000000"
                }}
                locale      = { locale }
                height      = '96%'
                width       = '46wd'
              />
            </div>
          </Grid>

          <Grid item sm={6}>
            <div className="outline">
              <h3>Graphic Editor</h3>
              <div class='keys' period='1'>
                <div class="key" tone="1" tome-note="C">C</div>
                <div class="key" tone="2" tome-note="D">D</div>
                <div class="key" tone="3" tome-note="E">E</div>
                <div class="key" tone="4" tome-note="F">F</div>
                <div class="key" tone="5" tome-note="G">G</div>
                <div class="key" tone="6" tome-note="A">A</div>
                <div class="key" tone="7" tome-note="B">B</div>
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
              <div className='keys' period='3'>
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
              <div className='keys' period='4'>
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
              <div className='keys' period='5'>
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
            </div>
          </Grid>

          <Grid item sm={6}>
            <StyledButton>Save(Beta)</StyledButton>
          </Grid>

          <Grid item sm={6}>
            <StyledButton>Play(Beta)</StyledButton>
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}

export default App;
