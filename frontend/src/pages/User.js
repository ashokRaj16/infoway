import {Fragment} from 'react';
import Layout from '../components/Layout';
import UserList from '../components/UserList';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const User = ({logoutHandler}) => {
    const location = useLocation();
    // const message = location.state;
    // console.log(process.env);
    return (
        <>
            <Sidebar logoutHandler={logoutHandler} />
            <Layout>
                <UserList editmessage={location.state}/>
            </Layout>
        </>
    )
}

export default User;