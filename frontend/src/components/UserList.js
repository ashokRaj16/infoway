import {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';
// import env from 'dotenv';
import loader from '../assets/images/loader.gif'

const BASE_URL = process.env.REACT_APP_API_URL;

const UserList = ({editmessage}) => {
    
    const [users, setUsers] = useState([])
    const [error, setErrors] = useState('');
    const [message, setMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getuser = async() => {
        setIsLoading(true)
        try{
            const response = await axios.get(`${BASE_URL}user`);
            const data = response.data;
            // console.log(data);
            setUsers(data.data)
        }
        catch(errr)
        {
            setErrors('Some Error occured. Please try again later.');
        }
        setIsLoading(false);
    }

    const deleteHandler = async(e, id) =>
    {
        e.preventDefault();
        // console.log(id)
        setIsLoading(true)
        try{
            const response = await axios.delete(`${BASE_URL}user/${id}`);
            // const data = response.data;
            let filterUser = users.filter(user =>{
                console.log(user)
                return user._id !== id}
                );
            setUsers(filterUser);
            setMessage({success: response.data.message})
            // console.log(response.data);
        }
        catch(errr)
        {
            setErrors('Some Error occured. Please try again later.');
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getuser();
    },[])

    return (
        <Fragment>
        <div className='card mt-2'>
                {isLoading && <img className='loader' src={loader} alt="loader" /> }
            <div className='card-header'>
               <h1>UserList</h1>
            </div>
            <div className='card-body'>
            
            <div className='table-responsive'>
                {/* <img className='loader' src={loader} alt="loader" /> */}
            {editmessage && <div className='alert alert-success'>{editmessage.success}</div>}
            {message && <div className='alert alert-danger'>{message.success}</div>}
            {isLoading && <img className='loader' src={loader} alt="loader" /> }
            <table className='table align-middle table-edge table-hover table-nowrap mb-0'>
                <thead className='thead-light'>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className='list'>
                    {users && (users.length !== 0) ? users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user._id}</td>
                        <td>{user.fname} {user.lname}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td><Link to={`/edit/${user._id}`}>Edit</Link> | <a href='/' onClick={(e) => deleteHandler(e, user._id)}> Delete</a></td>
                    </tr>
                    )) : <tr><td colSpan="5">No Records Found.</td></tr>}
                    {error && <p>{error}</p>}
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </Fragment>
    )
}

export default UserList;