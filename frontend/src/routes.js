import{ BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';



import Home from './pages/Home';
import Corrosao from './pages/Corrosao';
import Fratura from './pages/Fratura';
import Contribua from './pages/Contribua';



export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Corrosao" component={Corrosao}/>
            <Route path="/Fratura" component={Fratura}/>
            <Route path="/Contribua" component={Contribua}/>
           


        </Switch>
        </BrowserRouter>
    );
}