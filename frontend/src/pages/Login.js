import {Fragment, useState} from 'react';
import axios from 'axios';
import loader from '../assets/images/loader.gif'

const BASE_URL = process.env.REACT_APP_API_URL;

const Login = ({setlogginState}) => {
    const intialState = {email: '', password: ''}
    const [user, setUser] = useState(intialState)
    const [error, setError] = useState(intialState);
    const [loginError, setLoginError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const changeHandler= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        setError({...error, [e.target.name]: ''})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        if(user.email === '')
        {
            return setError({...error, email: 'Email required'})
        }
        if(user.password === '')
        {
            return setError({...error, password: 'password required'})
        }
        // console.log(user)

        setIsLoading(true);
        try{
                // setError(intialState);
                const res = await axios.post(BASE_URL, user);
                // console.log(res.data);
                // setUser(intialState);
                // if(res)
                if(res.data.data === null){
                    setLoginError(res.data.message);
                }
                else{
                    setlogginState(res.data.data);
                }
            }
            catch(err)
            {
                if(err.response)
                {
                    setLoginError(err.response.data.error[0].msg);
                }
                console.log(err.response.data)
                setError(true);
            }
            setIsLoading(false);
    }
    
    return (
        <Fragment>
            <div className='row align-items-center justify-content-center vh-100'>
                {isLoading && <img className='loader' src={loader} alt="loader" /> }            
            <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
                    <h1 className="mb-2 text-center">
                        Sign In
                    </h1>
                    <div className='row mb-4'>
                        {loginError && <div className='alert alert-danger' >{loginError}</div>}    
                    </div>

                    <form method='post' action='#' onSubmit={(e) => submitHandler(e)}>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4">
                                    <label className="form-label">
                                        Email Address
                                    </label>
    
                                    <input autoComplete='off' type="email" name='email' onChange={(e) => changeHandler(e)} className="form-control" placeholder="Your email address" />
                                    {error?.email && <span className='text-danger'> {error.email}</span> }

                                </div>
                            </div>

                            <div className="col-12">
                                
                                <div className="mb-4">

                                    <div className="row">
                                        <div className="col">

                                            <label className="form-label">
                                                Password
                                            </label>
                                        </div>

                                        {/* <div className="col-auto">
                                            <a href="./reset-password-illustration.html" className="form-text small text-muted link-primary">Forgot password</a>
                                        </div> */}
                                    </div>
                                      <div className="input-group input-group-merge">
                                        <input type="password" name='password' onChange={(e) => changeHandler(e)} className="form-control" autoComplete="off" data-toggle-password-input="" placeholder="Your password" />
                                        {/* <button type="button" className="input-group-text px-4 text-secondary link-primary" data-toggle-password=""></button> */}
                                    </div>
                                        {error?.password && <span className='text-danger'> {error.password}</span> }
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center text-center">
                            <div className="col-12">
                                  <button type="submit" className="btn w-100 btn-primary mt-6 mb-2">Sign in</button>
                            </div>

                            <div className="col-12">

                                {/* <small className="mb-0 text-muted">Don't have an account yet? <a href="./sign-up-basic.html" className="fw-semibold">Sign up</a></small> */}
                            </div>
                        </div>
                    </form>
                </div>
                </div>            
        </Fragment>
    )
}

export default Login;
