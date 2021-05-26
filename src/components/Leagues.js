import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../style/Leagues.css';
import SingleLeagues from './SingleLeagues';
import SyncLoader from "react-spinners/ClipLoader";



const Leagues = () => {
    const [leaguesData, setLeaguesData] =useState([])
    const [loading, setLoading] = useState(true);
    // console.log(leaguesData)

    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res=> res.json())
        .then(data => {
            setLeaguesData(data.countrys)
            setLoading(false);
        })
    },[])

    return (
        <div className='Leagues'>
            <Header/>
            
            <div className=" d-flex singleLeagues ">
            
                    { loading  ? <div className="loadingSpiner"><SyncLoader  color='#fff'  loading size={150} /></div>
                                :leaguesData.map( leagues => <SingleLeagues key={leagues.idLeague} leagues={leagues}/>)
                    }
                    
            </div>
        </div>
    );
};

export default Leagues;