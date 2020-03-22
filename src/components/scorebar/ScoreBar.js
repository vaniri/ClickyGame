import React from 'react';
import './style.css'

const ScoreBar = props => {
    return (
        <div id="score_bar">
            <ul id="score_list">
            <li className="score">SCORE: {props.userscore}</li>
            <li className="score">TOP SCORE: {props.topscore}</li>
            </ul>
        </div>
    )
}


export default ScoreBar