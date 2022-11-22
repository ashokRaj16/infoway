import {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
const NotFound = () => {
    return (
        <>
        <Sidebar />
        
        <Layout>
            <div className='card mt-5'>
                <div className='card-body'>
                    <h2>404...</h2>
                    <p> Oops page not found.</p>
                    <p>Click here to go to <Link to="/">Home</Link></p>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default NotFound;
