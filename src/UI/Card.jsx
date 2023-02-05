import { Card } from 'antd';
const { Meta } = Card;
import ShareIcon from '../assets/shareicon.png';
const CustomCard = () => (
  <Card 
    style={{
      width: 471,
      height:570,
    }}
    
  >
    <Meta title="Login Card" description="ShareGuru" />
  </Card>
);
export default CustomCard;