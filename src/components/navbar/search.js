import React, {useState} from 'react';
import {useHistory} from "react-router";

export function Search(){

    const [state,setState] =useState();
    const history = useHistory();
    // useHistory().push
    const submitHandler= (e) =>{
        e.target.reset();
        e.preventDefault();
        var path= "/?q=" +state;
        // console.log(path)
        history.push(path);
    }

    return <form onSubmit={submitHandler} className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
               onChange={(e)=> setState(e.target.value)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

}