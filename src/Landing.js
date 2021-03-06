import React, { Suspense } from 'react';
import "./landing.css";
import { CubeGrid } from 'styled-loaders-react'
import {  Switch, Route,Link} from 'react-router-dom';
import QuizCategories from "./components/QuizCategories";
import { BrowserRouter } from 'react-router-dom';
import Level1 from "./views/Level1";
import Level2 from "./views/Level2";
import Home from "./components/Home";
import Heading from "./components/Heading";


function Landing({ handleLogout }) {
  const [show, setshow] = React.useState(false)
  React.useEffect(() => {
  if(window.location.pathname === '/'){
    setshow(true)
    console.log("working")
  } 
  }, [])
  return (
    <div className="hero">
    
        <nav>
        <h2>Welcome</h2>
      {show ?<Heading/>:null}
        

        <div>
        <button style={{cursor:"pointer"}} onClick={handleLogout} className="neon">
        {" "}
        <span style={{cursor:"pointer"}} onClick={handleLogout}>logout</span>
      </button>
        </div>
 
        </nav>
        <BrowserRouter>
  <Switch>
    <Route exact path="/level1" component={Level1} />
    <Route exact path="/" component={Home} />
    <Route exact path="/QuizCategories" component={QuizCategories} />
    <Route exact path="/level2" component={Level2} />
  </Switch>
</BrowserRouter>
        
        <br/>	
		
			

			</div>
	

  );
}

export default Landing;
