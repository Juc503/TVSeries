import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToSch from '../components/ToSch'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'



const HomeShows = () => {


    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const current = new Date();

    const date = `${current.getFullYear()}-${(current.getMonth() < 9 ? '0' : '') + (current.getMonth() + 1)}-${(current.getDate() < 10 ? '0' : '') + current.getDate()}`;
    const url = `https://api.tvmaze.com/schedule/web?date=${date}`


    useEffect(() => {
        const fetchItems = async () => {

            const result = await axios(url)
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()

    }, [])

    return (
        <div className="parent">
            <div className='titulo'>
                <svg width="900px" ><text x="70%" y="50%" text-anchor="middle"  > Today new episodes </text></svg>
            </div>
            <ToSch isLoading={isLoading} items={items} />
            <div className='button'>
                <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
            </div >
        </div >



    )
}



export default HomeShows


