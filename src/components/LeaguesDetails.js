import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faVolleyballBall, faMarsStroke} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router';
import Header from './Header';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../style/LeaguesDetails.css'
import male from '../img/male.png'
import female from '../img/female.png'
import { Link } from 'react-router-dom';

const LeaguesDetails = () => {
    const {id} = useParams();
    const [league, setLeague] = useState({});
    // console.log(league)

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },[id]);

    console.log()
    return (
        <div className='LeaguesDetails'>
            <Header logo={league.strLogo}/>
            <div className="container ">
                <Container  className='bg p-3 mt-5'>
                    <Row>
                        <Col xs={12} md={7}>
                            <h4 className='pb-4 pt-3'>{league.strLeague}</h4>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded: {league.intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag}/> Country: {league.strCountry}</p>
                            <p><FontAwesomeIcon icon={faVolleyballBall}/> Sport Type: {league.strSport}</p>
                            <p><FontAwesomeIcon icon={faMarsStroke}/> Gender: {league.strGender}</p>
                        </Col>
                        <Col xs={12} md={5}>
                            { (league.strGender === 'Male') ? <Image src={male} fluid  rounded /> : <Image src={female} fluid  rounded />}
                        </Col>
                    </Row>
                </Container>
                <div className="pt-5 description">
                     <p>{league.strDescriptionEN}</p>
                     <p>{league.strDescriptionDE}</p>
                </div>
                <div className="cocial-icon">
                    <Link to={`https://`+league?.strFacebook} target="_blank"><FontAwesomeIcon icon={faFacebook}/></Link>
                    <Link to={`https://`+league?.strTwitter} target="_blank"><FontAwesomeIcon icon={faTwitter}/></Link>
                    <Link to={`https://`+league?.strYoutube} target="_blank"><FontAwesomeIcon icon={faYoutube}/></Link>
                </div>
            </div>
        </div>
    );
};

export default LeaguesDetails;