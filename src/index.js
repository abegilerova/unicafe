import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Button from './components/Button';
import Statistics from './components/Statistics';




const App = () => {
    //save clicks for each button to own state
    const header = "give feedback";

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);




    const handleClick = () => {
        console.log('clicked');

    }

    const setToValueGood = (value) => {

        return () => {
            setGood(value)
        }
    }

    const setToValueNeutral = (value) => {

        return () => {
            setNeutral(value)
        }

    }

    const setToValueBad = (value) => {

        return () => {
            setBad(value)
        }
    }




    return (
        <div>
            <Header text={header} />
            <Button onClick={setToValueGood(good + 1)} text='good' />
            <Button onClick={setToValueNeutral(neutral + 1)} text='neutral' />
            <Button onClick={setToValueBad(bad + 1)} text='bad' />


            <Statistics good={good} neutral={neutral} bad={bad} />




        </div >
    )
}



ReactDOM.render(<App />, document.getElementById('root'));


