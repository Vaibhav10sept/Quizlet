import React from 'react'
import {  Switch, Route,Link} from 'react-router-dom';
import '../components/home.css'
import RubberBand from 'react-reveal/RubberBand';

function Home() {
    return (
        <div>
            

<div class="flex-container">
  <div class="flex-item-left"> <Link to="/QuizCategories" ><button class="colorful-button">
    <div class="wrapper">
    <RubberBand >
        <span  >Take a quiz</span>
        </RubberBand>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
     
    </div>
    
</button>

</Link>
</div>
  <div class="flex-item-right">            <Link to="/level1"><button class="colorful-button">
    <div class="wrapper">
    <RubberBand >
        <span>Vocabulary Game</span>
        </RubberBand>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
    
</button></Link></div>
</div>



        </div>
    )
}

export default Home
