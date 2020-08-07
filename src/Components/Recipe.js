import React from 'react';
import style from '../Components/recipe.module.css'

const Recipe = ({ title, calories, image, ingredients, url }) => {
    return (
        <div className={style.recipe}>
            <h1><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.title}>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories.toFixed(0)} calories</p>
            <img src={image} alt={title}/>
        </div>
    );
}

export default Recipe