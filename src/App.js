
import Home from './Home';
/* import DisplaySection from './components/DisplaySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/FormPage/Add';
import Edit from './components/FormPage/Edit';


function App() {
  return (
    <div>
   <Router>
   <Routes>
     
    <Route  path='/' element= {<Home />}/>
    <Route  path='/add' element= {<Add />}/>
    <Route  path='/edit' element= {<Edit />}/>

   </Routes>
   </Router>

      {/* <Header />
      <HeroSection />
      <br /> <br />
      <DisplaySection /> */}
    </div>
  );
}

export default App;
