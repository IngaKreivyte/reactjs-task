
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Firstpage from './Pages/first/Firstpage';
import SecondPage from './Pages/second/secondPage';
import Example from './Pages/Ex';
import Nav from './Components/Nav/Nav.js';


class App extends Component {
  
  render(props) {
    return (
      <div>
        <BrowserRouter>
        <Nav/>
          <Switch>
           <Route path='/firstpage'  component={Firstpage}/>
           <Route path='/secondpage'  component={SecondPage}/>
           <Route path='/examplepage'  component={Example}/>
          </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;

