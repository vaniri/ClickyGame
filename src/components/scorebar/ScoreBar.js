import React from 'react';
import './style.css'

const ScoreBar = ({ userscore, topscore }) => {
    return (
        <div id="score_bar">
            <ul id="score_list">
                <li className="score">SCORE: {userscore}</li>
                <li className="score">TOP SCORE: {topscore}</li>
            </ul>
        </div>
    )
}


export default ScoreBar