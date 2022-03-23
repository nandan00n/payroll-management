import LoginandRegister from "./component/lrc/LoginandRegister";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from './component/homepage/home/Home';
import Forgetpassword from './component/forgottenpassword/Forgetpassword'; 
import Analytics from './component/homepage/analytics/Analytics'
import './App.css'

function App() {
  return (
    <>
  
      <Router>
        <Link to='navbar'></Link>
        {/* <Link to='/'> Home </Link> */}
        
        <Switch>

        <Route exact path='/' component={Home} />
          <Route exact path='/loginandregister' component={LoginandRegister} />
          <Route exact path='/forgetpassword' component={Forgetpassword} />
          <Route exact path='/analytics' component={Analytics}/>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
