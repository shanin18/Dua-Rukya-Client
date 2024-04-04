import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setId } from '../redux/features/navigateButton/navigateButtonSlice';

const NavigateBtn = ({id, children}) => {
    const dispatch = useDispatch();

    return (
        <div onClick={()=> dispatch(setId(id))}>
            {children}
        </div>
    );
};

export default NavigateBtn;