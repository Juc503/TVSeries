import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Shows from './Shows'
import Buscar from './Buscar'
import ToIndi from './ToIndi'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faTv, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import '../assets/index.css'


const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {

        const fetchItems = async () => {

            const result = await axios(`https://api.tvmaze.com/search/shows?q=${query}`)
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()

    }, [query])

    return (
        <div className="parent">
            <div className="searchBox">
                <Buscar getQuery={(q) => setQuery(q)} /> 
            </div>
            <div className="menu">
                <Link to='/HomeShows' className='btn'> Shows <FontAwesomeIcon icon={faTv} > </FontAwesomeIcon></Link>
                <Link to='/HomePeople' className='btn'> People <FontAwesomeIcon icon={faPerson} > </FontAwesomeIcon> </Link>
                <Link to='/Schedule' className='btn'> New Episodes <FontAwesomeIcon icon={faCalendarDay}>  </FontAwesomeIcon> </Link>
            </div>
            <div className="series">
                <Shows isLoading={isLoading} items={items} />
                
            </div>
        </div>


    )
}



export default App








/*import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Buscar from './Buscar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson,faTv, faSquare } from '@fortawesome/free-solid-svg-icons'

import '../assets/navbar.css'

export default function Home() {
    const [query, setQuery] = useState('')
    return (
        <div className="parent">
            <div className="searchBox"> 
            <Buscar getQuery={(q) => setQuery(q)} /> </div>
            <div className="menu">
                <Link to='/Shows' className='btn'> Shows <FontAwesomeIcon icon={faTv  } > </FontAwesomeIcon></Link>
                <Link to='/People' className='btn'> People <FontAwesomeIcon icon={faPerson } > </FontAwesomeIcon> </Link>
                <Link to='/Networks' className='btn'> Networks <FontAwesomeIcon icon={faSquare}>  </FontAwesomeIcon> </Link>
            </div>
            <div className="series"> </div>
        </div>
    )


}*/