import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToIndi from '../components/ToIndi'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'



const HomeShows = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.tvmaze.com/shows?page=1`)
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
            
            
        }
        fetchItems()
    }, [])

    return (
        <div className="parent">
              <div className='titulo'>
                <svg width="900px" ><text x="70%" y="50%" text-anchor="middle"  > Shows </text></svg>
            </div>
            <div className='series'>
            <ToIndi isLoading={isLoading} items={items} />
            </div>
            <div className='button'>
                <Link to='/' className='btn'>Home<FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></Link>
            </div >
            
        </div>


    )
}



export default HomeShows


