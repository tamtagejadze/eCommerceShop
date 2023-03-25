import {FaShopify} from 'react-icons/fa';
import {GoPerson} from 'react-icons/go'
import { Link } from 'react-router-dom';

export default function Page ({children}){
    return(
      <div>
        <nav className='nav'>
          <div className='left'>
            <Link to={"/"}><FaShopify className='logo'/></Link>
          </div>
          <div className='right'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <Link to={'/categories'}><li>Categories</li></Link>
            <li>
             <Link to={"/registration"}>
              <div className='login-div'>
                  <GoPerson/> 
                  <span>Log In</span>
                </div>
             </Link>
            </li>
          </div>
        </nav>

      {children}


        <footer>
          <div className="footer-div">
            <small>&copy; All rights reserved.</small>
          </div>
        </footer>
      </div>
    )
}