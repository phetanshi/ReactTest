import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreameSlice'

export const IceCreamView = () => {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);

    return (
        <div className='app-view-container blue'>
            <input type="number" className='app-txt' value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <h2 className='app-blue-header'>Number of Ice creams - {numOfIceCreams} </h2>
            <div className='app-d-flex'>
                <button onClick={() => dispatch(ordered())}
                    className="app-btn blue">Order Ice Cream</button>
                <button onClick={() => dispatch(restocked(value))}
                    className="app-btn blue">Restock Ice Cream</button>
            </div>
        </div>
    )
}
