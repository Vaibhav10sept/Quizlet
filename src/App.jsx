import QuizCategories from "./components/QuizCategories";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Level1 from "./views/Level1";
import Level2 from "./views/Level2";
import Home from "./components/Home";

const App = () => {
  
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/level1" component={Level1} />
    <Route exact path="/" component={Home} />
    <Route exact path="/QuizCategories" component={QuizCategories} />
    <Route exact path="/level2" component={Level2} />
  </Switch>
</BrowserRouter>
  )
};

export default App;
