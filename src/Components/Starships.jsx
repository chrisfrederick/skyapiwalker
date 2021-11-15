import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'


const Starships = ()=>{
const {id} =useParams()
const [shipData, setShipData] = useState("")

useEffect(()=>{
    Axios.get(`https://swapi.dev/api/starships/${id}/`)
    .then(response=>{setShipData(response.data)})
    .then(console.log(shipData))
    .catch(error=>{console.log(error)})
},[id])




return(
    <div>
        {
            <table>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Cost In Credits</th>
                    <th>Crew</th>
                </tr>
                <tr>
                    <td>{shipData.name}</td>
                    <td>{shipData.model}</td>
                    <td>{shipData.cost_in_credits}</td>
                    <td>{shipData.crew}</td>
                </tr>
            </table> 
        }
    </div>
)
}

export default Starships