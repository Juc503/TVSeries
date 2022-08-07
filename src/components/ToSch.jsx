import React from 'react'
import Reloj from './Reloj'
import Sch from '../pages/Sch';



const ToSch = ({ items, isLoading }) => {
    return (
        isLoading ? (<Reloj />) : (<section className='grid'>
            {items.map((item) => (
                    <Sch key={item.id} item={item}/>
            ))}
        </section>)
    )
}

export default ToSch

