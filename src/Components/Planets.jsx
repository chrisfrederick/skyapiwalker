import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'


const Planets = ()=>{
const {id} =useParams()
const [planetData, setPlanetData] = useState("")

useEffect(()=>{
    Axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(response=>{setPlanetData(response.data)})
    .then(console.log(planetData))
    .catch(error=>{console.log(error)})
},[id])




return(
    <div>
        {
            <table>
                <tr>
                    <th>Name</th>
                    <th>Rotation Period</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                </tr>
                <tr>
                    <td>{planetData.name}</td>
                    <td>{planetData.rotation_period}</td>
                    <td>{planetData.climate}</td>
                    <td>{planetData.terrain}</td>
                </tr>
            </table> 
        }
    </div>
)
}

export default Planets