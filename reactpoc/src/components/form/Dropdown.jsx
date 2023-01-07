import React, { useState } from 'react'
import classNames from 'classnames';

const CatDropdown = (props) => {
    const { options, selected, setSelected, initialValue } = props;
    const [isActive, setIsActive] = useState(false);
    const onDropDownClick = e => {
        setIsActive(prev => !prev);
    }

    const handleSelection = option => {
        setSelected(option.value)
        setIsActive(false);
    }

    const handleReset = e => {
        setSelected(initialValue)
        setIsActive(false);
        e.stopPropagation();
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={onDropDownClick}>
                <span>{selected ? selected : initialValue}</span>
                <div className="dropdown-ctrl">
                    <span className='dropdown-reset' onClick={handleReset}>x</span>
                    <span className="dropdown-down-arrow">v</span>
                </div>
            </div>
            <div className={classNames("dropdown-content", { display: isActive })}>
                {options &&
                    options.map(option => <div key={option.value} className="dropdown-item" onClick={() => handleSelection(option)}>{option.label}</div>)
                }
            </div>
        </div>
    )
}

export default CatDropdown