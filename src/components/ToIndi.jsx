import React from 'react'
import Reloj from './Reloj'
import Individual from '../pages/Individual';



const ToIndi = ({ items, isLoading }) => {

    return (
        isLoading ? (<Reloj />) : (<section className='cards'>
            {items.map((item) => (
                <Individual key={item.id} item={item}/>
        ))}
        </section>)
    )
}

export default ToIndi

