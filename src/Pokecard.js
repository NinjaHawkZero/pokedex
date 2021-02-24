
const POKE_API = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';


const Pokecard = ({pokemon, id, name, type, base_experience, img}) => {
    let imgSrc = `${POKE_API}${id}.png`;
  return ( <div>
        <h4>{name}</h4>
          <img src={imgSrc} />
          <ul>
            <li>Type:{type}</li>
            <li>Exp:{base_experience}</li>
         
          </ul>
    </div>)
}

export default Pokecard;

    