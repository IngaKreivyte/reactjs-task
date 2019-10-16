
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Firstpage from './Pages/first/Firstpage';
import SecondPage from './Pages/second/secondPage';
import Nav from './Components/Nav/Nav.js';
import Task from './Pages/Task/Task';


class App extends Component {
  
  render(props) {
    return (
      <div>
        <BrowserRouter>
        <Nav/>
          <Switch>
          <Route path='/'  exact component={Task}/>
           <Route path='/firstpage'  component={Firstpage}/>
           <Route path='/secondpage'  component={SecondPage}/>
          </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;


