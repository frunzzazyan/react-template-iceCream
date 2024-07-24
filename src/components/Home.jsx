import Contact from './Contact'
import Info from './Info'
import Login from './Login'
import Product from './Product'
import {Route,Routes} from 'react-router-dom'
import SignIn from './SignIn'

const Home = () => {
  return (
    <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Home