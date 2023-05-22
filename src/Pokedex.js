import "./Pokedex.css";
import Pokecard from "./Pokecard";
import pokemon from "./data";

const Pokedex = ({ pokemon_list = pokemon }) => {
  return (
    <div className="Pokedex-container">
      {pokemon_list.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
