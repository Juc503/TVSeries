import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/photo.png"


const Peo = ({ item }) => {

    return (
        <div className='card'>
            {!item?.image?.original ? <img src={image} className='photo' /> : <img src={item.image.original } alt='show image' className='photo' />}
            <Link to={`/Serie/${item.id}`} style={{ textDecoration: "none" }}> <h1 className='name'>{item.name}</h1> </Link>
        </div>
    )
}
export default Peo