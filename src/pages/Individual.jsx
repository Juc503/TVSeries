import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/photo.png"


const Individual = ({ item }) => {

    return (
        <div className='card'>
            {!item?.image?.original ? <img src={image} className='photo' /> : <img src={item.image.original } alt='show image' className='photo' />}
            
            <Link to={`/Serie/${item.id}`} style={{ textDecoration: "none" }}> <h1 className='name'>{item.name}</h1> </Link>
            {!item?.genres[2] ? <p> {item.genres[0]} </p> : <p> {item.genres[0]}, {item.genres[1]}</p>} 
            
        </div>
    )
}
export default Individual
