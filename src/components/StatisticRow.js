import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StatisticRow = ({ text, value }) => {
    return (
        <table>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>

        </table>
    )
}

export default StatisticRow;