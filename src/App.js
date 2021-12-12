import React from 'react';
import Home from './Home';
import Services from './Services';
import Price from './Price'
import Contact from './Contact';
import Hire from './Hire';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Cv from './Cv';
import Projects from './Projects';




const App = () => {
  return (
    <>
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/price' component={Price}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/hire' component={Hire}/>
      <Route path='/cv' component={Cv}/>
      <Route path='/projects' component={Projects}/>

      
    </Switch>
 
      
    </>
  )
}

export default App;

