import './App.css';
import Login from './Login';
import { NewsContextProvider } from "./NewsContext";
import { TechContextProvider } from './TechContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Dashboard from './Dashboard';
import Register from './Register';
import { useState } from 'react';
import Book from './Book';
import Tech from "./Tech";
import News from "./News";
import Footer from './Footer';

function App() {
  const [user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
          {
              user && user._id ? <Dashboard setLoginUser={setLoginUser} />:<Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <div className="app">
        <Route path="/login">
         
   
          <Login setLoginUser={setLoginUser}/>
        
          </Route>
          
          <Route path="/card-books">
          
         <Book/>
          </Route>
          <Route path="/card-tech">
          <TechContextProvider>
           <Tech/>
           </TechContextProvider>
          </Route>
     
          <Route path="/card-news">
       <NewsContextProvider>
          <News/>
          </NewsContextProvider>
          </Route>
        
        <Route path="/register">
          <Register/>
         
          </Route>
          </div>

        </Switch>
      </Router>
  
    

  
  
    </div>
  );
}

export default App;
