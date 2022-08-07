import React from 'react'
import Reloj from './Reloj'
import Sea from '../pages/Sea';



  
const ToSea = ({ season, isLoading }) => {
    return (
        isLoading ? (<Reloj />) : (<section className='sea'>
            {season.map((item) => (
                    <Sea key={item.id} item={item}/>
            ))}
        </section>)
    )
}

export default ToSea

