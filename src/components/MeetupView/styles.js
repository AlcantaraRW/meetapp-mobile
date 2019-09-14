import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const InfoContainer = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin: 15px 0;
  padding: 0 20px;
  color: #333;
`;

export const Info = styled.Text`
  padding: 0 20px 8px;
  color: #999;
  font-size: 13px;
`;

export const RegistrationsClosedText = styled.Text`
  font-size: 16px;
  color: #f94d6a;
  text-align: center;
  margin-top: 10px;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 10px;
`;
