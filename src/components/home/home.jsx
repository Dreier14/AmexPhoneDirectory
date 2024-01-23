import React from 'react';

import { DirectoryView } from '../directoryView/directoryView';

import './home.css'

// The Home component will serve as the base entry point for our application as we add more components.
export const Home = () => {
    return (
        <>
            <div className='home'>
                <br/>
                <h1>Amex Phone Directory</h1>
                <DirectoryView />
            </div>
        </>
    );
};