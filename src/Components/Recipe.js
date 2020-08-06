import React from 'react';

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories} calories</p>
            <img src={image} alt="Image of the recipe"/>
        </div>
    );
}

export default Recipe