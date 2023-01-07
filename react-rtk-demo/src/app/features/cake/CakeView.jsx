import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    const numberOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1);
    return (
        <div className='app-view-container red'>
            <input type="number" className='app-txt' value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <h2 className='app-red-header'>Number of cakes - {numberOfCakes}</h2>
            <div className='app-d-flex'>
                <button onClick={() => dispatch(ordered())}
                    className="app-btn red">Order Cake</button>
                <button onClick={() => dispatch(restocked(value))}
                    className="app-btn red">Restock Cakes</button>
            </div>
        </div>
    )
}
