
import { Card, Divider } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
const { Meta } = Card;
import { Input, Space, Button, Checkbox, Form ,Alert} from 'antd';

import ShareIcon from '../assets/shareicon.png';
import { UserOutlined } from '@ant-design/icons'
import Title from 'antd/es/skeleton/Title';


const Login = () => (
  <Card
    style={{
      width: 471,
      height: 570,
      borderRadius: 30,
      background: '#FFFFFF',
      borderColor:'black'
    }}


  >
    <img src={ShareIcon} style={{ width: 118, height: 92 }} />
    <Title
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
        <Button type='primary' htmlType='submit' style={{width:100}}>Login</Button>
        <Divider style={{width:50}}/>
        <div>Not a member?<a>Sign Up now</a></div>
      


    </Form>
    
  </Card>
);
export default Login;
