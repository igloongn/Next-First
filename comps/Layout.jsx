
import Navbar from './Navbar';
import Footer from './Footer';
import { HeadCom } from './Helper/HeadCom';


const Layout = ({ children }) => {
    return ( 
        <>
        <HeadCom />
            <Navbar />
                <div style={{ minHeight: '70vh'}}>
                    {children}
                </div>
            <Footer />
        </>
     );
}

export default Layout;

