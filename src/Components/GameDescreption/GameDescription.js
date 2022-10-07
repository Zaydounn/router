import React  from 'react'
import{useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const GameDescription = ({games,match}) => {
    
  
 const myFilm = games.find(games=> games.id === Number(match.params.id ) )

let history=useHistory();
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop:'50px',
                     borderRadius:'40px' ,boxShadow:' 0px 0px 120px -25px rgba(0,0,0, 0.5)',padding:'20px',textAlign:'center',
                     background:' linear-gradient(to top, #e5e6e6 50%, transparent 100%) '}}>
            <div>
                <h1>{myFilm.name}</h1>
                <p style={{width:'500px', fontSize:'20px'}}> {myFilm.description}</p>
                <Button variant="secondary"
                        style={{marginTop:'20px'}}  onClick={()=> history.push('/')}>
                Movies List!
                </Button>
            </div>

            <div >{myFilm.bande_annonce}</div>

   
        </div>
    )
}
export default GameDescription