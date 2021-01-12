import React, { useState, useEffect } from 'react';
import './NumbersList.css';
import ListNumber from "../ListNumber/ListNumber";

export default function NumbersList() {
    const [numbers, setNumbers] = useState([]);

    const roll = () => {
        for (let i = 0; i < 10; i++) {
            // Create table of rands: 0-99
            setNumbers(prev => [...prev, Math.floor((Math.random() * 1000) / 10)]);
        }
    }

    const reroll = () => {
        setNumbers([]);
        roll();
    }

    useEffect(() => roll(), []);

    return (
        <article className='numbers-list-component'>
            <ul className='numbers-list numbers-list-font'>
                {numbers.map(number => (
                    <ListNumber randomNumber={number}/>
                ))}
            </ul>
            <button className='button button-size button-font' onClick={reroll}>Re-rand</button>
        </article>
    );
}
