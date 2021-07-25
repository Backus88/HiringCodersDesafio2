import React from "react";
import Routes from "./routes";
import {useHistory } from "react-router-dom";
import './style.css' ;
  

function App(props) {
  return (
    <section className = 'home' >
        <h2 className ="titulo" >Página de Cadastro de Items e Pessoas.</h2>
        <div className = "homePage">
             <button onClick={() => props.history.push("/Cadastro")}>Cadastro</button>
             <button onClick={() => props.history.push("/NovosItems")}>NovosItems</button>
         </div>
    </section>
  );
}

export default App;
