import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/photo.png"


const Show= ({ item }) => {
    
    return (
        item.length === 0
        ?
        <p> No information available </p>
        :
        <div className='card'>
            {!item?.show?.image?.original ? <img src={image} className='photo'/>: <img src={item.show.image.original} alt='show image' className='photo' />}
            <Link to={`/Serie/${item.show.id}`} style={{ textDecoration: "none" }}> <h1 className='name'>{item.show.name}</h1> </Link>
        </div>
    )
}

export default Show


