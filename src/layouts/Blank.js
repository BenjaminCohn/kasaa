import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Blank = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
};

export default Blank;