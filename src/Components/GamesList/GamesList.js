import React from 'react'
import GamesCard from '../GamesCard/GamesCard'
import '../GamesCard/GamesCard.css'
import AddGames from '../AddGames/AddGames'
import AddGames from '../AddGames/AddGames'

const GamesList = ({Games, AddNewGame}) => {
    return (
        <div className="map">
           {Games.map((el, i) => ( <GamesCard el={el} key={i} /> ))}
           <AddGames AddNewGame={} ={AddNewGame} />  
        </div>
    )
}

export default GamesList
