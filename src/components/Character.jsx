import React from 'react'
import Cast from './Cast'
import Reloj from './Reloj'
import '../assets/index.css'


const Character = ({ items, isLoading }) => {
    return (
        isLoading ? (<Reloj />) : (<section className='cards'>
            {items.map((item) => (
                <Cast key={item.show.id} item={item}/>
            ))}
        </section>)
    )
}

export default Character

