import React from 'react'

export const TestCmpField = () => {
    console.log("Test Cmp Called");
    return (
        <div>TestCmp</div>
    )
}

export const TestCmp = React.memo(TestCmpField)
