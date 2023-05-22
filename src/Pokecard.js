import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className="Pokecard-frame">
      <h4 className="Pokecard-title">{name}</h4>
      <img
        className="Pokecard-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon"
      />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience} </p>
    </div>
  );
};

export default Pokecard;
