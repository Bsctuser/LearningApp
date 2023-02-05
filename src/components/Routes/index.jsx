import {Routes, Route} from 'react-router-dom'
import Login from '../../Main/Login'
import SignUp from '../../Main/SignUp'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    );

}

export default AppRoutes