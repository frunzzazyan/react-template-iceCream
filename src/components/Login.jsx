import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="div-login-items">
        <div className="login">
            <h2>Login</h2>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="submit" />
            <div className="chackbox">
                <input type="checkbox" />
                <h5>Remember</h5>

            </div>
            <button>Forgot</button>
            <Link to='/signin'>
            <button>Sign In!</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Login