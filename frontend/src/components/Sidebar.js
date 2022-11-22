import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.jpeg';

const Sidebar = ({logoutHandler}) => {
    let sessiondata = JSON.parse(sessionStorage.getItem('user'));

    return (
        <Fragment>
            <nav id="mainNavbar" className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark">
            
                <Link className='navbar-brand' href='index'>
                    infoWay
                </Link>
            
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="sidenavCollapse">
                    <ul className="navbar-nav mb-lg-7">
                        <li className="nav-item dropdown">
                            <div className="nav-link d-flex align-items-center">
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img src={profile} alt="..." className="avatar-img" width="40" height="40" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className="mb-0">{sessiondata.email.substr(0,sessiondata.email.indexOf('@'))}</p>
                                        
                                    </div>
                                </div>
                            <a className="nav-link active" href="#dashboardsCollapse" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="dashboardsCollapse">
                                <svg viewBox="0 0 24 24" className="nav-link-icon" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                                <span>Dashboards</span>
                            </a>
                            <div className="collapse show" id="dashboardsCollapse">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        {/* <a href="./" className="nav-link"> */}
                                        <Link to="/" className="nav-link">
                                            User
                                        </Link>
                                        {/* </a> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <a href="./" className="nav-link "> */}
                                        <Link to="/add" className="nav-link ">
                                            Add user
                                        </Link>
                                        {/* </a> */}
                                    </li>
    
                                </ul>
                            </div>
                            <div>
                                <a onClick={(e)=>logoutHandler(e) } className="nav-link" href="/" role="button" aria-expanded="true" aria-controls="dashboardsCollapse">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="nav-link-icon" height="18" width="18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V21.75C3.75 22.5784 4.42157 23.25 5.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V11.25C20.25 10.4216 19.5784 9.75 18.75 9.75Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 9.75V6C6.75 4.60761 7.30312 3.27226 8.28769 2.28769C9.27226 1.30312 10.6076 0.75 12 0.75C13.3924 0.75 14.7277 1.30312 15.7123 2.28769C16.6969 3.27226 17.25 4.60761 17.25 6V9.75"></path><path stroke="currentColor" stroke-width="1.5" d="M12 16.5C11.7929 16.5 11.625 16.3321 11.625 16.125C11.625 15.9179 11.7929 15.75 12 15.75"></path><path stroke="currentColor" stroke-width="1.5" d="M12 16.5C12.2071 16.5 12.375 16.3321 12.375 16.125C12.375 15.9179 12.2071 15.75 12 15.75"></path></svg>
                                    <span >
                                            Logout
                                    </span>
                                </a>
                            </div>
                        </li>
                        
                    </ul>
              
                </div>
              </div>
        </nav>
        </Fragment>
    )
}

export default Sidebar;
