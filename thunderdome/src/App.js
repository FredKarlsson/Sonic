import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='App-nav'>
          <div className='logo'>Fēixiáng Lóng Quān</div>
          <div className='menu'>
            <a href='#explore'>Explore</a>
            <a href='#learn'>Learn</a>
            <a href='#individuals'>Grow</a>
            <a href='#businesses'>G, to the M.</a>
            <a href='#company'>The Forbidden Forest</a>
          </div>
        </nav>
        <div className='main-content'>
          <div className='text-content'>
            <h1>Grow Your Reach on X</h1>
            <p>
              In today's interconnected world, the strength of a community lies
              in the bonds its members form. As users within a network connect,
              share, and collaborate, the entire community benefits. Each new
              connection creates a ripple effect, extending the reach of
              individual members and enhancing the collective influence of the
              group.
            </p>
          </div>
          <div className='image-content'>
            <img src='analyticsX.png' alt='Phone Screenshots' />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
