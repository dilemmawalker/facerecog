import Navigation from './Navigation'
import './App.css';
import 'tachyons';
import Logo from './Logo';
import Imagelinkform from './Imagelinkform';
import Facerecognition from './Facerecognition';
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      <Signin/>
       <Imagelinkform/>
       {/* <Facerecognition/> */}
    </div>
  );
}

export default App;
