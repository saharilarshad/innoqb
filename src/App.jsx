
import './App.css';
import Navbar from './components/Navbar';
import SliderSlick from './components/SliderSlick';
// import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="slider"> */}
      {/* <Slider /> */}
      <SliderSlick />
      {/* </div> */}
    </div>
  );
}

export default App;
