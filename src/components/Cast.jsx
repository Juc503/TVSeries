import React from 'react';
import '../assets/index.css'
import image from "../assets/photo.png"


const Cast = ({ item }) => {
    return (
        <div className="card-container">
        <span className="pro">
            {(item.person.gender === 'Male' ? <span> Actor </span> : <span> Actress </span>)}
        </span>
            {!item?.person?.image?.original ? <img src={image} alt='show image' className="round" /> : <img src={item.person.image.original} alt='show image' className="round" />}
            {!item?.person?.name ? <p> No information available </p> : <h2>  {item.person.name}</h2>}
            {!item?.person?.country?.name ? '' : <h3>  {item.person.country.name}</h3>}
            {!item?.person?.birthday ? '' : <h6> Birthday: {item.person.birthday}</h6>}
        <div className="info">
            <ul>
                <li>{!item?.character?.name ? '' : <text> Character: {item.character.name} </text>}</li>
            </ul>
        </div>
    </div>
    )
}
export default Cast

