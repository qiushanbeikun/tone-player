import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import testSheet from './sheets/testSheet';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import {StyledButton} from "./components/commonStyles";

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
