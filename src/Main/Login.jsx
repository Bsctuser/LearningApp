
import { Card, Divider } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
const { Meta } = Card;
import { Input, Space, Button, Checkbox, Form ,Alert, Typography} from 'antd';

import ShareIcon from '../assets/shareicon.png';
import { UserOutlined } from '@ant-design/icons'
const { Title } = Typography;
import {useNavigate, Link} from 'react-router-dom'
import SignUp from './SignUp';



const Login = () => {
    
    return(<Card
        style={{
          width: 471,
          height: 570,
          borderRadius: 30,
          background: '#FFFFFF',
          borderColor:'black'
        }}
        
    
    
      >
        <img src={ShareIcon} style={{ width: 118, height: 92 }} />
        <Title level={3}>LOGIN</Title>
        <h3>Sign in to our account</h3>
        <Form >
          
            
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
    
              ]}
            >
              <Input placeholder='email or phone no' suffix={<UserOutlined/>} size='large'/>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
                <Input.Password placeholder='enter password' size='large'  />
              
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
            <Checkbox >Remember me</Checkbox>
            </Form.Item>
            <Button type='primary' htmlType='submit'  style={{width:200}}>Login</Button>
            <Divider style={{width:50}} orientation='center' >OR</Divider>
            <div>Not a member?<Link to="/signup">Sign up now</Link></div>
          
    
    
        </Form>
        
      </Card>);
  
}
export default Login;
