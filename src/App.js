import logo from './logo.svg';
import './App.css';
import './style.css'
import mageInSrc from "./mageInSrc.jpg"
import myvideo from "./React.mp4"

function App() {
  return (
    <div className="App">
        <div>
          <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
            <h1 className="title_red">ABidi Wael</h1>
            <br />
            <img src={mageInSrc} alt="hhh" />
            <br />
            <img src="/mageInPublic.jpg" />
          </div>
          <video width={320} height={240} controls>
            <source src={myvideo} type="video/mp4" />
          </video>
      </div>
    </div>
  );
}

export default App;
