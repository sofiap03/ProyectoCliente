import './App.scss';
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/signIn";
import Home from "./pages/home";
import Contact from './pages/contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import error404 from "./pages/error404";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        {routes.map((route, index, error404) => (
          <Route
            key={index}
            path={route.path}
            component={error404}
            element={
              <route.layout>
                <route.component>
                <h1>Error 404</h1>
                <p>Not Found</p>
                </route.component>
                <h2>Child component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
    </div>
  );

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
  
}

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

export default App;
