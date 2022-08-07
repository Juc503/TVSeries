import React from 'react'
import Reloj from './Reloj'
import Cast from './Cast';



const ToCast = ({ cast, isLoading }) => {
    return (
        isLoading ? (<Reloj />) : (<section className='cards'>
            {cast.map((item) => (
                    <Cast key={item.person.id} item={item}/>
            ))}
        </section>)
    )
}

export default ToCast

