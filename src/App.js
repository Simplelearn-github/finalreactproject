
import './App.css'

import Navigation from './Components/Navigation';
import Routings from './Components/Routings';
import Top from './Components/Top';


function App() {
  return (
    <div className="App">
      <div><Top/></div>
      <div className='navss'><Navigation/></div>
      <div>
        <Routings/>
   </div>
    </div>
  );
}

export default App;
