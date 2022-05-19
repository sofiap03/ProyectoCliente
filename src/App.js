import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import miroutes from "./config/routes";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {miroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}


    /*
    <React.Fragment>
    <Admin></Admin>
    <SignIn></SignIn>
    <Home></Home>
    <Contact></Contact>
    </React.Fragment> 
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contact">Contact</Link>
      <br/>
      <Link to="/users">Users</Link>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Contact/>}/>
        <Route path="/" element={<Users/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter> */

//Creación de componentes
/*
function NotFound(){
  return <h2>Not found</h2>
}

function Home(){
  return <h2>Component Home works</h2>
}

function Contact(){
  return <h2>Component Contact works</h2>
}

function Users(){
  return <h2>Component Users works</h2>
}*/

