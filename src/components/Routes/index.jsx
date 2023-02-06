import {Routes, Route} from 'react-router-dom'
import Login from '../../Main/Login'
import SignUp from '../../Main/SignUp'
import Home from '../Home'
const AppRouters = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );

}

export default AppRouters