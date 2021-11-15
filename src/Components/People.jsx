import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'


const People = ()=>{
const {id} =useParams()
const [personData, setPersonData] = useState("")

useEffect(()=>{
    Axios.get(`https://swapi.dev/api/people/${id}/`)
    .then(response=>{setPersonData(response.data)})
    .then(console.log(personData))
    .catch(error=>{console.log(error)})
},[id])




return(
    <div>
        {
            <table border="10" style="background-color: red; border-color:white">
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth Year</th>
                    <th>Mass</th>
                </tr>
                <tr>
                    <td>{personData.name}</td>
                    <td>{personData.gender}</td>
                    <td>{personData.birth_year}</td>
                    <td>{personData.mass}</td>
                </tr>
            </table> 
        }
    </div>
)
}

export default People