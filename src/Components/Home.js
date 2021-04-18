import React from 'react';
import { useEffect, useState } from 'react';
import Team from './Team';
import './Home.css'
import Logo from '../images/fifa.jpg'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])




    return (
        <div className='home-container'>




            <img id="cover" src={Logo} alt="" srcset="" />

<h1>Team tracker</h1>



            {

                teams.map(team => <Team team={team} key={team.idTeam}></Team>)
            }

        </div>
    );
};

export default Home;