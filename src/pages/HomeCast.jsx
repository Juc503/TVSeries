
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUndo} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Reloj from '../components/Reloj';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ToCast from '../components/ToCast'


const HomeCast = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows/${id}/cast`)
            
            console.log(result.data)
            setCast(result.data)
            setIsLoading(false)
           
        }
        fetchItems()
    }, [])
    return (
        
        isLoading ? (<Reloj />) : (
            <div className='parent'> 
                <div className='card'>
                <h1> CAST</h1>
            <div className='series'>
            <ToCast isLoading={isLoading} cast={cast} />
                </div>
            <div className='menu'>
                <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
                <Link to={`/Serie/${id}`} className='btn'><FontAwesomeIcon icon={faUndo} > </FontAwesomeIcon></Link>
            </div>
        </div>
            </div>
        ))
    
}

export default HomeCast





















