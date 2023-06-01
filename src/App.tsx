import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto"></header>

        <main className="px-3">
          <h1>livhtec</h1>
          <p className='lead fst-italic'>Coming Soon...</p>
        </main>

        <footer className="mt-auto text-white-50">
          {
            /**
             * <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
             */
          }
        </footer>
      </div>
    </div>
  );
}

export default App;
