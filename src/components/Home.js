import React from 'react'
import {  Switch, Route,Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>quiz app</h1>
            <Link to="/QuizCategories" >quiz app</Link><br/>
            <Link to="/level1">vocabulary game</Link>

        </div>
    )
}

export default Home
