import React , {useState} from "react"
import './App.css';
import {GamesData} from './GamesData'
import GamesList from './Components/GamesList/GamesList'
import Header from './Components/Header/Header'
import GameDescription from "./Components/GameDescreption/GameDescription";
import { Route,Switch } from "react-router-dom";




function App() {
  const [games, setGames] = useState(GamesData)
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewGame = (x) => {
    setGames([...games, x]);
  };
  return (
    <div className="App">
      
      <Switch>
      <Route exact path='/'>
        <Header 
            setSearchName={setSearchName}
            setSearchRate={setSearchRate}
            searchRate={searchRate}/>
        <GamesList
            games={
               (searchName || searchRate)? GamesData.filter((el) => el.name.toLowerCase().includes(searchName.toLowerCase().trim())  && el.rating >= searchRate ): games
                   }   
            AddNewGame={AddNewGame}/>
         </Route>   
      <Route  path='/Games/:id'  render={(props)=> <GameDescription {...props} games={games} />}  />
   </Switch>
   
  
    </div>
  );
}

export default App;
