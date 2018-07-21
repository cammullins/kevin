import React from 'react';
import './li.css';

const ListItem = props => (
    <li>
        <img src={props.url}/>
        <p>{props.text}</p>
        <p>{props.date}</p>
    </li>
)
export default ListItem;