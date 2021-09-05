import classes from './Categories.module.css';
import React from 'react';


const categories = (props) =>{
    return(
        <div className={classes.card}>
            <h2>{props.title}</h2>
            <img src ={props.imgSrc} alt={props.altTxt} />
            <div className={classes.container}>
                <button>{props.buttonTxt}</button>
            </div>
            

        </div>
    )
}

export default categories;