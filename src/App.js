
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Firstpage from './Pages/first/Firstpage';
import Nav from './Components/Nav/Nav.js';


class App extends Component {
  
  render(props) {
    return (
      <div>
        <BrowserRouter>
        <Nav/>
          <Switch>
           <Route path='/firstpage'  component={Firstpage}/>
          </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;


