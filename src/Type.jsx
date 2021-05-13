import React, { useState, useEffect } from "react"
import Header from './components/Header'
import "./Type.css"

function Type() {
  const [type, setType] = useState("fire")
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => setTypes(data.pokemon))
  }, [type])

  return (
    <>
      <Header title={`${type.toUpperCase()} Type`} />

      <main>


        <button onClick={() => setType("psychic")}>Psychic</button>
        <button onClick={() => setType("water")}>Water</button>
        <button onClick={() => setType("fire")}>Fire</button>
        <button onClick={() => setType("dark")}>Dark</button>

        <section className="container2">
          {types.map(({ pokemon }) => (
            <button className="pokemon1">
              {pokemon.name}
            </button>
          ))}

        </section>






      </main>

    </>
  );
}

export default Type