import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import loader from '../assets/images/loader.gif'
import Sidebar from '../components/Sidebar';

const BASE_URL = process.env.REACT_APP_API_URL;

const EditUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const initialvalue = { fname:'', lname: '', email: '', mobile: '', password:'', cpassword: ''}
    const [user, setUser] = useState(initialvalue)
    const [fieldError, setFieldError] = useState(initialvalue);
    const [response, setResponse] = useState()
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async (id) => {
        if(!id)
        {
            setError(true)
        }
        else{
            setIsLoading(true);
            try{
                const res = await axios.get(`${BASE_URL}user/${id}`)
                setUser(res.data.data);

                // setResponse(res.data.data)
                console.log(res.data.data);
            }
            catch(err)
            {
                setError(true);
            }
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getUser(id);
    },[id])

    const validate = (values) => {
        const errors= {};
        const regex = "/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/";

        if(!values.fname)
        {
            errors.fname ="First name is required."
        }
        if(!values.lname)
        {
            errors.lname ="Last name is required."
        }
        if(!values.email)
        {
            errors.email ="Email is required."
        }
        if(!values.mobile)
        {
            errors.mobile ="mobile is required."
        }
        if(!values.password)
        {
            errors.password ="password is required."
        }
        if(!values.cpassword)
        {
            errors.cpassword ="confirm password is required."
        }
        if(values.mobile && values.mobile.length < 10  )
        {
            errors.mobile ="Mobile lenght is must be 10."
        }
        if(values.password && (values.password !== values.cpassword))
        {
            errors.cpassword ="confirm passwrd not match."
        }
        if(values.email && regex.match(values.email))
        {
            errors.email = 'Enter proper email.'
        }
        return errors;
    }

    const changeHandler =(e) =>{
        e.preventDefault(); 
        const { name, value } = e.target;
        if(value.length < 1)
        {
            setFieldError({...fieldError, [name]: 'Required field.'})
            setUser({...user, [name]: value})
        }
        else
        {
            setUser({...user, [name]: value})
            setFieldError({...fieldError, [name]: ''} );
        }
        // console.log(user);
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        setFieldError(validate(user));
        console.log(Object.keys(fieldError).length);
        if(Object.keys(fieldError).length === 0){
        try{
                const res = await axios.put(`${BASE_URL}user/${id}`, user)
                // console.log(res);
                // setUser({});
                setResponse(res.data);
                // redirect('/user');
                
                navigate('/',{state:{success: 'Updated Successfully.'}});
            }
            catch(err)
            {
                setError(true);
            }
        }

    }

    return (
        <>
        <Sidebar />
        
        <Layout>
            <div className='card mt-2'>
                {isLoading && <img className='loader' src={loader} alt="loader" /> }
                <div className='card-header'>
                    <h1>Edit User</h1>
                </div>
                <div className='card-body'>
                    <div className='row mb-4'>
                        {error && <div className='alert alert-danger' >Some Error occured. Please try again later.</div>}
                        {response?.message && <div className='alert alert-success'>{response.message}</div>}
                    </div>
                    <form method='post' name='register' onSubmit={(e)=> submitHandler(e)}>
                    <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='fname' >First name</label>
                        </div>
                        <div className='col-lg'>
                            <input type="text" value={user?.fname} className='form-control' name="fname" onChange={(e) => changeHandler(e)} />
                            {fieldError?.fname && <span className='text-danger'> {fieldError.fname}</span> }
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='lname' >lname name</label>
                        </div>
                        <div className='col-lg'>
                            <input type="text" value={user?.lname} className='form-control' name="lname" onChange={(e) => changeHandler(e)} />
                            {fieldError?.lname && <span className='text-danger'>{fieldError.lname}</span> }
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='email' >Email</label>
                        </div>
                        <div className='col-lg'>
                            <input type="email" value={user?.email} className='form-control' name="email" onChange={(e) => changeHandler(e)} />
                            {fieldError?.email && <span className='text-danger'>{fieldError.email} </span> }
                        </div>
                    </div>
                    
                    <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='mobile' >mobile</label>
                        </div>
                        <div className='col-lg'>
                            <input type="mobile" value={user?.mobile} className='form-control' name="mobile" onChange={(e) => changeHandler(e)} />
                            {fieldError?.mobile && <span className='text-danger'>{fieldError.mobile}</span> }
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='password' >Password:</label>
                        </div>
                        <div className='col-lg'>
                            <input type="password" className='form-control' name="password" onChange={(e) => changeHandler(e)} />
                            {fieldError?.password && <span className='text-danger'>{fieldError.password}</span> }
                        </div>
                    </div>
                        <div className='row mb-4'>
                        <div className='col-lg-3'>
                            <label htmlFor='cpassword' >Confrim password</label>
                        </div>
                        <div className='col-lg'>
                            <input type="password" className='form-control' name="cpassword" onChange={(e) => changeHandler(e)} />
                            {fieldError?.cpassword && <span className='text-danger'>{fieldError.cpassword}</span> }
                        </div>
                    </div>    
                    <div className='d-flex justify-content-end mt-5 '>
                        <button className='btn btn-primary col-lg-2 col-md-4' type='sumit' name='submit'>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            
        </Layout>
        </>
    )
}

export default EditUser;
