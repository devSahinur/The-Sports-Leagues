import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faVolleyballBall, faMarsStroke} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import Header from './Header';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../style/LeaguesDetails.css'
import male from '../img/male.png'
import female from '../img/female.png'

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

    return (
        <>
            <Header logo={league.strLogo}/>
            <div className="container">
                <Container  className='bg p-3 mt-5'>
                    <Row>
                        <Col xs={12} md={7}>
                            <h4 className='pb-4 pt-3'>{league.strLeague}</h4>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded: {league.intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag}/> Country: {league.strCountry}</p>
                            <p><FontAwesomeIcon icon={faVolleyballBall}/> Sport Type: {league.strSport}</p>
                            <p><FontAwesomeIcon icon={faMarsStroke}/> Gender: {league.strGender}</p>
                        </Col>
                        <Col xs={6} md={5}>
                            <Image src={male} fluid  rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LeaguesDetails;