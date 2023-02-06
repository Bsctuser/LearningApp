import { Button ,Space} from 'antd';
import {Link, Navigate} from 'react-router-dom'
import Login from '../Main/Login';
const Home = () => {
    
    return (<div>
        <h2>Welcome to ShareGuru</h2>
        <Space>
            <Button type='primary' >Login</Button>
            <Button type='primary'>SignUp</Button>
        </Space>
    </div>);
}

export default Home;