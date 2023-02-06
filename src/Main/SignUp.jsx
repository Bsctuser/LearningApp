import { Card, Button, Input, Typography, Form, Divider } from 'antd';
import ShareIcon from '../assets/shareicon.png';
import { MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography;
import {Link} from 'react-router-dom'
const SignUp = () => (
  <Card 
    style={{
      width: 471,
      height:570,
      borderRadius: 30,
      borderColor: 'black',
    }}
  >
    <img  src={ShareIcon} />
    <Title level={3}>SIGN UP</Title>
    <Form
    name="nest-messages"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      name={['emailId']}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input size="large" placeholder="Email ID" suffix={<MailOutlined />}/>
    </Form.Item>
    <Form.Item
      name={['user', 'phoneNumber']}
      rules={[
        {
          required: true,
          message: 'Please input your Email ID!',
        },
      ]}
    >
        <Input size="large" placeholder="Phone Number" suffix={<PhoneOutlined/>}/>
    </Form.Item>
    <Form.Item
      name={['user', 'password']}
      rules={[
        {
          required: true,
          message: 'Please input your Phone Number!',
        },
      ]}
    >
      <Input.Password size="large" placeholder="Password" suffix={<LockOutlined />}/>
    </Form.Item>
    <Form.Item
      name={['user', 'confirmPassword']}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input.Password size="large" placeholder="Confirm Password" suffix={<LockOutlined />}/>
    </Form.Item>
    <Form.Item
    >
      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
    </Form.Item>
  </Form>
  <Divider style={{width:50}}/>
  <div>Already have an account? <Link to="/login">Login Now</Link></div>
  </Card>
);
export default SignUp;
