
import './App.css';

function App() {
  return (
    <div className="App">
       {/* <!-- loader --> */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" />
        </svg>
      </div>

    </div>
  );
}

export default App;
