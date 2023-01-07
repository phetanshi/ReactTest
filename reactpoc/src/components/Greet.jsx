import React from 'react'
import '../css/greet.css'

const Greet = ({ name, children }) => {
    return (
        <div>
            <h1>Hello {name}!</h1>
            {children}
        </div>
    )
}

export const Name = (props) => {
    console.log(props)
    return <div className='container-border' >
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
    </div >
}

export default Greet