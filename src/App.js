import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Darktheme from './components/Darktheme';
// import Likes from './components/Likes';
import Main from './pages/Main';

//food pages
import Jollof from './components/Jollof';
import Cakes from './components/Cakes';
import Pasta from './components/Pasta';
import About from './components/About';

function App() {

  return (
 <div>
     <BrowserRouter>	
          <Switch>
          
   
   <Route exact path='/Main'>
            <Main />
            </Route>

            <Route exact path='/Jollof'>
            <Jollof />
            </Route>

            <Route exact path='/Cakes'>
            <Cakes />
            </Route>
            
            <Route exact path='/Pasta'>
            <Pasta />
            </Route>

            <Route exact path='/About'>
            <About />
            </Route>

          </Switch>        
      </BrowserRouter>
 </div>
    
  );
}

export default App;
