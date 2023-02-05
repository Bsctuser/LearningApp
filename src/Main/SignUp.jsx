import { Card, Button, Input, Typography, Form } from 'antd';
import ShareIcon from '../assets/shareicon.png';
import { MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
const { Title , Link } = Typography;
const SignUp = () => (
  <Card 
    style={{
      width: 471,
      height:570,
      border: 'red',
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
        },
      ]}
    >
      <Input size="large" placeholder="User name" suffix={<PhoneOutlined/>}/>
    </Form.Item>
    <Form.Item
      name={['user', 'password']}
      rules={[
        {
          required: true,
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
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
);
export default SignUp;
