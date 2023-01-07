import React from 'react'

export const UserDetails = props => {
    const { list, reset } = props;
    return (
        <div>
            <h4 className='app-green-header'>List Of Users</h4>
            <p>dd</p>
            {list.map(user => <h6 key={user.id}>{user.name}</h6>)}
        </div>
        // <>
        //     {!reset ?
        //         <div>
        //             <h4 className='app-green-header'>List Of Users</h4>
        //             {list.map(user => <h6 key={user.id}>{user.name}</h6>)}
        //         </div> : null
        //     }
        // </>
    )
}
