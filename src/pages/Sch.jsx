import React from 'react';
import { Link } from 'react-router-dom';

import image from "../assets/photo.png"


const Sch = ({ item }) => {

return (
    item.lenght===0
    ?
    <p> Not Information Found</p>
    :
    <div className='cardShow'>
        {!item?._embedded?.show?.name ? '' : (<Link to={`/Serie/${item._embedded.show.id}`} style={{ textDecoration: "none" }}> <h1 className='name'>{item._embedded.show.name}</h1> </Link>) }
        {!item?._embedded?.show?.image?.original ? <img src={image} className='photo' /> : <img src={item._embedded.show.image.original} alt='show image' className='photo' />}
        {!item?.season ? '' : <p> Season: {item.season} Episode: {item.number}</p>}
    </div>

    )
}
export default Sch

