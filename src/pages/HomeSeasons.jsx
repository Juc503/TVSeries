import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUndo } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import ToSea from '../components/ToSea'

const Seasons = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [season, setSeason] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows/${id}/episodes`)
            console.log(result.data)
            setSeason(result.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])
    return (
                <div className='parent'>
                    <h1> Seasons</h1>
                    <div className='sea'>
                        <ToSea isLoading={isLoading} season={season} />
                    </div>
                    <div className='menu'>
                        <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
                        <Link to={`/Serie/${id}`} className='btn'><FontAwesomeIcon icon={faUndo} > </FontAwesomeIcon></Link>
                    </div>
                </div>
    )
}

export default Seasons
