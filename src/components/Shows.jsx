import React, { Fragment } from 'react'
import Show from './Show'
import Reloj from './Reloj'



const Shows = ({ items, isLoading }) => {
    return (
        isLoading ? (<Reloj />) : (<section className='cards'>
            {items.map((item) => (
                    <Show key={item.show.id} item={item}/>
            ))}
        </section>)
    )
}

export default Shows



