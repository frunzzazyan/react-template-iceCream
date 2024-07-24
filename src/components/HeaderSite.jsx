import { Link } from 'react-router-dom'

import './HeaderSite.css'



const HeaderSite = () => {
  return (
    <>
    <header>
        <div className='img-logo'>
            <img src="https://cdn1.ankama-shop.com/3043/pingwinkle-krosmaster-figurine.jpg" alt="" />
        </div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <span>/</span>
                <li><Link to='/product'>Product</Link></li>
                <span>/</span>
                <li><Link to='/login'>Login</Link></li>    
                <span>/</span>
                <li><Link to='/signin'>Sign In</Link></li>
                <span>/</span>
                <li><Link to='/contact'>Contact Us</Link></li>    
            </ul>
            <button>Buy Now</button>
        </nav>
    </header>
    </>
  )
}

export default HeaderSite