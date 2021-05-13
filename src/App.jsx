import React from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <>
      <Header title="Pokedex of Fire and Dark Pokemon" />

      <main>
        <section className="container">
          <div className="type1">
            <img src="https://giantbomb1.cbsistatic.com/uploads/scale_small/16/164924/3083931-8746743194-flat%2C.jpg" alt="student" height="500px" width="500px" />

            <h1>Fire Types</h1>
          </div>
          <div className="description">
            <p>This app teaches you about Psychic, Water, Fire, and Dark type Pokemon. It is also for entertainment purposes for those who are bored and just want to read about them.</p>
          </div>
          <div className="type2">
            <img src="https://images.saymedia-content.com/.image/t_share/MTc0NDU3ODYxNzg1Nzg5ODAw/best-attacks-in-pokemon-go.png" height="500px" width="500px" />

            <h1>Dark Types</h1>
          </div>
        </section>


      </main>
    </>
  );

}

export default App;