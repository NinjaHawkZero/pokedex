import React from "react";
import Pokecard from "./Pokecard.js"
const Pokedex = ({pokemon}) => {

    return (
        <div>{pokemon.map(mon => (
            <Pokecard key={mon.id} name={mon.name} img={mon.img} type={mon.type} base_experience={mon.base_experience} />
          ))} </div>
    )
}


export default Pokedex;