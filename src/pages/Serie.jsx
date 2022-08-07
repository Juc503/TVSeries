import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPerson, faFilm } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Reloj from '../components/Reloj';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



const serie = () => {
    const tagRegExp = new RegExp('<\s*[^>]*>', 'g')
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [serie, setSerie] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows/${id}`)
            console.log(result.data)
            setSerie(result.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])
    return (
        isLoading ? (<Reloj />) : (
            <div className='parent'>
                <div className='card'>
                    {!serie?.name ? '' : <h1 className='name'>{serie.name}</h1>}
                    {!serie?.image?.original ? 'No photo' : <img src={serie.image.original} alt='show image' className='indi' />}
                    {!serie?.genres[2] ? <p className='pa'> {serie.genres[0]}</p> : <p> {serie.genres[0]}, {serie.genres[1]}</p>}
                    <div className='inline'> 
                    {serie.status  === 'Ended' ? <p className='pa'> Status: ended </p> : <p className='pa'> Status: running </p>}
                    {!serie?.network?.name ? '' : <p className='pa'>  Aired on: {serie.network.name}</p>}
                    </div>
                    {!serie?.summary ?  <p> No information available </p>  : <a> {serie.summary.replace(tagRegExp, '')} </a>}
                            </div>
                                <div className='menu'>
                                    <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
                                    <Link to={`/HomeCast/${id}`} className='btn'>Cast<FontAwesomeIcon icon={faPerson} > </FontAwesomeIcon></Link>
                                    <Link to={`/HomeSeasons/${id}`} className='btn'>Seasons<FontAwesomeIcon icon={faFilm} > </FontAwesomeIcon></Link>
                                </div>
                            </div>
        )
    )
}

                    export default serie


