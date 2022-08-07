import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'

const Reloj = () => {
    return (
        <div>
            <h1> Loading  <FontAwesomeIcon icon={faSpinner} className='rotate'> </FontAwesomeIcon> </h1>
            
        </div>
       
    )
}

export default Reloj