import React from 'react';
import image from "../assets/photo.png"




const Sea = ({ item }) => {

    const tagRegExp = new RegExp('<\s*[^>]*>', 'g')

    return (
            <div className='container-episode'>
                {
                    item.length===0
                    ?
                    <p> No information available</p>
                    :
                    (<div className='card-episode'>
                    {!item?.name && !item?.season ? <p> No information available </p> : 
                    (<div className='episode-title'>
                        <strong className='episode-title'> S{item.season} - E{item.number} '{item.name}'  </strong>
                    </div>)}

                    {!item?.summary ? <p> No information available </p> : 
                    (<div className='episode-summary '>
                        <a> Summary: <br/> {item.summary.replace(tagRegExp, '')} </a>
                    </div>)}


                    {!item?.image?.original ? <img src={image} className='episode-image' /> : <img src={item.image.original} alt='show image' className='episode-image' />}
                    {!item?.airdate && !item?.rating?.average ? '-' :
                        (
                            <div className='episode-info'>
                                <p>  {item.airdate} </p>
                                <p> rating: {item.rating.average}</p>
                            </div>
                        )}
                </div>)
                }
            </div>
    )
}
export default Sea



