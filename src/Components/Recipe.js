import React from 'react';
import style from '../Components/recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories.toFixed(0)} calories</p>
            <img src={image} alt="Image of the recipe"/>
        </div>
    );
}

export default Recipe