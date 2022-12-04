import "./App.css";
import { useState, useEffect, useRef } from "react";
import PokemonBox from "./components/PokemonBox";
import {pokemon} from './assets/pokemon.js';

function App() {
  const [finalList, setFinalList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  const filterOneBox = useRef();
  const filterTwoBox = useRef();
  const [filterOneText, setFilterOneText] = useState("");
  const [filterTwoText, setFilterTwoText] = useState("");
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checked, setChecked] = useState(false);

  const [weight, setWeight] = useState(0);

  const handleFilterTwoChange = (e) => {
    setFilterTwoText(e.target.value);
  };
  const handleFilterOneChange = (e) => {
    setFilterOneText(e.target.value);
  };
  const handleChange = () => {
    setChecked(!checked);
    if (checkedTwo) {
      setCheckedTwo(false);
    }
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if (checked) {
      setChecked(false);
    }
  };

  // Use Effect for Filtering & Sorting
  useEffect(() => {
    setFinalList([]);

    let smolList = [...pokemon];

    if (checked) {
      smolList.sort((item1, item2) => item1.weight - item2.weight)
    } else if (checkedTwo) {
      smolList.sort((item1, item2) => item2.weight - item1.weight)
    }
  
    if (filterOneText !== "") {
      smolList = smolList.filter((item) => item.types.includes(filterOneText.toLowerCase()))
    }

    if (filterTwoText !== "") {
      smolList = smolList.filter((item) => item.stat === (filterTwoText.toLowerCase()))
    }

    let displayList = smolList
    if (displayList.length > 50) {
      displayList = displayList.slice(0, 50);
    }

    setFinalList(displayList);

  }, [filterOneText, filterTwoText, checked, checkedTwo]);

  // Use Effect for updating weight counter
  useEffect(() => {
    let sum = 0
    for (let i in teamList) {
      sum = sum + (Math.round((teamList[i].weight * 0.220462 * 100))/100)
    }

    setWeight(Math.round(sum * 100)/100);

  }, [teamList])

  return (
    <div className="App">
      <h1>Create Your Pokemon Team</h1>

      <div className="appPane">
      <div className="pokemonPane">
        <h2>Pokemon</h2>
        <br></br>

        <input type="checkbox" className="sort" checked={checked}
          onChange={handleChange}
        /> {"Sort By Weight (Ascending)"} <br></br>

        <input type="checkbox" className="sort" checked={checkedTwo}
          onChange={handleChangeTwo}
        /> {"Sort By Weight (Descending)"} <br></br>

       <input type="text" className="filter" placeholder="Pokemon Type" ref={filterOneBox}
          onChange={handleFilterOneChange}
        /> {"Filter By Type"} <br></br>

       <input type="text" className="filter" placeholder="Pokemon Highest Stat" ref={filterTwoBox}
          onChange={handleFilterTwoChange}
        /> {"Filter By Highest Stat"}

        <br/>
        <button onClick={() => {
          setFilterOneText("");
          setFilterTwoText("");
          filterOneBox.current.value = "";
          filterTwoBox.current.value = "";
        }}>Clear Filters</button>
        
        <div className="pokemonList">
          {finalList.map((item, index) => {
            return <PokemonBox 
                key={item.ival}
                index={item.ival}
                name={item.name} 
                id={item.id}
                imageURL={item.image}
                weight={Math.round((item.weight * 0.220462 * 100))/100}
                types={item.types}
                stat={item.stat}
                inTeam={teamList.includes(finalList[index])}
                teamList={teamList}
                setTeamList={setTeamList}
                finalList={finalList}
                inTeamSlot={false}
                />
          })}
        </div>
      </div>
      <div className="teamPane">
        <h2>Your Team!</h2>
        <h4>{weight} Total lbs!</h4>
        <br/>
        <div class="center">
          <button onClick={() => {setTeamList([])}}>Clear Team</button>
        </div>

        <div className="teamList">
            {teamList.map((item, index) => {
              return <PokemonBox 
                  key={item.ival}
                  index={item.ival} 
                  name={item.name} 
                  id={item.id}
                  imageURL={item.image}
                  weight={Math.round((item.weight * 0.220462 * 100))/100}
                  types={item.types}
                  otherForms={item.otherForms}
                  stat={item.stat}
                  inTeam={true}
                  teamList={teamList}
                  setTeamList={setTeamList}
                  finalList={finalList}
                  inTeamSlot={true}
                  /> 
            })}
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
