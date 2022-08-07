import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Buscar = ({ getQuery }) => {

    const [texto, setTexto] = useState('')

    const onChange = (q) => {
        setTexto(q)
        getQuery(q)
    }

    return (
        <section className="search-box">
            <form>
            <button className="btn-search"><FontAwesomeIcon icon={faSearch} > </FontAwesomeIcon></button>
                <input
                    className="input-search"
                    type='text'
                    placeholder='Search a show'
                    value={texto}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus />
            </form>
        </section>
    )
}

export default Buscar

