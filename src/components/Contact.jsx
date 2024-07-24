import './Contact.css'
import {GiClick} from 'react-icons/gi'
import {BiSolidCart} from 'react-icons/bi'
import {FaPenFancy} from 'react-icons/fa'
import {AiOutlineAlignLeft,AiFillStar} from 'react-icons/ai'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

const Contact = () => {
  return (
    <>
        <div className="contact-div">
                    <div className="cart-item">
                        <div className="svg">
                            <AiOutlineAlignLeft/>
                            <BiSolidCart/>
                        </div>
                        <div className="cart-img">
                            <img src="https://parspng.com/wp-content/uploads/2023/06/icecreampng.parspng.com-6.png" alt="" />
                        </div>
                        <div className="cart-item-stars">
                            <div className="div-line">
                                        <div className="line"></div>
                            </div>
                            <div className="stars">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                            <div className="cart-text">
                                <h3>Raspberry ice cream</h3>
                                <h4>with strawberry cream</h4>
                            </div>
                            <div className="price-dots">

                                <span style={{backgroundColor: '#ec3e72'}} className='dots'></span>
                                <div style={{backgroundColor: '#ec3e72'}} className="line-dots"></div>
                                <span style={{backgroundColor: '#ec3e72'}} className='dots'></span>
                                <div className="line-dots"></div>
                                <span className='dots'></span>
                                <div className="line-dots"></div>
                                <span className='dots'></span>
                                <div className="line-dots"></div>
                                <span className='dots'></span>
                             <h4>1,56$</h4>
                            </div>
                            <button className='add-btn'>Add to bag</button>
                        </div>
                    </div>

                    <div className="div-for-items">
                        <div className="div-for-items-text">
                                <h1>Simple Way To Order Your Food</h1>
                                <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
                        </div>
                        <div className="div-select-add-order">
                                <ul>
                                    <li><GiClick/> Select Your Food</li>
                                    <li><MdOutlineAddShoppingCart/> Add To Cart</li>
                                    <li><FaPenFancy/> Order Your Food</li>
                                </ul>
                              <div className="img-play-app">
                                    <img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-Transparent.png" alt="" />
                                    <img src="https://w7.pngwing.com/pngs/34/523/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png" alt="" />
                              </div>
                                
                        </div>
                    </div>
        </div>

        <div className="help-inp-div">
            <h2>Have Question in Mind? Let us help you</h2>
            <div className="inputs question">
                <input type="text" placeholder='Enter your question' />
                <input type="submit" value='Send' />
            </div>
        </div>
        <footer>
            <div className="list-1">
                <div className="logo">
                <img src="https://cdn1.ankama-shop.com/3043/pingwinkle-krosmaster-figurine.jpg" alt="" />
            </div>
            <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
            <div className="follow-div">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
            </div>
            </div>
            <div className="list-2">
                  <div className="footer-nav">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
            </div>
          <div className="list-3">
            <ul>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Search Terms</li>
                <li>Order & Return</li>
            </ul>
          </div>
          <div className="list-4">
            <h4>Newsletter</h4>
            <div className="inputs">
                <input type="email" placeholder='Your Email' />
                <input type="submit" value='Subscribe'/>
            </div>
            <div className="bank">
                <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/paypal-icon-logo.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
                <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png" alt="" />
            </div>
          </div>
        </footer>
    </>
  )
}

export default Contact