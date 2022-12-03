import React from 'react';
import {pokemon} from '../assets/pokemon.js';

function PokemonBox(props) {

  let id = props.id;
  let name = props.name;
  let imageURL = props.imageURL;
  let weight = props.weight;
  let types = props.types;
  let stat = props.stat

  function addToTeam(index) {
    let val = pokemon[index];
    props.setTeamList([...props.teamList, val])
  }

  function removeFromTeam(index) {
    props.setTeamList(props.teamList.filter((item) => item !== pokemon[index]))
  }

  let pokemonClass = "pokemon"
  if (props.inTeam) {
    pokemonClass = pokemonClass + " inTeam"
  }

  return <div className={pokemonClass}>

      {props.inTeamSlot ? 
      
    <div>
    <div><span className="name">{name}</span> <span className="id">#{id} {types.map((item, index) => <span key={index} id="type" className="type">{item } </span>)}</span></div>
        <img src={imageURL} className="imgInTeam" alt={"Image Of " + name}></img>
        <div>
        <span>Weight: {weight} lbs </span>
        <br/>
        <span>Highest Stat: <span style={{"fontSize": "10px"}}> {stat}</span></span>
        </div>
        </div>

      : 
      <div>
      <div><span className="name">{name}</span> <span className="id">#{id}</span></div>
          <img src={imageURL} alt={"Image Of " + name}></img>
          <h4>Types: {types.map((item, index) => <span key={index} id="type" className="type">{item } </span>)}</h4>
          <div>
          <span>Weight: {weight} lbs</span>
          <br></br>
          <span>Highest Stat: {stat}</span>
          </div>
          </div>
      }

      <br/>
    {props.inTeam ? 
    <button onClick={() => {removeFromTeam(props.index)}}>Remove From Team</button> 
    : 
    <button onClick={() => {addToTeam(props.index)}}>Add To Team</button>}
  
  </div>;
}

export default PokemonBox;