import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import testSound from './sheets/test';

function handleJSONChange(){
  console.log("test");
}

function App() {
  return (
    <div className="App">
      <Container  maxWidth={false}>
        <h1>test title</h1>
        <Grid container>



          <Grid item sm={6}>
            <div class="outline">
            <h3>JSON Editor</h3>
            </div>
          </Grid>

          <Grid item sm={6}>
            <div className="outline">
            <h3>Graphic Editor</h3>
            </div>
          </Grid>


        </Grid>
      </Container>

    </div>
  );
}

export default App;
