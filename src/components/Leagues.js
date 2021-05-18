import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../style/Leagues.css';
import SingleLeagues from './SingleLeagues';
import SyncLoader from "react-spinners/ClipLoader";



const Leagues = () => {
    const [leaguesData, setLeaguesData] =useState([])
    // console.log(leaguesData)

    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res=> res.json())
        .then(data => setLeaguesData(data.countrys))
    },[])

    return (
        <div className='Leagues'>
            <Header/>
            
            <div className=" d-flex singleLeagues ">
                    {
                        leaguesData.map( leagues => <SingleLeagues key={leagues.idLeague} leagues={leagues}/>)
                    }
                    <SyncLoader  color='#fff'  loading size={150} />
            </div>
        </div>
    );
};

export default Leagues;