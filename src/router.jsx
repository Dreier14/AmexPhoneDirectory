import { Routes, Route } from 'react-router-dom';

import { Home } from './components/home/home';
import { DetailedView } from './components/detailedView/DetailedView';

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/detailed-view' element={<DetailedView/>}/>
        </Routes>
    );
};