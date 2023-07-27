import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gif from './assets/animation_Contrast_prxs1mue.gif'

function App() {
  return (
    <div className="d-flex h-100 text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center">
        <main className="px-3 ">
          <h1>
            <img src={Gif} alt="livhtec solutions" />
          </h1>
          <p className='lead fst-italic comming-soon-text'>Coming Soon...</p>
        </main>
      </div>
    </div>
  );
}

export default App;
