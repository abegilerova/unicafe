import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import StatisticRow from "./StatisticRow";



const Statistics = ({ good, bad, neutral }) => {

    let count = good + bad + neutral;
    let total = good - bad;

    if (count === 0) {
        return (

            <p>No feedbacks given</p>


        )


    } else {
        return (
            <table>
                <tbody>
                    <StatisticRow text="good" value={good} />
                    <StatisticRow text="neutral" value={neutral} />
                    <StatisticRow text="bad" value={bad} />
                    <StatisticRow text="all" value={count} />
                    <StatisticRow text="average" value={count > 0 ? total / count.toFixed(3) : 0} />
                    <StatisticRow text="positive" value={count > 0 ? (good / count * 100).toFixed(2).concat('%') : '0 %'} />
                </tbody>

            </table>
        )
    }


}


export default Statistics;