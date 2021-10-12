import React from 'react';
import { Link } from 'react-router-dom';

function Licard(props) {
    return (
       <>
            <li className="card-item">
                <Link className="card-item-link" to={props.path}>
                    <figure className="card-item-wrap" data-category={props.label} >
                        <img 
                        src={props.src}
                        alt="image1" 
                        className="card-item-img"/>

                        
                    </figure>
                <div className='card-item-info'>
                          <h4 className="card-item-text">
                            {props.text}
                        </h4>

                </div>
                   
                </Link>
            </li>
       
       </>

    )
}

export default Licard
