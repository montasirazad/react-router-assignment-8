import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './Explore.css'
import Facebook from '../images/Facebook.png'
import Twitter from '../images/Twitter.png'
import Youtube from '../images/YouTube.png'

const Explore = () => {
    const { idTeam } = useParams();
    const [singleTeam, setSingleTeam] = useState([])
    console.log(singleTeam)
    useEffect(() => {
        //const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?id=${idTeam}`

        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}   `)
            .then(res => res.json())
            .then(data => setSingleTeam(data.teams[0]))

    }, [])
    return (
        <div>


            <div className='team-intro'>
                <img src={singleTeam.strTeamBadge} alt="" srcset="" />

                <h1>{singleTeam.strTeam}</h1>
                <p>Sports type: {singleTeam.strSport}</p>
                <p>Stadium: {singleTeam.strStadium}</p>
                <br /><br />
                <p1>{singleTeam.strDescriptionEN}</p1>
                <br /> <br />


            </div>


            <div className='team-stadium'>
            <img  src={singleTeam.strStadiumThumb} alt="" srcset="" />
            </div>


            <div className='stadium'>
                <h2>Stadium description</h2>
                <p1> {singleTeam.strStadiumDescription}</p1>

            </div>


            <div className='logo' >
                <a target='_blank_' href="https://www.facebook.com/"><img src={Facebook} alt="" srcset="" /></a>
                <a target='_blank_' href="https://www.twitter.com/"><img src={Twitter} alt="" srcset="" /></a>
                <a target='_blank_' href="https://www.youtube.com/"><img src={Youtube} alt="" srcset="" /></a>



{/* div aaa */}
            </div>
        </div>
    );
};

export default Explore;