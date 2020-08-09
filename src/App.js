import React, { Component } from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Header from './component/header'
import Home from './component/home';
import Detailproduct from './component/detailproduct';
import Product from './component/product';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
         <Header/>
        <Switch>
          <Route exact path={'/'} > <Home/> </Route>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/detailproduct' component={Detailproduct}/>
        </Switch>
      </div>
    );
  }
}
 
export default App;
