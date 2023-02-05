
import { Card } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
const { Meta } = Card;
import { Input, Space, Button, Checkbox, Form ,Alert} from 'antd';

import ShareIcon from '../assets/shareicon.png';
import { UserOutlined } from '@ant-design/icons'


const Login = () => (
  <Card
    style={{
      width: 471,
      height: 570,
      borderRadius: 40,
      background: '#FFFFFF',
      borderColor: 'black'
    }}


  >
    <img src={ShareIcon} style={{ width: 118, height: 92 }} />
    <h2>LOGIN</h2>
    <Form >
      <Space direction='vertical'>
        <h3>Sign in to our account</h3>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },

          ]}
        >
          <Input suffix={<UserOutlined />} placeholder="enter phone no or mail" size='large'/>
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
          <Input.Password placeholder='enter password' size='large'/>
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <Checkbox >Remember me</Checkbox>
        </Form.Item>
        <Button type='primary' htmlType='submit'>Login</Button>
        <div>Not a member?<a>Sign Up now</a></div>
      </Space>


    </Form>
  </Card>
);
export default Login;
