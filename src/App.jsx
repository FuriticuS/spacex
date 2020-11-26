import React from 'react';
import Main from "./Components/Main/Main";
import {Route, Switch} from "react-router";
import OtherPages from "./Components/OtherPages/OtherPages";

import './App.css';

function App() {
  return (
    <div className="spacex">
        <Switch>
            <Route path='/' exact render={()=> <Main />}/>
            <Route path='/technology' render={()=> <OtherPages text='Технология'/>}/>
            <Route path='/flightschedule' render={()=> <OtherPages text='График полетов'/>}/>
            <Route path='/guarantee' render={()=> <OtherPages text='Гарантии'/>}/>
            <Route path='/company' render={()=> <OtherPages text='О компании'/>}/>
            <Route path='/contacts' render={()=> <OtherPages text='Конакты'/>}/>
        </Switch>
    </div>
  );
}

export default App;
