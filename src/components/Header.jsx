import React from 'react'
import './Header.css';
const Header = (props) => {
    return (
        <div>
        <h1 className='title'>{props.titulo}</h1>
        </div>
    )
}

export default Header