import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserDetails } from './components/UserDetails';
import { fetchUsers, reset } from './userSlice'

export const UserView = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user);
    const [reset, setReset] = useState(false);

    const fetchData = async () => {
        dispatch(fetchUsers());
    }

    const resetData = () => {
        dispatch(reset());
    }

    return (
        <div className='app-view-container green'>
            <div className='app-d-flex'>
                <button className='app-btn green' onClick={() => fetchData()}>Fetch Users</button>
                <button className='app-btn red' onClick={() => resetData()}>Fetch Users</button>
            </div>
            {data.loading ?
                <h4>Loading....!</h4> : data.error ?
                    <h4 className='app-error-msg'>Something went wrong!</h4> : data.users && data.users.length > 0 ?
                        <UserDetails list={data.users} reset={reset} /> : null}
        </div>
    )
}
