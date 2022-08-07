import React from 'react'
import Reloj from './Reloj'
import Peo from '../pages/Peo';



const ToPeople = ({ items, isLoading }) => {

    return (
        isLoading ? (<Reloj />) : (<section className='cards'>
            {items.map((item) => (
                <Peo key={item.id} item={item}/>
        ))}
        </section>)
    )
}

export default ToPeople

