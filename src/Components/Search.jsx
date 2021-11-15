import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";



const Search = () => {
    const [state, setState] = useState();
    const [id, setId] = useState();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
        history.push(`/${state}/${id}`) 
    }

    return(        
            <form onSubmit={ handleSubmit }>
                <label> Search Star Wars for: </label>
                <select type="button" name="resource" id="resource" onChange={(e) => {setState(e.target.value);console.log(state)}}>
                    <option value="" selected disabled hidden>Select Resource</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <div>
                    <label>ID</label>
                    <input type="number" onChange={(e)=> setId(e.target.value)}/>
                </div>
                <input type="submit" value="search"/>
            </form>
    )
}

export default Search