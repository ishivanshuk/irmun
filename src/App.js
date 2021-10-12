import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import About from './components/pages/About';
import Committee from './components/pages/Committee';
import Faq from './components/pages/Faq';

import Footer from './components/Footer';
import Experiences from './components/pages/Experiences';

function App() {
  return (
    <div>
      <Router>
        < Navbar />
       
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/committee' component={Committee} />
          <Route path='/faq' component={Faq} />
          <Route path='/experiences' component={Experiences} />

          <About/>
          
         
          
      </Switch>
      
          <Footer/>

    
      </Router>  
    </div>
  );
}

export default App;
