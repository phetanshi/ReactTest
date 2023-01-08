import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import "../../css/Autocomplete.css"
import { useOutSideClick } from '../../hooks/useOutSideClick';
import { useArePropsEqual } from '../../hooks/useArePropsEqual';

const AutocompletField = React.forwardRef((props, optionsRef) => {

    const {
        label,
        options,
        selected,
        setSelected,
        placeholder,
        searchItems,
        minSearchlength
    } = props;

    const [isActive, setIsActive] = useState(false);
    const [minLenght, setMinLenght] = useState(minSearchlength ? minSearchlength : 1);

    const handleClick = e => {
        setIsActive(prev => !prev);
        e.stopPropagation();
    }
    const selectItem = (option) => {
        setSelected(option.value);
        setIsActive(false);
    }

    const hideMenu = () => {
        setIsActive(false);
    }

    const searchItem = async (e) => {
        await setSelected(e.target.value);
        searchItems(e.target.value);
        setIsActive(true);

    }

    useOutSideClick(optionsRef, hideMenu, isActive);

    return (
        <div className='auto-complete'>
            <label className='label'>{label}</label>
            <input type="text" className='auto-ctrl' placeholder={placeholder} value={selected} onChange={(e) => searchItem(e)} onClick={handleClick} />
            {options && options.length > 0 && <div ref={optionsRef} className={classNames("auto-content", { display: isActive })}>
                {options.map(option =>
                    <div key={option.id} className='auto-content-item' onClick={() => selectItem(option)}>
                        {option.id} - {option.value}
                    </div>)}
            </div>}
        </div>
    )
})


export const Autocomplete = React.memo(AutocompletField, (prevProp, nextProp) => useArePropsEqual(prevProp, nextProp))