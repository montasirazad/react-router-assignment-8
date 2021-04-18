import React from 'react';
import { Link } from 'react-router-dom'
import '../Components/Team.css'

const Team = (props) => {

    const { idTeam, strAlternate, strTeamBadge } = props.team
    return (


        <div className="team-container">
            <img src={strTeamBadge} alt="" />
            <h2>  {strAlternate}</h2>


            <p1>Sports type:Football</p1> <br /> <br /> <br />
            {/* <h3>Id:{idTeam}</h3> */}

            <Link to={`/about/${idTeam}`}>

                <button id="button">EXPLORE</button>

            </Link>



        </div>
    );
};

export default Team;