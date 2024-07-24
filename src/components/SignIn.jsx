import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className="signin-div-items">
        <div className="signin">
            <h1>Sign In</h1>
            <div className="names">
                <input type="text" placeholder='fname' />
                <input type="text" placeholder='lname' />
            </div>
            <div className="eml-psw">
                <input type="email" name="email" placeholder='email' id="" />
                <input type="password" name="password" placeholder='password' id="" />
                <input type="password" name="r-password" placeholder='repeat password' id="" />
            </div>
            <input type="submit" value="Go for it" />
            <Link to='/login'>
            <input type="submit" value="Login" />
            </Link>
        </div>
    </div>
  )
}

export default SignIn