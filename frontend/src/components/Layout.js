import {Fragment} from 'react';
import Footer from './include/Footer';

const Layout = ({children}) => {
    return (
        <Fragment>
            <main>
                <div className='container-fluid'>
                    {children}
                    <Footer />
                </div>
            </main>
            
        </Fragment>
    )
}

export default Layout;
