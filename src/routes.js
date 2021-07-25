import React from "react";
import  { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cadastro from "./Cadastro";
import NovosItems from "./NovosItems";
import Home from "./Home";

export default function  Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/Cadastro' component = {Cadastro}/>
                <Route path = '/NovosItems' component = {NovosItems}/>
                <Route exact path = '/' component = {Home}/>
            </Switch>

        </BrowserRouter>
    );
}

