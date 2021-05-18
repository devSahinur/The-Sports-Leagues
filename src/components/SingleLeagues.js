import React from 'react';
import '../style/SingleLeagues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleLeagues = ({leagues}) => {
    // console.log(leagues.idLeague)
    const handleExplore = () =>{
        
    }
    return (
        <>
            <div className="card">
                <img src={leagues.strBadge} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{leagues.strLeague}</h5>
                    <p className="card-text">Sports type: Football</p>
                    <Link to={'/leagues/'+leagues.idLeague} onClick={() => handleExplore(leagues.idTeam)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
            </div>
        </>
    );
};

export default SingleLeagues;