import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ToPeople from '../components/ToPeople';


const HomeShows = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/people?page=1`)
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()

    }, [])

    return (
        <div className="parent">
            <div className='titulo'>
                <svg width="900px" ><text x="70%" y="50%" text-anchor="middle"  > People </text></svg>
            </div>
            <ToPeople isLoading={isLoading} items={items} />
            <div className='button'>
                <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
            </div>
        </div>


    )
}



export default HomeShows


